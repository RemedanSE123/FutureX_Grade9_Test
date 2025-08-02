"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, Flag, CheckCircle, AlertCircle } from "lucide-react"
import type { Subject, ExamMode, Question, UserAnswer } from "@/app/page"
import { getQuestionsForSubject } from "@/lib/questions"

interface ExamPageProps {
  subject: Subject
  mode: ExamMode
  onComplete: (answers: UserAnswer[]) => void
  onBack: () => void
}

export default function ExamPage({ subject, mode, onComplete, onBack }: ExamPageProps) {
  const [questions] = useState<Question[]>(getQuestionsForSubject(subject))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    questions.map((q) => ({ questionId: q.id, selectedAnswer: null, flagged: false })),
  )
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const [showExplanation, setShowExplanation] = useState(false)
  const [examFinished, setExamFinished] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = userAnswers.find((a) => a.questionId === currentQuestion.id)

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !examFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleFinishExam()
    }
  }, [timeLeft, examFinished])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = userAnswers.map((answer) =>
      answer.questionId === currentQuestion.id ? { ...answer, selectedAnswer: answerIndex } : answer,
    )
    setUserAnswers(newAnswers)

    if (mode === "test") {
      setShowExplanation(true)
    }
  }

  const handleFlagQuestion = () => {
    const newAnswers = userAnswers.map((answer) =>
      answer.questionId === currentQuestion.id ? { ...answer, flagged: !answer.flagged } : answer,
    )
    setUserAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    setShowExplanation(false)
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    setShowExplanation(false)
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleQuestionNavigation = (index: number) => {
    setShowExplanation(false)
    setCurrentQuestionIndex(index)
  }

  const handleFinishExam = () => {
    setExamFinished(true)
    onComplete(userAnswers)
  }

  const getQuestionStatus = (questionId: number) => {
    const answer = userAnswers.find((a) => a.questionId === questionId)
    if (answer?.flagged) return "flagged"
    if (answer?.selectedAnswer !== null) return "answered"
    return "unanswered"
  }

  const getStatusCounts = () => {
    const answered = userAnswers.filter((a) => a.selectedAnswer !== null).length
    const flagged = userAnswers.filter((a) => a.flagged).length
    const unanswered = questions.length - answered
    return { answered, flagged, unanswered }
  }

  const { answered, flagged, unanswered } = getStatusCounts()
  const progress = (answered / questions.length) * 100

  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button onClick={onBack} variant="ghost" className="text-white hover:bg-slate-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>

            <div className="text-center">
              <h1 className="text-xl font-bold">{mode === "exam" ? "Exam Mode" : "Practice Mode"}</h1>
              <p className="text-sm text-gray-300">{subjectName} - Exit Exam 2024</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-300">Time Remaining</div>
                <div className={`font-mono text-lg font-bold ${timeLeft < 300 ? "text-red-400" : "text-white"}`}>
                  <Clock className="w-4 h-4 inline mr-1" />
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>
              Progress: {answered}/{questions.length} questions answered
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">Questions</h3>

              {/* Status Summary */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center">
                  <div className="text-green-600 font-bold text-lg">{answered}</div>
                  <div className="text-gray-600">Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">{unanswered}</div>
                  <div className="text-gray-600">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-bold text-lg">{flagged}</div>
                  <div className="text-gray-600">Flagged</div>
                </div>
              </div>

              {/* Question Grid */}
              <div className="grid grid-cols-5 gap-2">
                {questions.map((question, index) => {
                  const status = getQuestionStatus(question.id)
                  const isActive = index === currentQuestionIndex

                  return (
                    <button
                      key={question.id}
                      onClick={() => handleQuestionNavigation(index)}
                      className={`
                        w-10 h-10 rounded text-sm font-semibold transition-all duration-200
                        ${isActive ? "ring-2 ring-blue-500" : ""}
                        ${status === "answered" ? "bg-green-500 text-white" : ""}
                        ${status === "flagged" ? "bg-yellow-500 text-black" : ""}
                        ${status === "unanswered" ? "bg-red-500 text-white" : ""}
                        hover:scale-105
                      `}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>

              <Button onClick={handleFinishExam} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                Submit Exam
              </Button>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <Button
                  onClick={handleFlagQuestion}
                  variant="outline"
                  className={`${currentAnswer?.flagged ? "bg-yellow-100 border-yellow-400 text-yellow-700" : ""}`}
                >
                  <Flag className="w-4 h-4 mr-2" />
                  {currentAnswer?.flagged ? "Flagged" : "Flag"}
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-8">
                    <p className="text-lg text-gray-800 leading-relaxed">{currentQuestion.question}</p>
                  </div>

                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const isSelected = currentAnswer?.selectedAnswer === index
                      const isCorrect = index === currentQuestion.correctAnswer
                      const showCorrectAnswer = mode === "test" && showExplanation

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={mode === "test" && showExplanation}
                          className={`
                            w-full p-4 rounded-lg text-left transition-all duration-200 border-2
                            ${isSelected && !showCorrectAnswer ? "border-blue-500 bg-blue-50" : "border-gray-200"}
                            ${showCorrectAnswer && isCorrect ? "border-green-500 bg-green-50" : ""}
                            ${showCorrectAnswer && isSelected && !isCorrect ? "border-red-500 bg-red-50" : ""}
                            ${!showCorrectAnswer ? "hover:border-gray-300 hover:bg-gray-50" : ""}
                            disabled:cursor-not-allowed
                          `}
                        >
                          <div className="flex items-center">
                            <div
                              className={`
                                w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center
                                ${isSelected ? "border-blue-500" : "border-gray-300"}
                                ${showCorrectAnswer && isCorrect ? "border-green-500" : ""}
                                ${showCorrectAnswer && isSelected && !isCorrect ? "border-red-500" : ""}
                              `}
                            >
                              {showCorrectAnswer && isCorrect && <CheckCircle className="w-4 h-4 text-green-500" />}
                              {showCorrectAnswer && isSelected && !isCorrect && (
                                <AlertCircle className="w-4 h-4 text-red-500" />
                              )}
                              {isSelected && !showCorrectAnswer && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
                            </div>
                            <span className="text-gray-800">{option}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Explanation for Practice Mode */}
                  {mode === "test" && showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
                      <p className="text-gray-700">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                  className="border-gray-300 bg-transparent"
                >
                  Previous
                </Button>

                {mode === "test" && showExplanation && currentQuestionIndex < questions.length - 1 && (
                  <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Next Question
                  </Button>
                )}

                {mode === "exam" && currentQuestionIndex < questions.length - 1 && (
                  <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Next Question
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RotateCcw, CheckCircle, XCircle, Flag, Eye, Award } from "lucide-react"
import type { Subject, UserAnswer } from "@/app/page"
import { getQuestionsForSubject } from "@/lib/questions"

interface ResultsPageProps {
  subject: Subject
  userAnswers: UserAnswer[]
  onRestart: () => void
}

export default function ResultsPage({ subject, userAnswers, onRestart }: ResultsPageProps) {
  const [reviewMode, setReviewMode] = useState(false)
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null)

  const questions = getQuestionsForSubject(subject)
  const totalQuestions = questions.length
  const answeredQuestions = userAnswers.filter((a) => a.selectedAnswer !== null).length
  const correctAnswers = userAnswers.filter((a) => {
    const question = questions.find((q) => q.id === a.questionId)
    return question && a.selectedAnswer === question.correctAnswer
  }).length
  const flaggedQuestions = userAnswers.filter((a) => a.flagged).length

  const score = Math.round((correctAnswers / totalQuestions) * 100)
  const missedQuestions = userAnswers.filter((a) => {
    const question = questions.find((q) => q.id === a.questionId)
    return question && a.selectedAnswer !== question.correctAnswer
  })

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { grade: "A+", color: "text-green-600", message: "Outstanding Performance!" }
    if (score >= 80) return { grade: "A", color: "text-green-600", message: "Excellent Work!" }
    if (score >= 70) return { grade: "B", color: "text-blue-600", message: "Good Performance!" }
    if (score >= 60) return { grade: "C", color: "text-yellow-600", message: "Satisfactory Performance" }
    return { grade: "F", color: "text-red-600", message: "Needs Improvement" }
  }

  const selectedQuestion = selectedQuestionId ? questions.find((q) => q.id === selectedQuestionId) : null
  const selectedAnswer = selectedQuestionId ? userAnswers.find((a) => a.questionId === selectedQuestionId) : null
  const scoreInfo = getScoreGrade(score)
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1)

  if (reviewMode && selectedQuestion && selectedAnswer) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-slate-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-4">
            <Button onClick={() => setReviewMode(false)} variant="ghost" className="text-white hover:bg-slate-800 mb-4">
              ← Back to Results
            </Button>
            <h1 className="text-2xl font-bold">Question Review</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Question {questions.findIndex((q) => q.id === selectedQuestion.id) + 1} Review
              </h2>
              {selectedAnswer.flagged && (
                <div className="flex items-center text-yellow-600">
                  <Flag className="w-5 h-5 mr-2" />
                  Flagged
                </div>
              )}
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">{selectedQuestion.question}</p>

              <div className="space-y-3">
                {selectedQuestion.options.map((option, index) => {
                  const isUserAnswer = selectedAnswer.selectedAnswer === index
                  const isCorrectAnswer = index === selectedQuestion.correctAnswer

                  return (
                    <div
                      key={index}
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-200
                        ${isCorrectAnswer ? "border-green-500 bg-green-50" : ""}
                        ${isUserAnswer && !isCorrectAnswer ? "border-red-500 bg-red-50" : ""}
                        ${!isUserAnswer && !isCorrectAnswer ? "border-gray-200 bg-gray-50" : ""}
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center">
                            {isCorrectAnswer && <CheckCircle className="w-4 h-4 text-green-500" />}
                            {isUserAnswer && !isCorrectAnswer && <XCircle className="w-4 h-4 text-red-500" />}
                          </div>
                          <span className="text-gray-800">{option}</span>
                        </div>
                        <div className="text-sm">
                          {isUserAnswer && <span className="text-gray-600">Your answer</span>}
                          {isCorrectAnswer && <span className="text-green-600 font-medium">Correct answer</span>}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
                <p className="text-gray-700">{selectedQuestion.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Examination Complete</h1>
            <p className="text-xl text-gray-300">{subjectName} - Exit Exam Results</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-lg p-8 mb-8 text-center"
        >
          <div className={`text-6xl font-bold mb-4 ${scoreInfo.color}`}>{score}%</div>
          <div className={`text-3xl font-bold mb-2 ${scoreInfo.color}`}>{scoreInfo.grade}</div>
          <div className="text-xl text-gray-600 mb-6">{scoreInfo.message}</div>

          <div className="max-w-md mx-auto mb-6">
            <Progress value={score} className="h-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-gray-600">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{totalQuestions - correctAnswers}</div>
              <div className="text-gray-600">Incorrect</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{answeredQuestions}</div>
              <div className="text-gray-600">Answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{flaggedQuestions}</div>
              <div className="text-gray-600">Flagged</div>
            </div>
          </div>
        </motion.div>

        {/* Missed Questions */}
        {missedQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <XCircle className="w-6 h-6 mr-2 text-red-600" />
              Questions for Review ({missedQuestions.length})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missedQuestions.map((answer) => {
                const question = questions.find((q) => q.id === answer.questionId)
                if (!question) return null

                const questionNumber = questions.findIndex((q) => q.id === question.id) + 1

                return (
                  <div
                    key={question.id}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
                    onClick={() => {
                      setSelectedQuestionId(question.id)
                      setReviewMode(true)
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-red-600 font-semibold">Question {questionNumber}</span>
                      <div className="flex items-center space-x-2">
                        {answer.flagged && <Flag className="w-4 h-4 text-yellow-600" />}
                        <Eye className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm mb-2 line-clamp-2">{question.question}</p>
                    <div className="text-xs">
                      <div className="text-red-600">
                        Your answer:{" "}
                        {answer.selectedAnswer !== null ? question.options[answer.selectedAnswer] : "Not answered"}
                      </div>
                      <div className="text-green-600">Correct: {question.options[question.correctAnswer]}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Take Another Exam
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

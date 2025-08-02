"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import WelcomePage from "@/components/welcome-page"
import SectionPage from "@/components/section-page"
import ModeSelection from "@/components/mode-selection"
import ExamPage from "@/components/exam-page"
import ResultsPage from "@/components/results-page"

export type ExamMode = "exam" | "test"
export type Section = "natural" | "social"
export type Subject = "biology" | "chemistry" | "physics" | "history" | "geography" | "civics"

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface UserAnswer {
  questionId: number
  selectedAnswer: number | null
  flagged: boolean
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"welcome" | "section" | "mode" | "exam" | "results">("welcome")
  const [selectedSection, setSelectedSection] = useState<Section | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [examMode, setExamMode] = useState<ExamMode>("exam")
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [examCompleted, setExamCompleted] = useState(false)

  const handleSectionSelect = (section: Section) => {
    setSelectedSection(section)
    setCurrentPage("section")
  }

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setCurrentPage("mode")
  }

  const handleModeSelect = (mode: ExamMode) => {
    setExamMode(mode)
    setCurrentPage("exam")
  }

  const handleExamComplete = (answers: UserAnswer[]) => {
    setUserAnswers(answers)
    setExamCompleted(true)
    setCurrentPage("results")
  }

  const handleRestart = () => {
    setCurrentPage("welcome")
    setSelectedSection(null)
    setSelectedSubject(null)
    setUserAnswers([])
    setExamCompleted(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {currentPage === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WelcomePage onSectionSelect={handleSectionSelect} />
          </motion.div>
        )}

        {currentPage === "section" && selectedSection && (
          <motion.div
            key="section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionPage
              section={selectedSection}
              onSubjectSelect={handleSubjectSelect}
              onBack={() => setCurrentPage("welcome")}
            />
          </motion.div>
        )}

        {currentPage === "mode" && (
          <motion.div
            key="mode"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ModeSelection onModeSelect={handleModeSelect} onBack={() => setCurrentPage("section")} />
          </motion.div>
        )}

        {currentPage === "exam" && selectedSubject && (
          <motion.div
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExamPage
              subject={selectedSubject}
              mode={examMode}
              onComplete={handleExamComplete}
              onBack={() => setCurrentPage("mode")}
            />
          </motion.div>
        )}

        {currentPage === "results" && selectedSubject && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResultsPage subject={selectedSubject} userAnswers={userAnswers} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Eye, Target, BookOpen } from "lucide-react"
import type { ExamMode } from "@/app/page"

interface ModeSelectionProps {
  onModeSelect: (mode: ExamMode) => void
  onBack: () => void
}

export default function ModeSelection({ onModeSelect, onBack }: ModeSelectionProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button onClick={onBack} variant="ghost" className="text-white hover:bg-slate-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">Select Examination Mode</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exam Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => onModeSelect("exam")}
          >
            <div className="text-center mb-6">
              <Target className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Exam Mode</h3>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Recommended
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-center">
              Simulate real examination conditions. Answers and explanations are shown only after completing all
              questions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <span>30-minute time limit</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Eye className="w-5 h-5 mr-3 text-blue-600" />
                <span>No immediate feedback</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                <span>Complete review at the end</span>
              </div>
            </div>
          </motion.div>

          {/* Test Mode */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => onModeSelect("test")}
          >
            <div className="text-center mb-6">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Practice Mode</h3>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Learning
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-center">
              Learn as you practice. Get immediate feedback with answers and explanations after each question.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <span>30-minute time limit</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Eye className="w-5 h-5 mr-3 text-blue-600" />
                <span>Immediate feedback</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                <span>Learn while practicing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

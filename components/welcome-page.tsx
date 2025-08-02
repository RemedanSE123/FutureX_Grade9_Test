"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, GraduationCap } from "lucide-react"
import type { Section } from "@/app/page"

interface WelcomePageProps {
  onSectionSelect: (section: Section) => void
}

export default function WelcomePage({ onSectionSelect }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-2">FutureX</h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-300">National Entrance Exam Preparation</h2>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Select Your Field of Study</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prepare for your national entrance examination with our comprehensive question bank. Each section contains
            carefully curated questions designed to test your knowledge and readiness.
          </p>
        </motion.div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onSectionSelect("natural")}
            >
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Natural Sciences</h4>
              <p className="text-gray-600 mb-4">Biology, Chemistry, Physics</p>
              <div className="text-sm text-gray-500">
                <div>• 20 Questions per subject</div>
                <div>• 30 Minutes duration</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div
              className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onSectionSelect("social")}
            >
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Social Sciences</h4>
              <p className="text-gray-600 mb-4">History, Geography, Civics</p>
              <div className="text-sm text-gray-500">
                <div>• 20 Questions per subject</div>
                <div>• 30 Minutes duration</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto"
        >
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Examination Instructions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>• Read each question carefully</div>
            <div>• Select only one answer per question</div>
            <div>• You can flag questions for review</div>
            <div>• Time limit is strictly enforced</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

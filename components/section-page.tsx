"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Microscope, Atom, Dna, Globe, MapPin, Scale } from "lucide-react"
import type { Section, Subject } from "@/app/page"

interface SectionPageProps {
  section: Section
  onSubjectSelect: (subject: Subject) => void
  onBack: () => void
}

const subjects = {
  natural: [
    {
      id: "biology" as Subject,
      name: "Biology",
      icon: Dna,
      description: "Study of living organisms and life processes",
    },
    {
      id: "chemistry" as Subject,
      name: "Chemistry",
      icon: Atom,
      description: "Science of matter, its properties and reactions",
    },
    {
      id: "physics" as Subject,
      name: "Physics",
      icon: Microscope,
      description: "Study of matter, energy and their interactions",
    },
  ],
  social: [
    {
      id: "history" as Subject,
      name: "History",
      icon: Globe,
      description: "Study of past events and civilizations",
    },
    {
      id: "geography" as Subject,
      name: "Geography",
      icon: MapPin,
      description: "Study of Earth's features and human interaction",
    },
    {
      id: "civics" as Subject,
      name: "Civics",
      icon: Scale,
      description: "Study of citizenship and government",
    },
  ],
}

export default function SectionPage({ section, onSubjectSelect, onBack }: SectionPageProps) {
  const sectionSubjects = subjects[section]
  const sectionTitle = section === "natural" ? "Natural Sciences" : "Social Sciences"

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
            <h1 className="text-2xl md:text-3xl font-bold">{sectionTitle}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose a Subject</h2>
          <p className="text-gray-600">Select a subject to begin your examination preparation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectionSubjects.map((subject, index) => {
            const IconComponent = subject.icon
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => onSubjectSelect(subject.id)}
              >
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                <div className="text-xs text-gray-500">
                  <div>20 Questions</div>
                  <div>30 Minutes</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

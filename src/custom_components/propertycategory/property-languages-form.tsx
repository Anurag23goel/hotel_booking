"use client"

import { useState } from "react"

interface PropertyLanguagesFormProps {
  setCurrentForm: (form: string) => void
  updateFormData: (data: { languages: string[] }) => void
  formData: any
}

export default function PropertyLanguagesForm({
  setCurrentForm,
  updateFormData,
  formData,
}: PropertyLanguagesFormProps) {
  const [languages, setLanguages] = useState<string[]>(formData.languages || [])
  const [showAdditional, setShowAdditional] = useState(false)

  const commonLanguages = ["English", "Hindi"]
  const additionalLanguages = [
    "French",
    "German",
    "Spanish",
    "Italian",
    "Chinese",
    "Japanese",
    "Russian",
    "Arabic",
    "Portuguese",
  ]

  const handleLanguageToggle = (language: string) => {
    setLanguages((prev) => {
      if (prev.includes(language)) {
        return prev.filter((l) => l !== language)
      } else {
        return [...prev, language]
      }
    })
  }

  const handleContinue = () => {
    updateFormData({ languages })
    setCurrentForm("propertyRules")
  }

  const handleBack = () => {
    setCurrentForm("propertyServices")
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">What languages do you or your staff speak?</h1>

      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Select languages</h2>

        <div className="space-y-3 mb-6">
          {commonLanguages.map((language) => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                checked={languages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
              />
              <span className="ml-2">{language}</span>
            </label>
          ))}
        </div>

        {showAdditional ? (
          <div className="space-y-3 mb-4 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {additionalLanguages.map((language) => (
                <label key={language} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={languages.includes(language)}
                    onChange={() => handleLanguageToggle(language)}
                    className="h-5 w-5 text-[#0071c2] focus:ring-[#0071c2] border-gray-300 rounded"
                  />
                  <span className="ml-2">{language}</span>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <button onClick={() => setShowAdditional(true)} className="text-[#0071c2] font-medium hover:underline">
            Add additional languages
          </button>
        )}
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-2 h-12 border border-gray-300 rounded-md hover:bg-gray-50" onClick={handleBack}>
          <span className="text-[#0071c2]">←</span>
        </button>
        <button
          className="flex-1 md:flex-none md:min-w-[200px] bg-[#0071c2] hover:bg-[#00487a] text-white h-12 rounded-md"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

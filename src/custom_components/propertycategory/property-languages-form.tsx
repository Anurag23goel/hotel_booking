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
  const [languages, setLanguages] = useState(formData.languages || [])
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
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        What languages do you or your staff speak?
      </h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Select languages
        </h3>
        
        <div className="space-y-3 mb-6">
          {commonLanguages.map((language) => (
            <div key={language} className="flex items-center">
              <input
                type="checkbox"
                id={`language-${language}`}
                checked={languages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`language-${language}`} className="ml-2 text-gray-700">
                {language}
              </label>
            </div>
          ))}
        </div>
        
        {showAdditional ? (
          <div className="space-y-3 border-t pt-4">
            <h4 className="font-medium text-gray-700 mb-2">Additional languages</h4>
            <div className="grid grid-cols-2 gap-3">
              {additionalLanguages.map((language) => (
                <div key={language} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`language-${language}`}
                    checked={languages.includes(language)}
                    onChange={() => handleLanguageToggle(language)}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`language-${language}`} className="ml-2 text-gray-700">
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAdditional(true)}
            className="text-blue-600 font-medium hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add additional languages
          </button>
        )}
      </div>
      
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 font-medium hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          onClick={handleContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center"
        >
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
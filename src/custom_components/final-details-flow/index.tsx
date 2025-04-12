import { User, HelpCircle, ChevronDown } from "lucide-react"
import FinalDetailsProgressBar from "./final-details-progress-bar"
import InvoicingForm from "./invoicing-form"
import LicenseNumberForm from "./license-number-form"
import PartnerVerificationForm from "./partner-verification-form"
import TaxDetailsForm from "./tax-details-form"

interface FinalDetailsFlowProps {
  currentForm: string
  setCurrentForm: (form: string) => void
  finalDetailsData: any
  updateFinalDetailsData: (data: any) => void
  onFinish: () => void
  onCancel: () => void
}

export default function FinalDetailsFlow({
  currentForm,
  setCurrentForm,
  finalDetailsData,
  updateFinalDetailsData,
  onFinish,
  onCancel,
}: FinalDetailsFlowProps) {
  const handleSetCurrentForm = (form: string) => {
    if (form === "propertySummary") {
      onFinish()
    } else {
      setCurrentForm(form)
    }
  }

  const renderForm = () => {
    switch (currentForm) {
      case "invoicing":
        return (
          <InvoicingForm
            setCurrentForm={handleSetCurrentForm}
            updateFinalDetailsData={updateFinalDetailsData}
            finalDetailsData={finalDetailsData}
          />
        )
      case "licenseNumber":
        return (
          <LicenseNumberForm
            setCurrentForm={handleSetCurrentForm}
            updateFinalDetailsData={updateFinalDetailsData}
            finalDetailsData={finalDetailsData}
          />
        )
      case "partnerVerification":
        return (
          <PartnerVerificationForm
            setCurrentForm={handleSetCurrentForm}
            updateFinalDetailsData={updateFinalDetailsData}
            finalDetailsData={finalDetailsData}
          />
        )
      case "taxDetails":
        return (
          <TaxDetailsForm
            setCurrentForm={handleSetCurrentForm}
            updateFinalDetailsData={updateFinalDetailsData}
            finalDetailsData={finalDetailsData}
          />
        )
      default:
        return (
          <InvoicingForm
            setCurrentForm={handleSetCurrentForm}
            updateFinalDetailsData={updateFinalDetailsData}
            finalDetailsData={finalDetailsData}
          />
        )
    }
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Booking.com</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center text-sm hover:bg-blue-800 px-2 py-1 rounded">
              <img 
                src="/api/placeholder/30/20" 
                alt="UK Flag" 
                className="mr-2 h-4 w-6 rounded-sm border border-white border-opacity-20" 
              />
              <span>EN</span>
              <ChevronDown className="h-4 w-4 ml-1 opacity-60" />
            </button>
            
            <button className="flex items-center text-sm hover:bg-blue-800 px-2 py-1 rounded">
              <span className="mr-1">Help</span>
              <div className="h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-medium text-xs">
                ?
              </div>
            </button>
            
            <button className="h-8 w-8 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <FinalDetailsProgressBar currentForm={currentForm} />
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto w-full px-4 py-6 flex-1">
          {renderForm()}
        </div>
      </div>
      
      {/* Optional Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        <div className="max-w-4xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Booking.com™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
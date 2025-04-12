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
    <div className="flex-1 flex flex-col">
      <div className="bg-[#003580] text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Booking.com</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=20&width=30" alt="UK Flag" className="mr-2 h-5 w-7" />
          </div>
          <div className="flex items-center gap-1">
            <span>Help</span>
            <div className="h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-[#003580] font-bold">
              ?
            </div>
          </div>
          <div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-[#003580]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-b">
        <FinalDetailsProgressBar currentForm={currentForm} />
      </div>

      <div className="flex-1 flex flex-col">{renderForm()}</div>
    </div>
  )
}

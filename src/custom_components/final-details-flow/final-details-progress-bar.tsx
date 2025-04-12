interface FinalDetailsProgressBarProps {
    currentForm: string;
  }
  
  export default function FinalDetailsProgressBar({ currentForm }: FinalDetailsProgressBarProps) {
    const formSteps = ["invoicing", "licenseNumber", "partnerVerification", "taxDetails"];
    const stepLabels = ["Invoicing", "License", "Verification", "Tax Details"];
    
    const getCurrentStepIndex = () => {
      const index = formSteps.indexOf(currentForm);
      return index === -1 ? formSteps.length - 1 : index;
    };
    
    const currentStepIndex = getCurrentStepIndex();
  
    return (
      <div className="w-full py-6">
        {/* Progress bar */}
        <div className="relative mb-8">
          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${(currentStepIndex / (formSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {/* Step indicators */}
          <div className="absolute top-0 w-full flex justify-between -mt-2">
            {formSteps.map((step, index) => {
              const isCompleted = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;
              
              return (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-5 h-5 rounded-full flex items-center justify-center z-10
                      ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}
                      ${isCurrent ? 'ring-2 ring-blue-300 ring-offset-2' : ''}`}
                  >
                    {isCompleted && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    )}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${isCompleted ? 'text-blue-600' : 'text-gray-500'}`}>
                    {stepLabels[index]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Current step label */}
        <div className="text-center">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStepIndex + 1}/{formSteps.length}: {stepLabels[currentStepIndex]}
          </span>
        </div>
      </div>
    );
  }
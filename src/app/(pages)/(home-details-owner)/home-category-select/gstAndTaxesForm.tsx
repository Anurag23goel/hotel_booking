import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GuestCanUse from "./guestCanUse";
interface FormData {
  // Ownership Details
  propertyOwnership: "owned" | "leased";
  hasRegistrationDoc: "yes" | "no";
  registrationDoc: FileList;

  // ID Proofs
  hasAadhar: "yes" | "no";
  aadharNumber: string;
  idProofType: "driving" | "voter" | "passport" | "none";
  idProofDoc: FileList;

  // Payment Details
  hasGSTN: "yes" | "no";
  gstNumber: string;
  panNumber: string;
  hasTAN: "yes" | "no";
  tanNumber: string;

  // Bank Details
  accountNumber: string;
  ifscCode: string;
  bankName: string;
}

const GstAndTaxesForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [showGuestCanUse, setShowGuestCanUse] = useState(false);

  if(showGuestCanUse){
    return <GuestCanUse />
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };


  const hasAadhar = watch("hasAadhar");
  const hasGSTN = watch("hasGSTN");
  const hasTAN = watch("hasTAN");

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">Goods and Services Tax (GST)</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-4">
              {/* Ownership Details Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Ownership Details
                </h2>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Is your property owned or leased?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="owned"
                        {...register("propertyOwnership", {
                          required: "Please select ownership status",
                        })}
                        className="mr-2"
                      />
                      Owned
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="leased"
                        {...register("propertyOwnership", {
                          required: "Please select ownership status",
                        })}
                        className="mr-2"
                      />
                      Leased
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Do you have registration document?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="yes"
                        {...register("hasRegistrationDoc", {
                          required:
                            "Please select if you have registration document",
                        })}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="no"
                        {...register("hasRegistrationDoc", {
                          required:
                            "Please select if you have registration document",
                        })}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload registration document
                  </label>
                  <input
                    type="file"
                    {...register("registrationDoc")}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* ID Proofs Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  ID Proofs
                </h2>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Do you have Aadhar as ID Proof?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="yes"
                        {...register("hasAadhar", {
                          required: "Please select if you have Aadhar",
                        })}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="no"
                        {...register("hasAadhar", {
                          required: "Please select if you have Aadhar",
                        })}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                {hasAadhar === "yes" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Enter Aadhar Number
                    </label>
                    <input
                      type="text"
                      {...register("aadharNumber", {
                        required: "Aadhar number is required",
                      })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter 12-digit Aadhar number"
                    />
                  </div>
                )}

                {hasAadhar === "no" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Select ID Proof Type
                    </label>
                    <select
                      {...register("idProofType", {
                        required: "Please select an ID proof type",
                      })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select document type</option>
                      <option value="driving">Driving License</option>
                      <option value="voter">Voter ID</option>
                      <option value="passport">Passport</option>
                      <option value="none">No document</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Payment Details Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Details
                </h2>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    GST/PAN Details
                  </h3>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Do you have GSTN?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          {...register("hasGSTN", {
                            required: "Please select if you have GSTN",
                          })}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          {...register("hasGSTN", {
                            required: "Please select if you have GSTN",
                          })}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {hasGSTN === "yes" && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Enter GST Number
                      </label>
                      <input
                        type="text"
                        {...register("gstNumber", {
                          required: "GST number is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter GST number"
                      />
                    </div>
                  )}

                  {hasGSTN === "no" && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Enter PAN Number
                      </label>
                      <input
                        type="text"
                        {...register("panNumber", {
                          required: "PAN number is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter PAN number"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Do you have a TAN Number?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          {...register("hasTAN", {
                            required: "Please select if you have TAN",
                          })}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          {...register("hasTAN", {
                            required: "Please select if you have TAN",
                          })}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {hasTAN === "yes" && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Enter TAN Number
                      </label>
                      <input
                        type="text"
                        {...register("tanNumber", {
                          required: "TAN number is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter TAN number"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Bank Details
                  </h3>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Account Number
                    </label>
                    <input
                      type="text"
                      {...register("accountNumber", {
                        required: "Account number is required",
                      })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter account number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      {...register("ifscCode", {
                        required: "IFSC code is required",
                      })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter IFSC code"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      {...register("bankName", {
                        required: "Bank name is required",
                      })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter bank name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {setShowGuestCanUse(true)}}
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors font-medium"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GstAndTaxesForm;

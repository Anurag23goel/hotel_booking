"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HotelName from "./(basicInfo)/hotelName";

interface FinanceAndLegalFormData {
  ownershipDetails: {
    propertyOwnership: "owned" | "leased";
    hasRegistrationDocument: boolean;
    registrationDocument: File | null;
  };
  idProofs: {
    hasAadhar: boolean;
    aadharNumber: string;
    selectedDocument: "drivingLicense" | "voterId" | "passport" | "none";
    documentFile: File | null;
  };
  paymentDetails: {
    gstPan: {
      hasGSTN: boolean;
      gstNumber: string;
      panNumber: string;
    };
    hasTAN: boolean;
    bankDetails: {
      accountNumber: string;
      ifscCode: string;
      bankName: string;
    };
  };
}

const FinanceAndLegal = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FinanceAndLegalFormData>({
    defaultValues: {
      ownershipDetails: {
        propertyOwnership: "owned",
        hasRegistrationDocument: false,
        registrationDocument: null,
      },
      idProofs: {
        hasAadhar: false,
        aadharNumber: "",
        selectedDocument: "none",
        documentFile: null,
      },
      paymentDetails: {
        gstPan: {
          hasGSTN: false,
          gstNumber: "",
          panNumber: "",
        },
        hasTAN: false,
        bankDetails: {
          accountNumber: "",
          ifscCode: "",
          bankName: "",
        },
      },
    },
  });
  const [showHotelName, setShowHotelName] = useState(false);

  // Watch form values for conditional rendering
  const hasRegistrationDocument = watch(
    "ownershipDetails.hasRegistrationDocument"
  );
  const hasAadhar = watch("idProofs.hasAadhar");
  const hasGSTN = watch("paymentDetails.gstPan.hasGSTN");
  const hasTAN = watch("paymentDetails.hasTAN");
  const selectedDocument = watch("idProofs.selectedDocument");

  if (showHotelName) {
    return <HotelName />;
  }

  const onSubmit = (data: FinanceAndLegalFormData) => {
    console.log(data);
  };

  const handleFileChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setValue(field as any, e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl w-full space-y-4 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-gray-900">
              Finance & Legal
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Ownership Details Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Ownership Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Details
                    </label>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Is your property owned or leased?
                        </label>
                        <div className="mt-1 space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="owned"
                              {...register(
                                "ownershipDetails.propertyOwnership"
                              )}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Owned</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="leased"
                              {...register(
                                "ownershipDetails.propertyOwnership"
                              )}
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">
                              Leased
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Do you have registration document?
                        </label>
                        <div className="mt-1 space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="true"
                              {...register(
                                "ownershipDetails.hasRegistrationDocument"
                              )}
                              onChange={() =>
                                setValue(
                                  "ownershipDetails.hasRegistrationDocument",
                                  true
                                )
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="false"
                              {...register(
                                "ownershipDetails.hasRegistrationDocument"
                              )}
                              onChange={() =>
                                setValue(
                                  "ownershipDetails.hasRegistrationDocument",
                                  false
                                )
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      {hasRegistrationDocument && (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Upload registration document
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(
                                "ownershipDetails.registrationDocument",
                                e
                              )
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ID Proofs Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    ID Proofs
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Do you have Aadhar as ID Proof?
                    </label>
                    <div className="mt-1 space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="true"
                          {...register("idProofs.hasAadhar")}
                          onChange={() => setValue("idProofs.hasAadhar", true)}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value="false"
                          {...register("idProofs.hasAadhar")}
                          onChange={() => setValue("idProofs.hasAadhar", false)}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-md text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {hasAadhar ? (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Enter the Aadhar number
                      </label>
                      <input
                        type="text"
                        {...register("idProofs.aadharNumber", {
                          required: "Aadhar number is required",
                          pattern: {
                            value: /^\d{12}$/,
                            message: "Aadhar number must be 12 digits",
                          },
                        })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter 12-digit Aadhar number"
                      />
                      {errors.idProofs?.aadharNumber && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.idProofs.aadharNumber.message}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Select the document to upload
                      </label>
                      <div className="mt-1 space-y-2">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="drivingLicense"
                            {...register("idProofs.selectedDocument")}
                            onChange={() =>
                              setValue(
                                "idProofs.selectedDocument",
                                "drivingLicense"
                              )
                            }
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-md text-gray-700">
                            Driving license
                          </span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="voterId"
                            {...register("idProofs.selectedDocument")}
                            onChange={() =>
                              setValue("idProofs.selectedDocument", "voterId")
                            }
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-md text-gray-700">
                            Voter ID
                          </span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="passport"
                            {...register("idProofs.selectedDocument")}
                            onChange={() =>
                              setValue("idProofs.selectedDocument", "passport")
                            }
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-md text-gray-700">
                            Passport
                          </span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            value="none"
                            {...register("idProofs.selectedDocument")}
                            onChange={() =>
                              setValue("idProofs.selectedDocument", "none")
                            }
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-md text-gray-700">
                            No document
                          </span>
                        </label>
                      </div>

                      {selectedDocument !== "none" && (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Upload document
                          </label>
                          <input
                            type="file"
                            onChange={(e) =>
                              handleFileChange("idProofs.documentFile", e)
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Details Section */}
              <div className="bg-white rounded-lg p-4 space-y-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Payment Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-medium text-gray-700">
                      GST/PAN Details
                    </h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Do you have GSTN?
                        </label>
                        <div className="mt-1 space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="true"
                              {...register("paymentDetails.gstPan.hasGSTN")}
                              onChange={() =>
                                setValue("paymentDetails.gstPan.hasGSTN", true)
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="false"
                              {...register("paymentDetails.gstPan.hasGSTN")}
                              onChange={() =>
                                setValue("paymentDetails.gstPan.hasGSTN", false)
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      {hasGSTN ? (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Enter a GST Number
                          </label>
                          <input
                            type="text"
                            {...register("paymentDetails.gstPan.gstNumber", {
                              required: "GST Number is required",
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter GST Number"
                          />
                          {errors.paymentDetails?.gstPan?.gstNumber && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.paymentDetails.gstPan.gstNumber.message}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Enter a PAN Number
                          </label>
                          <input
                            type="text"
                            {...register("paymentDetails.gstPan.panNumber", {
                              required: "PAN Number is required",
                              pattern: {
                                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                message: "Invalid PAN Number format",
                              },
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter PAN Number"
                          />
                          {errors.paymentDetails?.gstPan?.panNumber && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.paymentDetails.gstPan.panNumber.message}
                            </p>
                          )}
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Do you have a TAN Number?
                        </label>
                        <div className="mt-1 space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="true"
                              {...register("paymentDetails.hasTAN")}
                              onChange={() =>
                                setValue("paymentDetails.hasTAN", true)
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              value="false"
                              {...register("paymentDetails.hasTAN")}
                              onChange={() =>
                                setValue("paymentDetails.hasTAN", false)
                              }
                              className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-md text-gray-700">No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-gray-700">
                      Bank Details
                    </h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Account Number
                        </label>
                        <input
                          type="text"
                          {...register(
                            "paymentDetails.bankDetails.accountNumber",
                            {
                              required: "Account number is required",
                            }
                          )}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter account number"
                        />
                        {errors.paymentDetails?.bankDetails?.accountNumber && (
                          <p className="mt-1 text-sm text-red-600">
                            {
                              errors.paymentDetails.bankDetails.accountNumber
                                .message
                            }
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          {...register("paymentDetails.bankDetails.ifscCode", {
                            required: "IFSC code is required",
                            pattern: {
                              value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                              message: "Invalid IFSC code format",
                            },
                          })}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter IFSC code"
                        />
                        {errors.paymentDetails?.bankDetails?.ifscCode && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.paymentDetails.bankDetails.ifscCode.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          {...register("paymentDetails.bankDetails.bankName", {
                            required: "Bank name is required",
                          })}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter bank name"
                        />
                        {errors.paymentDetails?.bankDetails?.bankName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.paymentDetails.bankDetails.bankName.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setShowHotelName(true);
                  }}
                  type="submit"
                  className="flex-1 px-3 py-1.5 bg-[#040928] text-white rounded-lg hover:bg-[#1d2030] transition-colors font-medium text-sm"
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

export default FinanceAndLegal;

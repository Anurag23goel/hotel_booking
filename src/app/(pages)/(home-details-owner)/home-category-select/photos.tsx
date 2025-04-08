"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, X } from "lucide-react";

import GuestCanUse from "./guestCanUse";

interface FormData {
  propertyName: string;
  propertyDescription: string;
  photos: FileList;
}

const Photos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const [showGuestCanUse, setShowGuestCanUse] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (files.length < 5) {
      setUploadError("Please upload at least 5 photos");
      return;
    }

    setUploadError("");

    // Create preview URLs for the uploaded images
    const newPreviewUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages(newPreviewUrls);
  };

  const removeImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  if (showGuestCanUse) {
    return <GuestCanUse />;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowGuestCanUse(true);
  };

  return (
    <div>
      <div className="min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-3xl w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-gray-900">
              What does your place look like?
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Photo Upload Section */}
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    Upload at least 5 photos of your property. The more you
                    upload, the more likely you are to get bookings. You can add
                    more later.
                  </p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="photos"
                    multiple
                    accept="image/*"
                    className="hidden"
                    {...register("photos", {
                      onChange: handleFileChange,
                      required: "Please upload at least 5 photos",
                    })}
                  />
                  <label
                    htmlFor="photos"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />
                    <span className="text-gray-600 font-medium">
                      Click to upload photos
                    </span>
                    <span className="text-gray-500 text-sm mt-1">
                      or drag and drop
                    </span>
                  </label>
                </div>

                {uploadError && (
                  <p className="text-red-500 text-sm">{uploadError}</p>
                )}

                {/* Preview Images */}
                {previewImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {previewImages.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
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

export default Photos;

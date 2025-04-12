"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Upload, X, Plus, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

import PricingAndAvailability from "./pricingAndAvailability";

interface FormData {
  propertyName: string;
  propertyDescription: string;
  photos: FileList;
}

interface PhotosProps {
  onComplete?: () => void;
}

const Photos = ({ onComplete }: PhotosProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const [showPricingAndAvailability, setShowPricingAndAvailability] =
    useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  if (showPricingAndAvailability) {
    return <PricingAndAvailability onComplete={onComplete} />;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    onComplete?.();
    setShowPricingAndAvailability(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add photos</h1>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Add at least 5 photos
              </h2>
              <p className="text-sm text-gray-500">
                Add photos of your property. You can add more later.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {previewImages.map((url, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square relative">
                      <Image
                        src={url}
                        alt={`Preview ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority={index < 2}
                      />
                    </div>
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {previewImages.length < 20 && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <Plus className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Add photo</span>
                  </div>
                )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;

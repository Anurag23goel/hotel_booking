import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    phoneNumber: {
      type: String,
      default: null,
      trim: true,
    },

    profilePicture: {
      type: String, // URL or filepath
      default: null,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    // 🔐 For OTP-less auth or social login
    provider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// 🔍 Indexes
userSchema.index({ email: 1, phoneNumber: 1 }); // Quick lookup by email

const USER = mongoose.models.User || mongoose.model("User", userSchema);
export default USER;

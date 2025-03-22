import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    otp: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      enum: ["FORGOT_PASSWORD", "EMAIL_VERIFICATION"],
    },
    expiresAt: {
      type: Date,
      required: true,
      // TTL index: MongoDB will auto-delete after this time
      expires: 0, // TTL will count down from this date
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    used: {
      type: Boolean,
      default: false,
    },
    attempts: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Compound index for faster lookup
otpSchema.index({ user_id: 1, purpose: 1 });

const OTP = mongoose.model("OTP", otpSchema);
export default OTP;

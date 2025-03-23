import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    enum: ["EMAIL_VERIFICATION", "RESET_PASSWORD"],
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0, // TTL — Mongo auto deletes when time is up
  },
});

tokenSchema.index({ user_id: 1, purpose: 1 });

const TOKEN = mongoose.models.Token || mongoose.model("Token", tokenSchema);
export default TOKEN;

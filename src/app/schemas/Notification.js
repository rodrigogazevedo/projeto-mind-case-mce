import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // Cria os campos created_at e updated_at automaticamente
  }
);

export default mongoose.model("Notification", NotificationSchema);
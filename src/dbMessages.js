import mongoose from "mongoose";
const messagingSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  recived: Boolean,
});

export default mongoose.model("messagingmessages", messagingSchema);

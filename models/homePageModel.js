const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var homePageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: [],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("HomePage", homePageSchema);

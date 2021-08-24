const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
  
    genre: { type: String },
    addedBy:{
      type:ObjectId,
      ref:"User"
   }
   
  },
);

module.exports = mongoose.model("Course", CourseSchema);
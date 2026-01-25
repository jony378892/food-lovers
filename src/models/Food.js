import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    idMeal: {
      type: String,
      required: true,
      unique: true,
    },
    strMeal: {
      type: String,
      required: true,
    },
    strMealThumb: {
      type: String,
      required: true,
    },
    strCategory: {
      type: String,
    },
    strArea: {
      type: String,
    },
    strInstructions: {
      type: String,
    },
    strTags: {
      type: String,
    },
    strYoutube: {
      type: String,
    },
    strSource: {
      type: String,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Food || mongoose.model("Food", foodSchema);

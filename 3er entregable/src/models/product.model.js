import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const useCollection = "products";

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  thumbnail: String,
  stock: Number,
  category: String,
  status: Boolean,
});
userSchema.plugin(mongoosePaginate)
export const productModel = mongoose.model(useCollection, userSchema);

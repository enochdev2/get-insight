import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 8,
    },
    except: {
      type: String,
      required: true,
      min: 8,
    },
    desc: {
      type: String,
      required: true,
      min: 18,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
      enum: ["Finance", "Technology", "Web3", "Business"],
      default: "Finance",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  { timestamps: true }
);

const Blog = mongoose?.models?.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;

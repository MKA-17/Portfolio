import mongoose, { Schema, model } from "mongoose";
import { stringify } from "postcss";

export const projectModel = mongoose.models.project 
|| new model("project", Schema({
  title: { type: String, required: true, unique: true },
  rank: { type: Number, required: true, unique: true },
  url: { type: String },
  image: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], default: [] },

}, {timestamps: true}))
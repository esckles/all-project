import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  isvVerified: boolean;
  isVerifiedToken: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isvVerified: {
      type: Boolean,
      default: false,
    },
    isVerifiedToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";
import jwt from "jsonwebtoken";

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const token = crypto.randomBytes(4).toString("hex");

    const user = await userModel.create({
      name,
      email,
      password: hashed,
      isVerifiedToken: token,
    });
    return res.status(201).json({
      message: "Account created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error creating account", status: 404 });
  }
};

export const verifyAccount = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findByIdAndUpdate({ userID });
    return res
      .status(201)
      .json({ message: "Acccount verified", data: user, status: 201 });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error verifying account", status: 404 });
  }
};

export const loginAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const decrytpted = await bcrypt.compare(password, user.password);
      if (decrytpted) {
        if (user?.isvVerified && user?.isVerifiedToken === "") {
          const token = jwt.sign(
            { id: user?._id },
            process.env.JWT_SECRET as string,
            { expiresIn: process.env.JWT_EXPIRES }
          );
          return res
            .status(201)
            .json({ message: "Account log in ", data: token, statu: 201 });
        } else {
          return res.status(404).json({ message: "Error log in", status: 404 });
        }
      } else {
        return res
          .status(404)
          .json({ message: "incorect password", status: 404 });
      }
    } else {
      return res.status(404).json({ message: "Error with Email", status: 404 });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error with login flow", status: 404 });
  }
};

export const readOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById({ userID });
    return res
      .status(200)
      .json({ message: "One account read", data: user, status: 200 });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error with one read", status: 404 });
  }
};

export const readAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();
    return res
      .status(200)
      .json({ message: "All users read", data: user, status: 200 });
  } catch (error) {
    return res.status();
  }
};

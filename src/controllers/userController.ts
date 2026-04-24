import { userModel } from "../model/userModel.js";
import bcrypt from "bcryptjs";
import { EncodeToken } from "../utility/tokenUtility.js";
import { Request, Response } from "express";

type CookieOptionType = {
  maxAge?: number;
  httpOnly?: boolean;
  sameSite?: boolean | "lax" | "strict" | "none";
  secure?: boolean;
  path?: string;
};
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const exist = await userModel.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid  password",
      });
    }
    const token = EncodeToken(user.email, user._id.toString());
    const cookieOption: CookieOptionType = {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    };
    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      token,
      user,
      message: "User Login SuccessFully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

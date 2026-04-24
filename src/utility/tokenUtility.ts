import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";

interface CustomJwtPayload extends JwtPayload {
  email: string;
  user_id: string;
}

export const EncodeToken = (email: string, user_id: string): string => {
  const PAYLOAD = {
    email,
    user_id,
  };

  return jwt.sign(PAYLOAD, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION_TIME,
  });
};

export const DecodeToken = (token: string): CustomJwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as CustomJwtPayload;
  } catch (e) {
    return null;
  }
};

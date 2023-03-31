import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface Payload {
  userId: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the request headers
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as Payload;

    // Add the decoded payload to the request object for future use
    req.userId = decodedToken.userId;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authorization token invalid" });
  }
};
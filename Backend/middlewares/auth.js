import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate dashboard users (Admin)
export const isAdminAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.adminToken;

    if (!token) {
      return next(new ErrorHandler("Dashboard User is not authenticated!", 400));
    }

    try {
      // Verify the token and decode it
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Find the user based on the decoded token id
      req.user = await User.findById(decoded.id);

      if (!req.user) {
        return next(new ErrorHandler("User not found!", 404));
      }

      // Check if the user is an Admin
      if (req.user.role !== "Admin") {
        return next(
          new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
        );
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error("Error in token verification:", error);
      return next(new ErrorHandler("Invalid or expired token!", 400));
    }
  }
);

// Middleware to authenticate frontend users (Patient)
export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.patientToken;

    if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 400));
    }

    try {
      // Verify the token and decode it
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Find the user based on the decoded token id
      req.user = await User.findById(decoded.id);

      if (!req.user) {
        return next(new ErrorHandler("User not found!", 404));
      }

      // Check if the user is a Patient
      if (req.user.role !== "Patient") {
        return next(
          new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
        );
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error("Error in token verification:", error);
      return next(new ErrorHandler("Invalid or expired token!", 400));
    }
  }
);

// Middleware to check for authorized roles
export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    // Check if the user's role matches any of the allowed roles
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} not allowed to access this resource!`, 403)
      );
    }

    // Proceed to the next middleware or route handler
    next();
  };
};


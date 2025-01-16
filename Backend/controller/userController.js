import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";

// Patient Registration
export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone,  dob, gender, password } = req.body;

  if (!firstName || !lastName || !email || !phone ||   !dob || !gender || !password) {
    return next(new ErrorHandler("Please fill out the full form!", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already registered!", 400));
  }

  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    
    dob,
    gender,
    password,
    role: "Patient",
  });

  generateToken(user, "User registered successfully!", 200, res);
});

// Login
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;

  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please fill out the full form!", 400));
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("Passwords do not match!", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    return next(new ErrorHandler("Invalid email or password!", 400));
  }

  if (role !== user.role) {
    return next(new ErrorHandler("User not found with this role!", 400));
  }

  generateToken(user, "Login successful!", 200, res);
});

// Register New Admin
export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone,   dob, gender, password } = req.body;

  if (!firstName || !lastName || !email || !phone ||   !dob || !gender || !password) {
    return next(new ErrorHandler("Please fill out the full form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler(`${isRegistered.role} with this email already exists!`, 400));
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    
    dob,
    gender,
    password,
    role: "Admin",
  });

  res.status(200).json({
    success: true,
    message: "New admin registered successfully!",
    admin,
  });
});

// Register New Doctor
export const addNewDoctor = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone,   dob, gender, password, doctorDepartment } = req.body;

  if (!req.files || !req.files.docAvatar) {
    return next(new ErrorHandler("Doctor avatar is required!", 400));
  }

  const { docAvatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

  if (!allowedFormats.includes(docAvatar.mimetype)) {
    return next(new ErrorHandler("Invalid file format!", 400));
  }

  if (!firstName || !lastName || !email || !phone ||  !dob || !gender || !password || !doctorDepartment) {
    return next(new ErrorHandler("Please fill out the full form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler(`${isRegistered.role} with this email already exists!`, 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);

  if (!cloudinaryResponse || cloudinaryResponse.error) {
    return next(new ErrorHandler("Failed to upload avatar to Cloudinary!", 500));
  }

  const doctor = await User.create({
    firstName,
    lastName,
    email,
    phone,
   
    dob,
    gender,
    password,
    role: "Doctor",
    doctorDepartment,
    docAvatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "New doctor registered successfully!",
    doctor,
  });
});

// Get All Doctors
export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
  const doctors = await User.find({ role: "Doctor" });
  res.status(200).json({ success: true, doctors });
});

// Get User Details
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({ success: true, user });
});

// Logout for Admin
export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
  res.status(200).clearCookie("adminToken").json({
    success: true,
    message: "Admin logged out successfully!",
  });
});

// Logout for Patient
export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
  res.status(200).clearCookie("patientToken").json({
    success: true,
    message: "Patient logged out successfully!",
  });
});

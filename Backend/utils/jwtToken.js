import jwt from 'jsonwebtoken';

// Generate a JWT Token and send it via cookies
export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken(); // Generate a JWT token for the user

  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  // Set the token in a cookie
  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Cookie expiry based on env variable
      ),
      httpOnly: true, // Prevent JavaScript access to the token for security reasons
    })
    .json({
      success: true,
      message,
      user,
      token, // Send the token in the response body as well
    });
};

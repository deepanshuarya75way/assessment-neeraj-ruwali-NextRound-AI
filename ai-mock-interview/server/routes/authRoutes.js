import express from "express";
import { login, signup, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /auth/me
router.get("/me", protect, getMe);

// POST /auth/register
router.post("/register", signup);

// POST /auth/login
router.post("/login", login);

export default router;


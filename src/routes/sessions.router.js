import { Router } from "express";
import passport from "passport";
import { generateToken } from "../config/jwt.js";

const router = Router();

// LOGIN
router.post(
  "/login",
  passport.authenticate("login", { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.json({
      status: "success",
      token
    });
  }
);

// CURRENT
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      status: "success",
      user: req.user
    });
  }
);

export default router;

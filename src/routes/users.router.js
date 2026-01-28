import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { CartModel } from "../models/cart.model.js";
import { createHash } from "../utils/bcrypt.js";

const router = Router();

// CREATE
router.post("/", async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  const cart = await CartModel.create({});

  const user = await UserModel.create({
    first_name,
    last_name,
    email,
    age,
    password: createHash(password),
    cart: cart._id
  });

  res.json({ status: "success", user });
});

// READ
router.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

export default router;

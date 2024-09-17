import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const {
    register,
    login
} = AuthController

const router = Router();

router.post("/login", login)
router.post("/register", register)

export default router
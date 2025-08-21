import { Router } from "express";
import { login, signup } from "../controller/userController.js";

const route = Router();

route.post("/signup",signup)
route.post("/login",login)

export default route 
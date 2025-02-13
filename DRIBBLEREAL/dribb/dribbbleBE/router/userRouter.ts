import { Router } from "express";
import {
  createUserAccount,
  getAllUser,
  getAllUsers,
  loginUserAccount,
} from "../controller/userController";

const router: Router = Router();

router.route("/get-users").get(getAllUsers);
router.route("/create-user").post(createUserAccount);
router.route("/login-user").post(loginUserAccount);

export default router;

import { Router } from "express";
import {
  createDispatcher,
  createSeller,
  signIn,
} from "../controller/sellerController";

const router: any = Router();

router.route("/create-seller").post(createSeller);
router.route("/create-dispatcher").post(createDispatcher);
router.route("/sign-in").post(signIn);

export default router;

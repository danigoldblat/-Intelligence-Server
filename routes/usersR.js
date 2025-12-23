import express from "express"
import {getAllUsers,createUser} from "../ctrls/usersC.js"
const router = express.Router();
router.get("/",getAllUsers)
router.post("/",createUser)
// router.put("/:username")
// router.delete("/:username")






export default router;
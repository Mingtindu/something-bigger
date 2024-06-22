import { createUser } from "../controllers/user.controller.js";
import Router from 'express'
const router = Router()
router.route('/create').post(createUser)

export default router
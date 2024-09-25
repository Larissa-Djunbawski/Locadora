import { Router} from "express"
import { signup, login } from "../controllers/user-controller.js"
import jwtAuthenticator from "../middlewares/jwt-authenticator.js"

const router = Router()

router.post ("/signup", signup )/*Criar uma conta*/
router.post ("/login",login )/* Cria um token para o usuario*/

//router.post ("/", jwtAuthenticator )


export default router
import {Router} from "express"
import {index,store} from "../controllers/movie-controller.js"
import jwtAuthenticator from "../middlewares/jwt-authenticator.js"

const router = Router()
router.post("/",jwtAuthenticator,store)// para chegar no store primeiro precisa passar pelo athenticator
router.get("/",index)/* Ver os filmes do catalogo*/


export default router
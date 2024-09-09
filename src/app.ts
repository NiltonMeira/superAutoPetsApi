import "express-async-errors" 
import  express  from "express";
import cors from "cors"
import userRouter from "./routes/User.routes";
import authRouter from "./routes/Auth.routes";
import { handleError } from "./middleware/handleError";

const app = express()

app.use(cors(
    {
        origin: '*'
    }
))

app.use(express.json())
app.use("/users", userRouter)
app.use(authRouter)
app.use(handleError)

export default app

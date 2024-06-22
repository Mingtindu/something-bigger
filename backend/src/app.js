import express from 'express'
const app = express()
app.use(express.json())

//--Route import:
import userRouter from './routers/user.router.js'

app.use('/api/v1/users',userRouter)

export default app
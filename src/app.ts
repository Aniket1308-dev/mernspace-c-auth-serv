import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth'
import cookieParser from 'cookie-parser'
import tenantRouter from './routes/tenant'
import userRouter from './routes/user'
import { globalErrorHandler } from './middlewares/globalErrorHandler'

const app = express()
app.use(
    cors({
        // todo: move to .env file.
        origin: ['http://localhost:5174', 'http://localhost:5173'],
        credentials: true,
    }),
)
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Auth service')
})

// app.post('/auth/register', (req, res) => {
//     res.status(201).send()
// })

app.use('/auth', authRouter)
app.use('/tenants', tenantRouter)
app.use('/users', userRouter)

//global error handler
app.use(globalErrorHandler)

export default app

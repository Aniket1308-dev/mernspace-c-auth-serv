import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import logger from './config/logger'
import { HttpError } from 'http-errors'
import authRouter from './routes/auth'
import cookieParser from 'cookie-parser'
import tenantRouter from './routes/tenant'

const app = express()
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

//global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)

    const statusCode = err.statusCode || err.status || 500

    res.status(statusCode).json({
        error: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app

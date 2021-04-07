import express, { NextFunction, Request, Response } from 'express'
import createConnection from './database'
import { AppError } from './errors/AppError'
import routes from './routes'

const app = express()
createConnection()

app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'Error',
    message: `Internal server error ${err.message}`
  })
}
)

export default app

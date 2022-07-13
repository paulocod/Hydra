import express, { Request, Response } from 'express'
import app from './app'
const port = 3000

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

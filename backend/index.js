import express  from "./config/express";
import http from 'http'

const port = process.env.PORT
const app = express()

app.listen(port, () => {
    console.log(`Server online at: ${port}`)
})
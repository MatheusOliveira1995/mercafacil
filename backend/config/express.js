import express from "express";
require('dotenv').config()
import cors from 'cors' 

export default () => {
    const app = express()

    app.set('port', process.env.PORT ?? config.get('server.port'))

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use(cors())

    return app
}
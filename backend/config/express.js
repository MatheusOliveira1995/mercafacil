import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors' 
import consign from 'consign'

dotenv.config()

export default () => {
    const app = express()

    app.set('port', process.env.PORT ?? config.get('server.port'))

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use(cors())

    consign({ cwd: 'api'})
        .include('/routes')
        .into(app)

    return app
}
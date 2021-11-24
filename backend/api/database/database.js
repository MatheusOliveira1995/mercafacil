import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

export const mysql = new Sequelize(process.env.DB_NAME_MYSQL, process.env.DB_MYSQL_USER, process.env.DB_MYSQL_PASS, {
    host: 'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
})

export const postgres = new Sequelize(process.env.DB_NAME_POSTGRES, process.env.DB_POSTGRES_USER, process.env.DB_POSTGRES_PASS, {
    dialect:'postgres',
    define: {
        timestamps: false
    }
})
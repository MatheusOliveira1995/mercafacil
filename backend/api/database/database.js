import Sequelize from 'sequelize'

export const mysql = new Sequelize('admin', 'admin', 'admin', {
    host: 'localhost',
    dialect:'mysql'
})

export const postgres = new Sequelize('postgres://postgres@localhost:5432/postgres', {dialect:'postgres'})
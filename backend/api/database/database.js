import Sequelize from 'sequelize'

const mysql = new Sequelize('admin', 'admin', 'admin', {
    host: 'localhost',
    dialect:'mysql'
})

const postgres = new Sequelize('postgres', 'admin', 'admin', {
    host: 'localhost',
    dialect:'postgres'
})

export default {
    mysql,
    postgres
}
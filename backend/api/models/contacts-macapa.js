import { Sequelize } from 'sequelize'
import { mysql } from '../database/database'

const contactsMacapa = mysql.define('contacts', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default contactsMacapa

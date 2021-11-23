import { Sequelize } from 'sequelize'
import { postgres } from '../database/database'

const contactsVarejao = postgres.define('contacts', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default contactsVarejao

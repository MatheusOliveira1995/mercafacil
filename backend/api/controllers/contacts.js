import contactsMacapa from "../models/contacts-macapa";
import contactsVarejao from "../models/contacts-varejao";
import formatCellphone from '../util/format'

saveContacts = async(model, payload, callback) => {
    try {
        await model.bulkCreate(payload, {
            returning: false
        }).then(() => {
            callback({ status: 'success' })
        })
    } catch (error) {
        callback({ status: 'error', error: error })
    }
}

export default () => {
    const controller = {}

    controller.saveContactsMacapa = async(req, res) =>{
        const data = req.body.contacts
        const payload = data.map((contact) => {
            const phone = contact.cellphone.replace(/\D/g, "")
            return{
                nome: contact.name.toUpperCase(),
                celular: formatCellphone(phone)
            }
        })
        saveContacts(contactsMacapa, payload, (result) => {
            if(result.status === 'success')
                return res.status(201)
                
            return res.status(500).send({ message: result.error })    
        })
    }

    controller.saveContactsVarejao = async(req, res) =>{
        const data = req.body.contacts
        const payload = data.map((contact) => {
            const phone = contact.cellphone.replace(/\D/g, "")
            return{
                nome: contact.name,
                celular: phone.substr(0,4).concat(phone.substr(5, phone.length)) 
            }
        })
        saveContacts(contactsVarejao, payload, (result) => {
            if(result.status === 'success')
                return res.status(201)
                
            return res.status(500).send({ message: result.error })    
        })
    }
}
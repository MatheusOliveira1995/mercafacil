import contactsMacapa from "../models/contacts-macapa";
import contactsVarejao from "../models/contacts-varejao";
import { formatCellphone } from '../util/format'

function createContacts(model, payload, callback){
    try {
        model.bulkCreate(payload, {
            returning: false
        }).then(() => {
            callback({ status: 'success' })
        })
    } catch (error) {
        callback({ status: 'error', error: error })
    }
}

function saveContactsMacapa(req, res) {
    const data = req.body.contacts
    const payload = data.map((contact) => {
        const phone = contact.cellphone.replace(/\D/g, "")
        return{
            nome: contact.name.toUpperCase(),
            celular: formatCellphone(phone)
        }
    })
    createContacts(contactsMacapa, payload, (result) => {
        if(result.status === 'success')
            return res.status(201)
            
        return res.status(500).send({ message: result.error })    
    })
}
function saveContactsVarejao (req, res) {
    const data = req.body.contacts
    const payload = data.map((contact) => {
        const phone = contact.cellphone.replace(/\D/g, "")
        return{
            nome: contact.name,
            celular: phone.substr(0,4).concat(phone.substr(5, phone.length)) 
        }
    })
    createContacts(contactsVarejao, payload, (result) => {
        if(result.status === 'success')
            return res.status(201)
            
        return res.status(500).send({ message: result.error })    
    })
}

export default () => {
    const controller = {}
    controller.saveContacts = (req, res) => {
        const caller = res.locals.user
        if(caller === 'macapa')
            saveContactsMacapa(req, res)

        saveContactsVarejao(req, res)    
    }

    return controller
    
}
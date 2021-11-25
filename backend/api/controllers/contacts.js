import contactsMacapa from "../models/contacts-macapa";
import contactsVarejao from "../models/contacts-varejao";
import { formatCellphone } from '../util/format'

function createContacts(model, payload, res){
    try {
        model.bulkCreate(payload, {
            returning: false
        }).then(() => {
            return res.status(201).send()
        })
    } catch (error) {
        return res.status(500).send({ message: error }) 
    }
}

function saveContactsMacapa(req, res) {
    const data = req.body.contacts
    const payload = data.map((contact) => {
        return{
            nome: contact.name.toUpperCase(),
            celular: formatCellphone(contact.cellphone)
        }
    })
    createContacts(contactsMacapa, payload, res)
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
    createContacts(contactsVarejao, payload, res)
}

export default () => {
    const controller = {}
    controller.saveContacts = (req, res) => {
        const caller = res.locals.user
        if(caller === 'macapa')
            return saveContactsMacapa(req, res)
        if(caller === 'varejao')
            return saveContactsVarejao(req, res)  
        
        return res.status(501).send({ message: 'Cliente inválido' })
    }

    return controller
    
}
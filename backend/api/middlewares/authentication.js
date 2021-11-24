import * as jwt from '../../config/jwt'

export default async (req, res, next) => {
    if(!req.headers.authorization){
        res.status(401).send('Para acessar este recurso é necessário informar um token válido!')
        return; 
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        const result = jwt.verify(token)
        res.locals.user = result.user
        next()
    } catch (error) {
        res.status(401).send('Token inválido! \n' + error.message)
    }
}
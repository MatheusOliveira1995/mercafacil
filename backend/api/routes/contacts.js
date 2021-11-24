import contacts from "../controllers/contacts";
import authentication from "../middlewares/authentication";

module.exports = app => {
    const contactsController = contacts()
    app.route("/api/v1/contacts")
        .post(authentication, contactsController.saveContacts) 
}
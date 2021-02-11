const modelUser = require('../models/user');
const viewUser = require('../views/viewUser');
const dates = require('../helpers/dates');


module.exports = {
    async getUser(req,res, next){
        try {
            
            const {id} = req.params;
            const users = await modelUser.getUsers(id);
            const renderUsers = viewUser.renderMany(users);

            return res.json(renderUsers);

        } catch (error) {
            next(error)
        }
    }

}
const modelUser = require('../models/user');
const viewUser = require('../views/viewUser');
const nodemailer = require('nodemailer');
const password = require('../helpers/password');
const sha1 = require('sha1');
const md5 = require('md5');


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
    },

    async registerUser(req,res,next){
        try{
            const {nome,login,telefone,email,empresa,setor} = req.body;
            let senha = password.getRandomKey();
            let hash = sha1(md5(senha));
            const user = {
                "nmUsuario":nome,
                "nmLogin":login,
                "cdTelefone":telefone,
                "dsEmail":email,
                "idEmpresa":empresa,
                "idSetor":setor,
                "dsSenha":hash
            };

            
            
            const response = await modelUser.registerUser(user);

            return res.json(response);
        }catch(error){
            next(error)
        }
    }

}
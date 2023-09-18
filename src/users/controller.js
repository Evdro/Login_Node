const createError = require('http-errors');
 
const {UserService} = require('./services');
const {Response} = require('../common/response');

module.exports.UserController = {
    getUsers: async (req,res) => {
        try {
            let users = await UserService.getAll()
            Response.sucess(res, 200, 'Lista de usuarios', users)
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    },    
    getuser: async (req, res) => {
        try {
            const {
                params : {id},
            } = req
            let user = await UserService.getById(id)
            if(!user){
                Response.error(res, createError.NotFound)
            }else{
                Response.sucess(res, 200, `User ${id}`, user)
            }
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    },

    createUser: async (req, res) => {
        try {
            const {body} = req
                if (!body || Object.keys(body).length === 0) {
                    Response.error(res, createError.NotFound)
                } else {
                    const insertedId = await UserService.create(body);
                    Response.sucess(res, 201, 'usuario agregado', insertedId)
                }
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    }
}
const connection = require('../database/connection');
module.exports = {
   //logar no sistema
    async index(request, response){
            const { email, senha } = request.body;
            return response.json(user);
    },
    //criar usuario no sistema
    async create(request, response){
        const { email, senha, nome } = request.body;
        return response.json(user);
}
}
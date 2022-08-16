const { User, Collection, Card } = require("../database");
const config = require("../config/config");

module.exports = {
    async createCollection(req, res){
        try{
            const Collection = await Collection.Create(req.body)
            res.send({
                
            })
        }
        catch(err){

        }
    }
}
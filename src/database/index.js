const {MongoClient} = require('mongodb');
const {Config} = require('../config');
const { Collection } = require('mongoose');

var connection = null

module.exports.Database = (collection) => new Promise(async(res, req) => {
    try {
        if(!connection){
            const client = new MongoClient(Config.mongoUri)
            connection = await client.connect();
            console.log('Nueva conexion realizada correctamente con mongo');
        }
        console.log('Reutilizando conexion');
        const db = connection.db(Config.mongoDbName)
        res(db.collection(collection))
    } catch (error) {
        req(error)
    }
})

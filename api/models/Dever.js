const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deverSchema = new Schema({
    title: String,
    description: String,
    type: String,
    time: Number
}, {collection: 'deveres'})

const Dever = mongoose.model('Dever', deverSchema)

module.exports = Dever
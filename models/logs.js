const { Schema, model } = require('mongoose')

const logSchema = new Schema({
    title: {type: String},
    entry: {type: String},
    shipIsBroken: {type: Boolean, default: true}
},
{
    timestamps: true
})

module.exports = Log;
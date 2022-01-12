const {Schema, models, model} = require('mongoose');

const personSchema = new Schema({
    last_name: {type: String, require: true},
    first_name: {type: String, require: true}
}, { timestamp: true });

module.exports = model('Person', personSchema);
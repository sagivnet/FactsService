const mongoose = require('mongoose');
const FactScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String, 
        required: true, 
        unique: true},
    creation_date: {
        type: Date,
        default: Date.now
    },
    last_modified: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Fact', FactScheme)
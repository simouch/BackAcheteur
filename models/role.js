const mongoose =require ('mongoose');
const Schema=mongoose.Schema;

const ROLE= mongoose.model('role',new mongoose.Schema ({
    nom: {
        type: String,
        required: true,
        trim: true,
    },



}));
module.exports = ROLE;


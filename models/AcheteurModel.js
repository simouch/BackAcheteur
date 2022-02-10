const mongoose = require('mongoose');
const user=require('./user_model');

const AcheteurSchema = user.discriminator('Acheteur',new mongoose.Schema({

    cin : {
        type : Number ,
        required : true ,
        trim : true,
    }

}));

module.exports = AcheteurSchema ;

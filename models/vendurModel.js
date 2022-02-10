const mongoose =require('mongoose');

const user =require('./user_model');
const vendeurSchema = user.discriminator('vend',mongoose.Schema({


    Tel:{
       type : Number ,
       required :true,
       trim :true
            }


}));
module.exports=vendeurSchema;
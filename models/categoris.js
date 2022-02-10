const mongoose=require('mongoose');
const categorieSchema=mongoose.model('categorie',new mongoose.Schema({

    nom :{
       type:String,
       required:true,
        trim: true,}
    }))

module.exports=categorieSchema;
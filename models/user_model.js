const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const bcrypt = require('bcryptjs');
// bcrypt c'est une fonction de cryptage pour hacher notre mdp avant de l'enregistrer dans la base de donner
const baseOptions={
    discriminatorKey:'typeUser',
    collection:'user'
}
const userSchema = new mongoose.model('user',new mongoose.Schema({
    nom:{
       type :String,
       required: true,
       trim:true
    },
    prenom:{
        type :String,
        required: true,
        trim:true


    },
    email:{
        type :String,
        required: true,
        trim:true


    },

    password:{
        type :String,
        required: true,
        trim:true


    },
        role:{
            type :   Schema.Types.ObjectID,
            ref:'role'
        }
    }, baseOptions)
    .pre('save',function(){
        this.password=bcrypt.hashSync(this.password,10)
        }
    )

);

module.exports = userSchema ;
// appel dans le reste de code


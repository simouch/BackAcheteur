const mongoose = require ('mongoose');
const Schema=mongoose.Schema;
const multer=require('multer');

const ProduitSchema = mongoose.model('Produit',new mongoose.Schema ({
    nom: {
        type: String,
        required: true,
        trim: true,
    },
    prix: {
        type: String,
        required: true,
        trim: true,
    },
    Description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
    },
categorie:{
        type :   Schema.Types.ObjectID,
    ref:'categorie'
}

}));

module.exports = ProduitSchema;
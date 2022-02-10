const  Vendeur = require('../models/vendurModel');



module.exports={
    ajouterVendeur :  function(req,res){

        const vendeur= new Vendeur({
            nom : req.body.nom ,
            prenom : req.body.prenom ,
            email : req.body.email ,
            password : req.body.password ,
            Tel : req.body.Tel ,


        });
        vendeur.save(function(err) {
            if (err){
                res.json({state:'no',mesg:'vous avez un erreur'})

            }else{
                res.json({state:'ok',mesg:'vendeur ajouté'})
            }

        })


    },

getAllVendeur: function (req,res) {
        Vendeur.find({},function(err,v){
            if(err ){
                res.json({state:'no',msg:'pas de vendeur'});
            }else{
                res.json(v);
            }


        })

},
    getById :function (req , res) {

        Vendeur.findOne({_id:req.params.id}, function (err, L) {

            if (err) {
                res.json({state: 'no', msg: 'pas d"enregistrement'});
            } else {
                res.json(L);
            }

        })
    },
    SupprimerUser: function (req, res){
        Vendeur.remove({_id:req.params.id}, function(err){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state :'ok',msg:'supprimer'})
            }
        })
    },
    UpdateUser: function (req, res){
        Vendeur.updateOne({_id:req.params.id}, {

            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password,
        },function(err) {
            if (err) {
                res.json({state: 'no'})
            } else {
                res.json({state: 'useUpdate'})
            }

        })
    }


}
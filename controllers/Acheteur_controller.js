const Acheteur = require ('../models/AcheteurModel');

module.exports = {
    ajouterAchteur : function (req ,res){
        const acheteur = new Acheteur({
            nom :req.body.nom,
            prenom :req.body.prenom,
            password :req.body.password,
            email :req.body.email,
            cin :req.body.cin,
        });

        acheteur.save (function(err)
        {
            if (err)
            {
                res.json({state:'no',msg:'erreur d"ajout'});
            }
            else
            {
                res.json({state:'ok',msg:'acheteur joutée'})
            }

        })

    },
    getAllAcheteur :function (req , res) {

        Acheteur.find({}, function (err, L) {

            if (err) {
                res.json({state: 'no', msg: 'pas d"enregistrement'});
            } else {
                res.json(L);
            }

        })
    },
    getById :function (req , res) {

        Acheteur.findOne({_id:req.params.id}, function (err, L) {

            if (err) {
                res.json({state: 'no', msg: 'pas d"enregistrement'});
            } else {
                res.json(L);
            }

        })
    },
    SupprimerUser: function (req, res){
        Acheteur.remove({_id:req.params.id}, function(err){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state :'ok',msg:'supprimer'})
            }
        })
    },
    UpdateUser: function (req, res){
        Acheteur.updateOne({_id:req.params.id}, {

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
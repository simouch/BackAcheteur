const Produit =require ('../models/Produit_Model');
var fs =require('fs');
const multer=require ('multer');
const upload = multer({dest:__dirname+'/uploads/images'});
module.exports = {
    ajouterProduit: function (req, res) {
        var file = __dirname + '/uploads/' + req.file.originalname;
        fs.readFile(req.file.path, function (err, data) {
            fs.writeFile(file, data, function (err) {
                {
                    if (err) {
                        res.json({msg: 'erreur'})
                    } else {
                        const produit = new Produit({
                            nom: req.body.nom,
                            prix: req.body.prix,
                            Description: req.body.Description,
                            image: req.file.originalname,
                            categorie: req.body.categorie,

                        });
                        produit.save(function (err) {
                            if (err) {
                                console.log(err)
                                res.json({state: 'no', msg: 'erreur'});

                            } else {
                                res.json({state: 'ok', msg: 'produit accepté'});


                            }


                        })


                    }
                }
            })
        })
    },

    getAll: function (req, res) {


        Produit.find({}).populate('categorie').exec(function (err, p) {

            if (err) {

                res.json({msg: 'erreur'})
            } else {


                res.json(p)
            }


        })

    },

    getImage: function (req, res) {
        res.sendFile(__dirname + '/uploads/' + req.params.image)

    },
    getById :function (req , res) {

       Produit.findOne({_id:req.params.id}, function (err, L) {

            if (err) {
                res.json({state: 'no', msg: 'pas d"enregistrement'});
            } else {
                res.json(L);
            }

        })
    },







    supprimerProduit: function (req, res) {

        Produit.remove({_id: req.params.id}, function (err) {

            if (err) {

                res.json({msg: 'erreur'})
            } else {


                res.json({msg: 'produit supprimé'})
            }


        })


    },
    UpdateProduit: function (req, res) {
        var file = __dirname + '/uploads/' + req.file.originalname;
        fs.readFile(req.file.path, function (err, data) {
            fs.writeFile(file, data, function (err) {
                {
                    if (err) {
                        res.json({msg: 'erreur'})
                    } else {
                        Produit.updateOne({_id: req.params.id}, {

                            nom: req.body.nom,
                            prix: req.body.prix,
                            Description: req.body.Description,
                            image: req.file.originalname

                        }, function (err) {
                            if (err) {
                                res.json({state: 'no'})
                            } else {
                                res.json({state: 'produitUpdate'})
                            }

                        })
                    }
                }

            })
        })
    }

}
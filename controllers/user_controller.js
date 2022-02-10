const userModel= require('../models/user_model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs')

module.exports= {

    ajouterUser: function (req, res) {
        const user = new userModel({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        });
        user.save(function (err) {
            if (err) {
                res.json({state: 'no', msg: 'vous avez un erreur'})
            } else {
                res.json({state: 'ok', msg: 'utilisateur ajouté'})
            }
        })
    },

    getAll: function (req, res){
        userModel.find({}, function(err,liste){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(liste)
            }
        })
   },
    getById: function (req, res){
        userModel.findOne({_id:req.params.id}).populate('role').exec( function(err,liste){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(liste)
            }
        })
   },
    SupprimerUser: function (req, res){
        userModel.remove({_id:req.params.id}, function(err){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state :'ok',msg:'supprimer'})
            }
        })
   },
    UpdateUser: function (req, res){
        userModel.updateOne({_id:req.params.id}, {

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
   },
    login:function(req,res){
        userModel.findOne({email:req.body.email}).populate('role').exec(function (err,userInfo) {
            if (err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }else{
                if(bcrypt.compareSync(req.body.password,userInfo.password)){
                    //Generation token
                    var token=jwt.sign({id:userInfo._id},req.app.get('secretKey'),
                        {
                            expiresIn: 86400,//expire in 24h

                        })

                    res.json({state:'ok',msg:'user found',data:{user:userInfo,token:token}})
                }
                else{
                    res.json({state:'no',msg:'password no valid'})
                }
            }
        })
    },



};

   // pour l'utuliser dans router'









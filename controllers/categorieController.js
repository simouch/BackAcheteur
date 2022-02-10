const x = require('../models/categoris');


module.exports = {
    ADD: function (req, res) {
        const cat = new x({
            nom: req.body.nom,

        })
        cat.save(function (err) {

            if (err) {
                res.json({state: 'no', msg: 'erreur'});

            } else {
                res.json({state: 'ok', msg: 'categorie accepté'});


            }


        })


    }


,
   getAll: function (req, res){
    x.find({}, function(err,liste){
        if(err){
            res.json({state :'no',msg:'vous avez un erreur'})
        }
        else{
            res.json(liste)
        }
    })
},

    pushProd:function(req,res){
        x.updateOne({_id:req.params.id},{$push : {produit : req.body.produit}},function (err) {
         if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{

                console.log({$push : {produit : req.body.produit}})

                res.json({state :'ok',msg:'pushed'})
            }
        })

    },
}
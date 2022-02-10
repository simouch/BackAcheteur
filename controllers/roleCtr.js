const Role =require ('../models/role');

module.exports = {
    ajouterRole : function(req,res){
        const role = new Role({
            nom :req.body.nom

        })
        role.save(function(err){

            if(err){
                res.json ({state:'no',msg:'erreur'});
                console.log(err.msg)

            }
            else{
                res.json({state:'ok',msg :'role accepté'});


            }



        })




    },


    getAll: function (req, res){
        Role.find({}, function(err,liste){
            if(err){
                res.json({state :'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(liste)
            }
        })
    }




}

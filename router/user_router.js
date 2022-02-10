const userCtr =require('../controllers/user_controller');

const router =require('express').Router();

router.post('/ajouterUser',userCtr.ajouterUser);
router.get('/getAll',userCtr.getAll);
router.get('/getById/:id',userCtr.getById);
router.post('/login',userCtr.login)
router.delete('/Supp/:id',userCtr.SupprimerUser);
router.put('/update/:id',userCtr.UpdateUser);
module.exports= router;
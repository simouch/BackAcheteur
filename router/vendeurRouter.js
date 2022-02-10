const vendurController = require('../controllers/vend_controller');
const router =require('express').Router()


router.post ('/ajouterVendeur',vendurController.ajouterVendeur);
router.get('/', vendurController.getAllVendeur);
router.get('/getById/:id',vendurController.getById);


router.delete('/Supp/:id',vendurController.SupprimerUser);
router.put('/update/:id',vendurController.UpdateUser);







module.exports = router;



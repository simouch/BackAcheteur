const Achet = require ('../controllers/Acheteur_controller');

const router = require ('express').Router();

router.post('/addAcheteur',Achet.ajouterAchteur);

router.get('/',Achet.getAllAcheteur);
router.get('/getById/:id',Achet.getById);
router.delete('/Supp/:id',Achet.SupprimerUser);
router.put('/update/:id',Achet.UpdateUser);


module.exports= router;

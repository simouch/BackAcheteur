const produit =require('../controllers/produitControl');
const router =require('express').Router();
const multer=require ('multer');
const upload = multer({dest:__dirname+'/uploads/images'})
//router.post('/ajouterProduit',produit.ajouterProduit);

router.post('/', upload.single('image'),produit.ajouterProduit);
router.get('/getAll',produit.getAll);

router.delete('/supp/:id',produit.supprimerProduit);
router.put('/up/:id',upload.single('image'),produit.UpdateProduit);
router.get('/getById/:id',produit.getById);


router.get('/getImage/:image',produit.getImage);
module.exports= router;
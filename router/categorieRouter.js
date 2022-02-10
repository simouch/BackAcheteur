const categorie =require ('../controllers/categorieController.js');
    const router =require('express').Router();

router.post('/ajouterCate',categorie.ADD)
router.get('/getAll',categorie.getAll)

router.put('/pushProd/:id',categorie.pushProd);

module.exports = router;
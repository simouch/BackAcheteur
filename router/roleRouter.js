const Role =require('../controllers/roleCtr');

const router =require('express').Router();

router.post('/add',Role.ajouterRole);

router.get('/getAll',Role.getAll)


module.exports= router;
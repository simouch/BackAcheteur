const express = require('express');
const bodyParser =require('body-parser');
const cors =require('cors');
const userRouter=require('./router/user_router');
const Vendrouter =require('./router/vendeurRouter');
const AchetR = require ('./router/acheteur_router');



const produit =require('./router/produitRouter');
const cat =require('./router/categorieRouter');
const Rol =require('./router/roleRouter');
const db =require('./models/db');


// pour le routing
const app = express() ;




//body parser est un midlware qui analyse le corps de la requette http
// 2 métodes la prmiere est en utilisant x-www-form-urlenced
// la 2eme application/jison

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());







app.get('/',function(req,res) {
    res.send('hello world')
})
app.use(cors('*'));
app.set('secretKey', 'test')
app.use('/user',userRouter);
app.use('/vend',Vendrouter);

app.use('/acheteur',AchetR);
app.use('/produit',produit);
app.use('/cat',cat);
app.use('/',Rol);

app.listen(3000,function() {
    console.log('server started')
});
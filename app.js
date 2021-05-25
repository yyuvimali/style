const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use(function(req,res,next){
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(9000);


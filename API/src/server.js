const express = require('express');
const cors = require('cors');
const port = 8080;
const bodyParser = require('body-parser');
const path =require('path')
const app = express();

require('dotenv').config();

const routerIndex = require('./routes/index')

app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.use('/',routerIndex);

app.use('/uploads',express.static(path.join(__dirname ,'uploads')));

app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`);
});

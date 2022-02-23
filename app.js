// const http = require ('http')
const express = require('express');
const app = express();
const port = 4001
const cors = require('cors')

const AppRoutes = require('./app_api/routes/index')

app.use(cors());
app.use(express.json());
app.use('/app',AppRoutes);

app.use(function(req,res,next){
    console.log(req);
    var err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
    console.log('Corriendo en ------ '+port);
  });

module.exports = app;
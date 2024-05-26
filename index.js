const express = require('express')
const mongoose = require('mongoose');
const app = express()



app.get('/', (req,res)=> {
    res.send("hello from node API");
});


mongoose.connect("mongodb+srv://admin:Gm591QgDJqa2OWNR@backenddb.pe0geqv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed!");
});
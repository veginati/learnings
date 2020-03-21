const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(' A default message from server - changed reverted');
});

app.listen(8080,()=>{
    console.log('listening to the port 8080');
})
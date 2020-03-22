const express = require('express');
const redis = require('redis');

const app = express();
//redis-server is the name of the server menioned in the docker compose yaml file.
// In general, in an independent application created without docker, host is the URL connection to the server.
const client = redis.createClient({
    host:   'redis-server',
    port:   6379
});
console.log('created a client');
//SET VISITS TO 0
client.set('visits',0);

app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send('Number of visits is '+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081, ()=>{
    console.log('Listening on port 8081');
})
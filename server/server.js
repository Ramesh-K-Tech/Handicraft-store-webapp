const express = require('express');
const app=express();
app.listen(5000,()=>console.log('Server running on port 5000'));
app.get('/test',(req,res)=>res.send('Hello World'));
app.use(express.json());
app.post('/api/test',(req,res)=>{console.log(req.body);
res.json({message:'Data received',data:req.body});
});
const db=require('./config/db');
app.get('/users',async(req,res)=>{
    const[rows]=await
    db.query('select * from users');
    res.json(rows);
});
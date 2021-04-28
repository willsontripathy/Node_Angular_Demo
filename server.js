const { static } = require('express');
var express = require('express');
var path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist')));
app.use('/posts',posts);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})


app.listen(3000,(req,res) =>{
    console.log("app Running");
})
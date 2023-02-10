const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {Post} = require('./db/models')
require('dotenv').config(); 

const app = express()
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.get('/posts', async (req, res)=>{
const allPosts = await Post.findAll({order: [['createdAt', 'DESC']] });
res.json(allPosts)
})

app.post('/posts', async (req, res)=>{
    const {message} = req.body    
    const newPost = await Post.create({ message });  
    res.json(newPost)
})

app.delete('/posts/:id', async (req, res)=>{
    const {id} = req.params   
    console.log('id:',id)     
    try {
        await Post.destroy({where: {id}});  
    res.sendStatus(200)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
    })
    
    


app.listen(PORT, () => console.log(`start on PORT ${PORT}`))
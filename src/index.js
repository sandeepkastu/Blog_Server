const express=require('express')
const env=require('dotenv')
const mongoose=require('mongoose')
const router=require('./routes/auth')
const createBlog=require('./routes/createblog')

env.config()
const app=express()
const port= 5000 ||process.env.MONGO_URI

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log('connected')})


app.use(express.json())
app.use('/',router)
app.use('/',createBlog)




app.listen(port,()=>{console.log('port running at ', port)})
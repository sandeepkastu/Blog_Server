const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    description:{type:String},
    
})

const Blog=mongoose.model('blogs',BlogSchema)

module.exports=Blog
const express=require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Course=mongoose.model('Course')
const requireLogin=require('../middleware/requireLogin')

router.post('/addCourse',requireLogin,(req,res)=>{
    const{title,desc,genre}=req.body
    console.log(title,desc,genre)
   if(!title || !desc||!genre){
        res.status(422).json({error:"Please add all fields"})
    }
    req.user.password=undefined
    //console.log(req.user)
    //res.send("ok")
    const post =new Course({
        title,
        desc,
        genre,
 
     addedBy:req.user
    })
    post.save().then(result=>{


        res.json({course:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/allCourses',requireLogin,(req,res)=>{
    Course.find()
    .populate("addedBy","name _id")
    .then(courses=>{
        res.json({courses})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=router
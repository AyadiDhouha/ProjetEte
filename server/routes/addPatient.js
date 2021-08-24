const express=require("express")
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin=require('../middleware/requireLogin')
const Patient = mongoose.model("Patient")


router.get('/allpatients',requireLogin,(req,res)=>{
    Patient.find()
    .populate("addedBy","name _id")
    .then(patients=>{
        res.json({patients})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/addPatient',requireLogin,(req,res)=>{
    const{name,phone,status,doctor,age}=req.body
    console.log(name,phone,status,doctor,age)
    if(!name || !phone||!status||!doctor||!age){
        res.status(422).json({error:"Please add all fields"})
    }
    req.user.password=undefined
    //console.log(req.user)
    //res.send("ok")
    const post =new Patient({

     name,
     phone,
     status,
     doctor,
     age,
     addedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myPatient',requireLogin,(req,res)=>{
    Patient.find({addedBy:req.user._id})
    .populate("addedBy","_id name")
    .then(mypatient=>{
        res.json({mypatient})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post('/search-patients',(req,res)=>{
    let patientPattern=new RegExp("^"+req.body.query)
    Patient.find({name:{$regex:patientPattern}})
    .then(patient=>{
        res.json({patient})
    }).catch(err=>{
        console.log(err)
    })
})
module.exports=router
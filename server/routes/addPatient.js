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


router.post('/addpatients',requireLogin, (req, res) => {
    const { lastName, firstName, age, adresse, tel, etat, path, cardio, trouble, diabete,
        hta,
        insuff,
        reti,
        atcd,
        grossesse,
        immuno,
         anc_path,
        trait_path,
        anc_cardio,
        trait_cardio,
        anc_trouble,
        trait_trouble,
        anc_diabete,
        trait_diabete,
        anc_hta,
        trait_hta,
        anc_insuff,
        trait_insuff,
        anc_reti,
        trait_reti,
        info_atcd,
        info_grossesse,
        anc_immuno,
        trait_immuno,
        tabagisme,
        alcool,
        drogue,
        taille,
        poids } = req.body

    const patient = new Patient({
        lastName,
        firstName,
        age,
        adresse,
        tel,
        etat,
        path,
        cardio,
        trouble,
        diabete,
        hta,
        insuff,
        reti,
        atcd,
        grossesse,
        immuno,
        anc_path,
        trait_path,
        anc_cardio,
        trait_cardio,
        anc_trouble,
        trait_trouble,
        anc_diabete,
        trait_diabete,
        anc_hta,
        trait_hta,
        anc_insuff,
        trait_insuff,
        anc_reti,
        trait_reti,
        info_atcd,
        info_grossesse,
        anc_immuno,
        trait_immuno,
        tabagisme,
        alcool,
        drogue,
        taille,
        poids,
        addedBy:req.user


    })

    patient.save()
        .then(patient => {
            res.json({ message: "saved successfully" })
        })
        .catch(err => {
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
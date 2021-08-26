const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const patientSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    addedBy:{
        type:ObjectId,
        ref:"User"
    },
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },

    adresse: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    etat: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    cardio: {
        type: String,
        required: true
    },
    trouble: {
        type: String,
        required: true
    },
    diabete: {
        type: String,
        required: true
    },
    hta: {
        type: String,
        required: true
    },
    insuff: {
        type: String,
        required: true
    },
    reti: {
        type: String,
        required: true
    },
    atcd: {
        type: String,
        required: true
    },
    grossesse: {
        type: String,
        required: true
    },
    immuno: {
        type: String,
        required: true
    },

    anc_path: {
        type: String,
    },
    trait_path: {
        type: String,
    },
    anc_cardio: {
        type: String,
    },
    trait_cardio: {
        type: String,
    },
    anc_trouble: {
        type: String,
    },
    trait_trouble: {
        type: String,
    },
    anc_diabete: {
        type: String,
    },
    trait_diabete: {
        type: String,
    },
    anc_hta: {
        type: String,
    },
    trait_hta: {
        type: String,
    },
    anc_insuff: {
        type: String,
    },
    trait_insuff: {
        type: String,
    },
    anc_reti: {
        type: String,
    },
    trait_reti: {
        type: String,
    },
    info_atcd: {
        type: String,
    },
    info_grossesse: {
        type: String,
    },

    anc_immuno: {
        type: String,
    },
    trait_immuno: {
        type: String,
    },
        tabagisme: {
        type: String,
        required:true
    },
    alcool: {
        type: String,
        required: true
    },
    drogue: {
        type: String,
        required: true
    },
    taille: {
        type: String,
        required: true
    },
    poids: {
        type: String,
        required: true
    },
});
mongoose.model("Patient", patientSchema)
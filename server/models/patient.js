const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    doctor:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true
    },
    addedBy:{
        type:ObjectId,
        ref:"User"
     }

})
mongoose.model("Patient",userSchema)
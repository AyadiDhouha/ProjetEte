const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=5000
//gaTTTJeSQscQCGrX
const {MONGOURI}= require('./Keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true

})
mongoose.connection.on ('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on ('error',(err)=>{
    console.log("error connecting",err)
})

require('./models/user')
require('./models/patient')
require('./models/course')
app.use( express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/addPatient'))
app.use(require('./routes/course'))

app.listen(PORT,()=>{
    console.log("serveur is running on port ",PORT)
})
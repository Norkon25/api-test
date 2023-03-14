const express = require('express');
const mongoose = require('mongoose');
const ck = require('ckey')
const userRoutes = require("./src/routes/user")

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', userRoutes)



//Routes
app.get('/', (req, res)=>{
    res.send("Everithing OK")
})

//mongodb Connection
mongoose.connection.on('connected', ()=>{
    console.log("Connection On")
})
mongoose.connection.on('error', ()=>{
    console.log("Connection Error")
})
mongoose.connect(ck.MONGODB_URI).then(()=> console.log("connected")).catch(()=> console.log("Error"))


app.listen(port, ()=> console.log(`Listening on port ${port}`));
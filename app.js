// app  databse init
require("dotenv").config()
const port = process.env.PORT || 3030
const { sequelize } = require('./models')
const express = require("express")
const app = express()

//data json and requeste body stuff
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get("/", async (req, res)=>{
    const { models : {book} } = require("./models")
    const data = await book.findAll()
    res.json({data})
})


const bootstrap  = async () => {
    await sequelize.authenticate()

    await sequelize.sync({alter:true})

    app.listen(port, () => {console.log("app running on", port)})
}


bootstrap()

//app.listen(port, () => {console.log("app running on", port)}) classic no database running
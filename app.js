    const express = require("express")
    const path = require("path")
  
    const app = express()

    
    const { use } = require("express/lib/application")

    
  

    const pathPublic = path.resolve(__dirname,"public") 


    app.use( express.static( pathPublic))




    app.listen(3001, (req, res) =>{
        console.log("Mercalo Liebre esta Corriendo!")

    })

    app.get("/", (req,res) =>{

        res.sendFile(__dirname + "/views/home.html")
    })

    app.get("/register", (req,res) =>{

        res.sendFile(__dirname + "/views/register.html")
    })

    app.get("/login", (req,res) =>{

        res.sendFile(__dirname + "/views/login.html")
    })





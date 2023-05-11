const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

// Seed Route //
router.get("/seed", async (req, res) => {
    try {
      await log.create([
        {
            title:'grapefruit',
            entry:'wowwie',
            shipIsBroken:true
        },
        {
            title:'bad landing',
            entry:'NOT GOOOOOD',
            shipIsBroken:false
        },
        {
            title:'dear diary',
            entry:'i need help',
            shipIsBroken:true
        },
    ])
        res.redirect("/logs")
    } catch (err) {
        res.status(400).send(err)
    }  
})
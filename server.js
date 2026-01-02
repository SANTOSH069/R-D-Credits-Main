const express = require('express')


const app =express()

const formRoutes = require("./routes/FormRoute.js");

app.use(cors({
    origin: "http://localhost:3000",
}));

app.use(express.json())

app.use('api/form', formRoutes)


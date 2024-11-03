
const express = require('express');
const body_parser = require('body-parser');

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.use(body_parser.urlencoded({ extended: true }))

app.use(body_parser.raw({ extended: true }))

app.use(body_parser.json({ extended: true }))


app.get('/', (req, res)=>{
    res.send("Welcome home");
});

app.post("/", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, ()=>console.log("Server started successfully on 3000 port "));

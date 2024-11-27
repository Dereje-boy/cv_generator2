import {db}  from './smodels/index.js';

import  express from 'express';

import cookie_parser from 'cookie-parser';

import cors from 'cors'

import router from './routes/routes.js';

const app = express();

// app.use(cors());
app.use(cookie_parser());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors({
  origin: 'http://localhost:5173', // Replace with the origin of your frontend
  credentials: true
}));


console.log("connecting to mysql remote address");

//authenticate
authenticateDB();

app.get('/', (req, res)=>{
    res.send("Welcome home");
});

app.post("/", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

// app.use(router);
//using mount path
app.use( router)

app.listen(3000, ()=>console.log("Server started successfully on 3000 port "));

async function syncDB(){
	try{
	  //creating table on the db server as described in sequelize models
	  await db.sequelize.sync({alter: true});
	  console.log('Db synced please check your server')
	}catch(error){
	  console.log("Unable to sync the db: \n" + error);	
	}
	
}

async function authenticateDB(){
	try {
	  await db.sequelize.authenticate();
	  console.log('Connection has been established successfully.');

	  //if authenticated success, sync
	  // await syncDB();
 
	  //insert new record
	  //await createNewRecord('derejeg36@gmail.com', 'mypassword');
	  
	  //fetching all users
	  //await allUsers();
	  
	  //fetching all pis
	  //await allpi();

	
	} catch (error) {
	  console.error('Unable to connect to the database:\n' + error);
	}
}

async function createNewRecord(email, password){
	//inserting new record
	try{
		const newUser = await db.userModel.create({email, password});
		console.log(newUser);			
	}catch(error){
		console.log("The error is raised while creation of new user. \n" + error)
	}

	//inserting new personal information
	if(false)
	try{
		const newpi = await db.personalinformationModel.create({
			firstname:"Dereje",
			lastname: "Boy",
			phonenumber:"0922889933",
			city:"weliso",
			state:"oromia",
			aboutme: "I was born and grown up in weliso city."
		});

		console.log('new pi inserted successfully: \n' + newpi);
	}catch(error){
		console.log("Error raised while inserting new personal information:\n" + error)
	}
}

async function allUsers(){
	try{
		const users = await db.userModel.findAll();
		console.log('All Users:',JSON.stringify(users, null, 2))
	}catch(error){
		console.log('Error raised while finding all users\n'+error);
	}
}

async function allpi(){
	try{
		const pis = await db.personalinformationModel.findAll();
		console.log('All pis:',JSON.stringify(pis, null, 2))
	}catch(error){
		console.log('Error raised while finding all pis\n'+error);
	}
}

import express from 'express'
import {userModel} from '../smodels/usermodel.js';

const userRoute = express.Router();

// /users
userRoute.get('/', (req, res)=>{
	console.log(req.body);
	res.send("users page again")
})

userRoute.post('/', (req, res)=>{
	res.send("data recieved success");
	console.log(`body :`)
	console.log(req.body)
	console.log(`cookies `);
	console.log(req.cookies);
});

export default userRoute;

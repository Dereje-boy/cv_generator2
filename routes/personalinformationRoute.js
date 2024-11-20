import express from 'express';

//personal information checker
import personalinformationChecker from '../checker/personalinformationChecker.js';

const piRouter = express.Router();

piRouter.post('/', (req,res)=>{

	console.log('request coming to /personalinformation route')
	
	const {firstname, lastname, phonenumber, city, state, aboutme} = req.body;
	const pi = {
		firstname,
		lastname,
		phonenumber,
		city,
		state,
		aboutme
	}

	console.log("pi \t" + JSON.stringify(pi))

	res.send(personalinformationChecker(pi))
	
})

export default piRouter;

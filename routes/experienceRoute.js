import express from 'express';
import experienceChecker from '../checker/experienceChecker.js'

const experienceRoute = express.Router();

experienceRoute.post('/', (req,res)=>{

	console.log("Experience route visited")
	
	const {position, companyname, aboutexperience, startdate, enddate, stillhere } = req.body;

	const experience = {
		position,companyname, aboutexperience, startdate, enddate, stillhere
	}

	const result = experienceChecker(experience);

	console.log('Experience check result: ' + JSON.stringify(result))

	res.send(result);
})

export default experienceRoute;

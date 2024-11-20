import express from 'express'

import educationChecker from '../checker/educationChecker.js'

const educationRoute = express.Router();

educationRoute.post('/', (req,res)=>{

	const {nameofuniversity, titleofdocument, graduationyear, cgpa} = req.body;

	const education = {
		nameofuniversity,
		titleofdocument,
		graduationyear,
		cgpa
	}

	console.log('Education : ' + JSON.stringify(education))
	
	res.send(educationChecker(education));
})

export default educationRoute

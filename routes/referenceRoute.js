import express from 'express';

import referenceChecker from '../checker/referenceChecker.js';

const referenceRoute = express.Router();

referenceRoute.post('/', (req, res)=>{
	console.log('Reference route reached...')

	const {fullname, phone, email, role} = req.body;

	const reference = {
		fullname,phone, email, role
	}

	console.log('reference '+ JSON.stringify(reference))
	
	const result = referenceChecker(reference);

	res.send(result)
})


export default referenceRoute;

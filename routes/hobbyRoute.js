import express from 'express';
import hobbyChecker from '../checker/hobbyChecker.js'

const hobbyRoute = express.Router();

hobbyRoute.post('/', (req, res)=>{
	const {hobby} = req.body;
	console.log('Hobby route reached')

	const result = hobbyChecker(hobby);

	console.log('Hobby ' + JSON.stringify(hobby))

	res.send(result);
})

export default hobbyRoute;

import express from 'express'
import languageChecker from '../checker/languageChecker.js'

const languageRoute = express.Router();

languageRoute.post('/', (req, res)=>{
	console.log('language route reached')
	const {language, level} = req.body;
	const lang = {
		language,
		level
	}

	const result = languageChecker(lang);
	console.log('lang : ' + JSON.stringify(lang));
	res.send(result);
});


export default languageRoute;

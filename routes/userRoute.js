import {verifyuser, signjwt} from '../middlewares/jwt.js';

import express from 'express'

import userController from '../controller/userController.js';

import emailChecker from '../checker/emailChecker.js';
import passwordChecker from '../checker/passwordChecker.js';

const userRoute = express.Router();

// /users
userRoute.get('/', (req, res)=>{
	console.log(req.body);
	res.send("users page again")
})

userRoute.post('/login', async (req, res)=>{
	console.log(`body :${JSON.stringify(req.body)}`)

	const result = {
		success : false,
		reason : "The user is about to be checked",
		otherdata: {}
	}

	const {email, password} = req.body;
	
	const emailresult = emailChecker(email)
	if(emailresult.success == false){
		result.reason = emailresult.reason;
		return res.json(result);
	}


	const passwordresult = passwordChecker(password);
	if(passwordresult.success == false){
		result.reason = passwordresult.reason;
		return res.json(result);
	}

	const userresult = await userController.getbyemail(email);
	if(userresult.success == false){
		result.success = false;
		result.reason = userresult.reason;
		result.otherdata = {}
		return res.json(result);
	}

	//if pswd is correct authorize and give him token as cookie
	if(userresult.otherdata.user.password === password){
		result.success = true;
		result.reason = "Signed in successfully. Now redirecting you";

		//get token here
		const signresult = signjwt({email,password});
		if(signresult.success == true){
			const token = signresult.otherdata.token;
			result.otherdata.token = token;
			result.otherdata.email = email;

			return res.json(result);
		}else{
			//unable to generate token
			result.otherdata.token = false;
			return res.json(result);
		}
	}else{
		result.success = false;
		result.reason = "Wrong password, please try again with different password";
		result.otherdata = {}
		return res.json(result);
	}
});

;userRoute.post('/signup', async (req, res)=>{
	const {email, password, repeatpassword} = req.body;

	const newuser = {
		email, password, repeatpassword
	}

	console.log('new user is about to be registered' + JSON.stringify(newuser))

	const result = {
		success: false,
		reason: 'New user is about to be registered',
		otherdata:{}
	}

	const emailcheckresult = emailChecker(email);
	const passwordcheckresult = passwordChecker(password);

	//if email isnot fulfilled
	if(emailcheckresult.success == false){
		result.reason = emailcheckresult.reason;
		return res.json(result);
	}

	if(passwordcheckresult.success == false){
		result.reason = passwordcheckresult.reason;
	return res.json(result);
	}

	if(password !== repeatpassword){
		result.reason = "Passwords must be similar";
		return res.json(result);
	}

	const inserted = await userController.createnewuser({email, password});

	console.log("Inserted : " + JSON.stringify(inserted));

	if(inserted.success == true){
		
		result.success = true;
		result.reason = "You are successfully registered. Now redirecting you to Home";
		//here sign the user and send token
		const signresult = signjwt({email, password});
			if(signresult.success == true){
			result.otherdata.token = signresult.otherdata.token;
			// Object.assign(result.otherdata, {token: signresult.token})
			console.log("result : " + JSON.stringify(result));
			return res.json(result);		
		}else{
			result.otherdata.token = false;
			console.log("result : " + JSON.stringify(result));
			return res.json(result);		
		}
		
	}else{
		result.success = false;
		result.reason = inserted.reason;
		
		return res.json(result);		
	}

})

/*
const isemailunique = async (email) =>{
	console.log("checking email uniquneess")

	const result = {
		success : false,
		reason : "Email unique-ness is about to be checked"
	}
	
	try{
		const existinguser = await db.userModel.findOne({
			where: {
				email
			}
		})

		if(existinguser){
			result.success = false;
			result.reason = "The email is already existing while unique email expected"
			return result;
		}else{
			result.success = true;
			result.reason = "The users are checked and the email is unique";
			return result;
		}

	}catch(e){
		result.success = false
		result.reason = `Unable to register you please try again later. Error : ${e.message}`;
		return result;
	}
}
*/
export default userRoute;

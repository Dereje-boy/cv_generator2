import jwt from 'jsonwebtoken'

export const signjwt = (user)=>{
	const result = {
		success : false,
		reason: 'User is about to be signed',
		otherdata:{	}
	}

	try{
		const token = jwt.sign(user, "cv_generator_private_key");
		if(token){
			result.success = true;
			result.reason = "User is signed and token is generated successfully, grab it from otherdata object here";
			result.otherdata = {
				token
			}

			return result;
		}else{
			result.success = false;
			result.reason = "JWT unable to sign the user";
			result.otherdata = {}
			return result;

		}
		
	}catch(error){
		console.log('jwt error while sign user');
		result.success = false;
		result.reason = error
		result.otherdata = {}
		return result;
	}
}



export const verifyuser = (token)=>{
	const result = {
		success : false,
		reason: "Token is about to be verified and user is found",
		otherdata:{}
	}
	
	try{
		const user = jwt.verify(token, "cv_generator_private_key");
		if(user){
			//success verification
			result.success = true;
			result.reason = "JWT token verified successfully, grab the user from other data object below";
			result.otherdata = {
				user
			}

			return result;
			
		}else{
			//if user is undefined or null or error type
			result.success = false,
			result.reason = "JWT unable to verify provided token";
			result.otherdata = {};
			return result;
		}
	}catch(error){
			result.success = false,
			result.reason = error;
			result.otherdata = {};
			return result;
	}
}


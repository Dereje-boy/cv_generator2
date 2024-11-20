export default function passwordChecker(password){

	const result = {
		success : false,
		reason : 'criteria is about to be checked.'
	}

	if(password == null || password == undefined || password.length < 6 || password.length > 24){
		result.reason = 'Password should be between 6 to 24 character long';
		return result;
	}

	if(password.includes(' ')){
		result.reason = "Password shouldn't contian ' ' white space";
		return result;
	}

	result.success = true;
	result.reason = 'Password criteria check passed';
	return result;
}

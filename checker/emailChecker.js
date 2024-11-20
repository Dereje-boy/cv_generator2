export default function emailChecker(email){

	const result = {
		success : false,
		reason : 'criteria is about to be checked.'
	}

	if(email == null || email == undefined || email.length < 6 || email.length > 255){
		result.reason = 'Email should be between 6 to 255 character long1';
		return result;
	}

	if( !(email.includes('.')) || !(email.includes('@')) ){
		result.reason = 'Email should contain \'@\' and \'.\' symbol to be valid email';
		return result
	}

	if(email.includes(' ')){
		result.reason = "Email shouldn't contian ' ' white space";
		return result;
	}

	result.success = true;
	result.reason = 'Email criteria check passed';

	return result;
}

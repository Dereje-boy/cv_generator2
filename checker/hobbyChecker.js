export default function hobbyChecker(hobby){
	const result = {
		success : false,
		reason :'Hobby is about to be checked'
	}

	if(hobby == null || hobby ==  undefined || hobby.length < 3 || hobby.length > 255){
		result.reason = "Hobby should be between 3 and 255 character long";
		return result;
	}

	result.success = true;
	result.reason = "Hobby check passed";
	return result;
}

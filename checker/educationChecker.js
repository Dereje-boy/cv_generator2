export default function educationChecker(education){
	const {nameofuniversity, graduationyear, titleofdocument, cgpa} = education;
	const result = {
		success : false,
		reason : "Edcuation is about to be checked."
	}

	if( nameChecker(nameofuniversity).success == false){
		result.reason = nameChecker(nameofuniversity).reason;
		return result;
	}

	if( titleChecker(titleofdocument).success == false ){
		result.reason = titleChecker(titleofdocument).reason;
		return result;
	}

	if( yearChecker(graduationyear).success == false ){
		result.reason = yearChecker(graduationyear).reason;
		return result;
	}

	// if( cgpaChecker(cgpa).success == false ){
		// result.reason = cgpaChecker(cgpa).reason;
		// return result;
	// }

	result.success = true;
	result.reason = 'Education check passed.'

	return result;
}

function nameChecker(name){
	const result = {
		success : false,
		reason : 'name of university is about to be checked'
	}
	if(name == undefined || name == null || name.length < 2 || name.length > 255){
		result.reason = 'Name of University should be between 2 and 255 character long';
		return result;
	}

	result.success = true;
	result.reason = "Name of University check passed";
	return result;	
}

function titleChecker(title){
	const result = {
		success : false,
		reason : 'Title of document is about to be checked'
	}

	if(title == undefined || title == null || title.length < 2 || title.length > 255){
		result.reason = 'Title of document should be between 2 and 255 character long';
		return result;
	}

	result.success = true;
	result.reason = "Title of document check passed";
	return result;
}


function yearChecker(year){
	const result = {
		success : false,
		reason : 'Year of graduation is about to be checked'
	}

	if(year == undefined || year == null){
		result.reason = 'Year of graduation isnot defined';
		return result;
	}

	result.success = true;
	result.reason = "Graduation Year check passed."

	return result;
	
}

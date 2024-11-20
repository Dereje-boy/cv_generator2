export default function personalinformationChecker(pi){
	const {firstname, lastname, phonenumber, city, state, aboutme} = pi;
	
	const result = {
		success : false,
		reason : 'pi fields are about to be checked'
	}

	if( ! (nameChecker(firstname, true).success)) {
		result.reason = nameChecker(firstname, true).reason;
		return result;
	}

	if( ! (nameChecker(lastname, false).success)) {
		result.reason = nameChecker(lastname, false).reason;
		return result;
	}

	if( ! (phonenumberChecker(phonenumber).success )) {
		result.reason = phonenumberChecker(phonenumber).reason;
		return result;
	}

	if( ! (citystateChecker(city, true).success )){
		result.reason = citystateChecker(city, true).reason;
		return result;
	}

	if( ! (citystateChecker(state, false).success )){
		result.reason = citystateChecker(state, false).reason;
		return result;
	}

	if( ! (aboutmeChecker(aboutme).success )) {
		result.reason = aboutmeChecker(aboutme).reason;
		return result;
	}

	result.success = true;
	result.reason = "pi fields check passed";
	return result;
	
}


function nameChecker(name, isFirstname){
	const whichname = isFirstname ? 'Firstname' : "Lastname";
	const result = {
		success : false,
		reason : `${whichname} is about to be checked.`
	}

	if(name == null || name == undefined || name.length < 3 || name.length > 25){
		result.reason = `${whichname} should be between 3 and 25 character long`;
		return result;
	}

	if(/\d/.test(name)){
		result.reason = `${whichname} should contain only letters`
		return result;
	}

	result.success = true;
	result.reason = `${whichname} check passed`;
	return result;
}

function phonenumberChecker(phone){
	const result = {
		success : false,
		reason : 'Phone number is about to be checked'
	}

	if(phone == null || phone == undefined || phone.length < 9 || phone.length > 25){
		result.reason = "Phone number should be between 9 and 25 character long";
		return result;
	}

	if(/[a-zA-Z]/.test(phone)){
		result.reason = "Phone number should not contain any letter";
		return result;
	}

	result.success = true;
	result.reason = "Phone number check passed";

	return result;	
}

function citystateChecker(field, iscity){
	const whichfield = iscity ? "City" : "State";
	const result = {
		success : false,
		reason : `${whichfield} is about to be checked`
	}

	if( field == undefined || field == null || field.length < 3 || field.length > 25 ){
		result.reason = `${whichfield} should be between 3 and 25 character long`;
		return result;		
	}

	result.success = true;
	result.reason = `${whichfield} check passed`;
	return result;
	
}

function aboutmeChecker(aboutme){
	const result = {
		success : false,
		reason : "About me is about to be checked"
	}

	if(aboutme == null || aboutme == undefined || aboutme.length < 5 || aboutme.length > 255){
		result.reason = "About me should be between 5 and 255 character long";
		return result;
	}

	result.success = true;
	result.reason = "About me checked passed";
	return result;	
}

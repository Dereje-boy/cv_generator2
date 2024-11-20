export default function experienceChecker(experience){
	const result = {
		success : false,
		reason : 'Experience is about to be checked'
	}

	const {position, startdate, enddate, companyname, aboutexperience} = experience;

	if(positionChecker(position).success == false){
		result.reason = positionChecker(position).reason;
		return result;
	}

	if(companynameChecker(companyname).success == false){
		result.reason = companynameChecker(companyname).reason;
		return result;
	}

	if(aboutexperienceChecker(aboutexperience).success == false){
		result.reason = aboutexperienceChecker(aboutexperience).reason;
		return result;
	}
	
	result.success = true;
	result.reason = 'Experience check passed.'
	return result;
}

function positionChecker(position){

	const result = {
		success : false,
		reason : 'Position is about to be checked'
	}

	if( position == undefined || position == null || position.length < 2 || position.length > 255){
		result.reason = 'Position should be between 2 and 255 character long';
		return result
	}

	result.success = true;
	result.reason = 'Position check passed';
	return result;
}

function companynameChecker(name){

	const result = {
		success : false,
		reason : 'Company name is about to be checked'
	}
	
	if( name == undefined || name == null || name.length < 2 || name.length > 255 ){
		result.reason = 'Company name should be between 2 and 255 character long';
		return result;
	}

	result.success = true;
	result.reason = 'Company name check passed';
	return result;
}

function aboutexperienceChecker(about){

	const result = {
		success : false,
		reason : 'About experience is about to be checked'
	}

	if( about == undefined || about == null || about.length < 2 || about.length > 255){
		result.reason = 'About experience should be between 2 and 255 character long';
		return result;
	}

	result.success = true;
	result.reason = "About experience check passed"
	return result;
}



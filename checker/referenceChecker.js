import emailChecker from './emailChecker.js'


export default function referenceChecker(reference){

	const {fullname, phone, email, role} = reference;

	const result = {
		success : false,
		reason : 'Reference is about to be checked'
	}

	if( fullnamechecker(fullname).success == false){
		result.reason = fullnamechecker(fullname).reason;
		return result;
	}

	if( rolechecker(role).success == false){
		result.reason = rolechecker(role).reason;
		return result;
	}

	if( emailChecker(email).success == false){
		result.reason = emailChecker(email).reason;
		return result;
	}

	if(phonenumberChecker(phone).success == false){
		result.reason = phonenumberChecker(phone).reason;
		return result
	}

	result.success = true,
	result.reason = 'Reference check passed';
	return result;
	
}

function fullnamechecker(fn){
	const result = {
		success : false,
		reason : 'fullname is about to be checked'
	}
	if( fn == undefined || fn == null || fn.length < 5 || fn.length > 255){
		result.reason = 'fullname should be between 5 and 255 character long'
		return result;
	}

	result.success = true;
	result.reason = 'Fullname check passed';
	return result;
}

function rolechecker(role){
	const result = {
		success : false,
		reason : 'role is about to be checked'
	}

	if(role == undefined || role == null || role.length<5 || role.length>255){
		result.reason = "Role should be between 5 and 255 character long";
		return result;
	}

	result.success = true;
	result.reason = 'Role check passed';
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

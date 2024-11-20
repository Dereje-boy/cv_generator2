export default function languageChecker({language, level}){
	const result = {
		success : false,
		reason : 'language is about to be checked'
	}

	if( langchecker(language).success == false){
		result.reason = langchecker(language).reason;
		return result;
	}

	result.success = true;
	result.reason = 'Language check passed';
	return result;
	
}

function langchecker(lang){

	const result = {
		success : false,
		reason : 'Language lang is about to be checked'
	}
	
	if(lang == undefined || lang == null || lang.length < 2 || lang > 255){
		result.reason = 'Language should be between 2 and 255 character long'
		return result;
	}

	result.success = true;
	result.reason = 'Language lang check passed';
	return result;
}

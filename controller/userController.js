import {db} from '../smodels/index.js';

import usermodel from '../smodels/usermodel.js';

export default class userController{

	static async createnewuser(user){
		const {email, password} = user;

		const result = {
			success : false,
			reason : 'New user is about to be inserted',
			otherdata:{}
		}
		
		try{
			const newuser = await db.userModel.create({email, password});
			//if inserted successfully newuser will hold the data we passed with default
			//values filled out
			if(newuser){
				result.success = true;
				result.reason = 'The new user is created successfully';
				result.otherdata = newuser.toJSON();
			}else{
				result.success = false;
				result.reason = 'Unable to insert new user';
			}

			return result;
		}catch(error){
			result.success = false;
   			result.otherdata = {error};

            //check for error if  email unique-ness or emaility is the reason
            if(error.name == 'SequelizeUniqueConstraintError'){
	            result.reason="The email is already existing. Login with your password" ;
	           return result;                                                   
	        }
	        //check for other email validation error here
	        result.reason = "Unable to register you please try again with different email. "
	        console.log("Error : " +JSON.stringify(error));
		    return result;
		}		
	}

	static async getbyemail(email){
		const result = {
			success : false,
			reason : 'The user is about to be checked',
			otherdata:{}
		}
		
		try{
			const user = await db.userModel.findOne({where:{email}});
			
			if(user){
				result.success = true;
				result.reason = "The user is found grab it from below object";
				result.otherdata.user = user.toJSON();
				return result;
			}else{
				result.success = false;
				result.reason = "The user is not found with this email address";
				result.otherdata = {}
				return result;
			}
		}catch(error){
			result.success = false;
			result.reason = "Error found while searching for user";
			result.otherdata = {error}
			return result;
		}
	}
}

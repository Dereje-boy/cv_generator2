import express from 'express'

//child routes
import userRoute from './userRoute.js';
import personalinformationRoute from './personalinformationRoute.js';
import educationRoute from './educationRoute.js';
import experienceRoute from './experienceRoute.js'
import languageRoute from './languageRoute.js'
import referenceRoute from './referenceRoute.js'
import hobbyRoute from './hobbyRoute.js'

//main router
const router = express.Router();


//assigning each child routes to their respective url
router.use('/users', userRoute)
router.use('/personalinformation',cookieChecker , personalinformationRoute)
router.use('/education',cookieChecker , educationRoute)
router.use('/experience', cookieChecker ,experienceRoute)
router.use('/language',cookieChecker , languageRoute)
router.use('/reference',cookieChecker , referenceRoute)
router.use('/hobby',cookieChecker , hobbyRoute)

// router.use('/users', userRoute)
// router.use('/pi', piRoute)
// router.use('/education', educationRoute)
// router.use('/experience', experienceRoute)
// router.use('/reference', referenceRoute)
// router.use('/hobby', hobbyRoute)
// router.use('/language', languageRoute)


function cookieChecker(req, res, next){
	console.log('Cookie checker is touched')
    console.log(JSON.stringify(req.cookies))
 
    const {email, password} = req.cookies;
    if( (email != null && email != undefined && email.toLowerCase() == 'derejeg35@gmail.com') 
    	&& 
    	(password != null && password != undefined && password.toLowerCase() == '1234567890') ){
    	// authorized for time being
        next();
    }else{
	//assume as wrong user
    	const result = {
        	success: false,
        	reason: "Unauthorized user. Please login or create a brand new account",
        	otherdata:{
            	}
         }
         res.json(result);
     }
 }
export default router;

//make default while exporting to import without curly braces i.e {importpackage}

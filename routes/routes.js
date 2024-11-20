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
router.use('/personalinformation', personalinformationRoute)
router.use('/education', educationRoute)
router.use('/experience', experienceRoute)
router.use('/language', languageRoute)
router.use('/reference', referenceRoute)
router.use('/hobby', hobbyRoute)

// router.use('/users', userRoute)
// router.use('/pi', piRoute)
// router.use('/education', educationRoute)
// router.use('/experience', experienceRoute)
// router.use('/reference', referenceRoute)
// router.use('/hobby', hobbyRoute)
// router.use('/language', languageRoute)


export default router;

//make default while exporting to import without curly braces i.e {importpackage}

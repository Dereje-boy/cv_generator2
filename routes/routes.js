import express from 'express'

//child routes
import userRoute from './userRoute.js';

//main router
const router = express.Router();


//assigning each child routes to their respective url
router.use('/users', userRoute)

// router.use('/users', userRoute)
// router.use('/pi', piRoute)
// router.use('/education', educationRoute)
// router.use('/experience', experienceRoute)
// router.use('/reference', referenceRoute)
// router.use('/hobby', hobbyRoute)
// router.use('/language', languageRoute)


export default router;

//make default while exporting to import without curly braces i.e {importpackage}

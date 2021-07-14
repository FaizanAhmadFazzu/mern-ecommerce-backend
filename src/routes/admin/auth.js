const express = require("express");
const { signup, signin, signout } = require("../../controllers/admin/auth");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth");
const { requireSignin } = require('../../common-middleware/index')
const router = express.Router()



router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/admin/signout', requireSignin, signout)



module.exports = router;
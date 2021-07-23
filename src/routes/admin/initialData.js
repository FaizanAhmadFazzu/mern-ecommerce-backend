const express = require("express");
const { initailData } = require("../../controllers/admin/initialData");
const router = express.Router()




router.post('/admin/initialData', initailData);




module.exports = router;
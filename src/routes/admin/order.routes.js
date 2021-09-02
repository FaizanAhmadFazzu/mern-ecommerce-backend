const express = require("express");
const { updateOrder } = require("../../controllers/admin/order.admin");
const { requireSignin, adminMiddleware } = require("../../common-middleware");
const router = express.Router();

router.post("/order/update", requireSignin, adminMiddleware, updateOrder);

module.exports = router;

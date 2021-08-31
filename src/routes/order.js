const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { addOrder, getOrders } = require("../controllers/order");

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);

module.exports = router;

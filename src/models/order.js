const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAddress.address",
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      payablePrice: {
        type: Number,
        required: true,
      },
      purchaseQty: {
        type: Number,
        required: true,
      },
    },
  ],

  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "cancelled", "refund"],
  },
});

module.exports = mongoose.model("Order", orderSchema);

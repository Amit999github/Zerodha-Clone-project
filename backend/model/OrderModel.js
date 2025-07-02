const {model} = require("mongoose");
const {OrderSchema} = require("../schema/OrderSchema")

const OrderModel = new model("holding", OrderSchema)

module.exports = {OrderModel};
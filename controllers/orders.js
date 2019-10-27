const Order = require("../database/models/orders");

module.exports = async (req,res) =>{
    const orders = await Order.find({});
    res.render("orders",{
        orders
    })
}
const Order = require('../database/models/orders');
const User = require("../database/models/User");

module.exports = async(req,res)=>{
    const user = await User.findOne({_id:req.session.userId});
    let a =  req.body;
    console.log(a);
    const arr = [];
    for(i=0;i<a.length-1;i++){
        arr.push(a[i]);
    }
    const totalPrice=a[a.length-1].totalPrice;
    const totalQuantity=a[a.length-1].totalQuantity;

    Order.create({
        Products: arr,
        user_id: req.session.userId,
        user_name: user.username,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity
    },(error,order)=>{
        if(error){
            console.log(error);
        }
    })

}
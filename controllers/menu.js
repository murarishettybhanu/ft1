const User = require('../database/models/User')

module.exports = async (req, res) => {
  const user = await User.findById(req.session.userId);
    res.render("menu",{
      user
    });
  }
  
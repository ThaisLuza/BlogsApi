const userService = require('../services/userService');

module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.createNewUser({
      displayName,
      email,
      password,
      image,
    });
     
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

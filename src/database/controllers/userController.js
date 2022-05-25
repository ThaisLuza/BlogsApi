const userService = require('../services/userService');

const create = async (req, res, next) => {
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

const getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  create,
  getAll,
};

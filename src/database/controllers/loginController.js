const loginService = require('../services/loginService');

const validateBody = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    // console.log(email)

    if (!email || !password) {
      res.status(400).json({ message: 'Some required fields are missing' });

      return false;
    }

    const token = await loginService.login(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
module.exports = {
  validateBody,
};

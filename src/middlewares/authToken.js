const jwt = require('jsonwebtoken');

const senhasecreta = 'BATATINHADATURMA17';

const authToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, senhasecreta);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = authToken;

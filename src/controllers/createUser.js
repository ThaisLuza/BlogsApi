const { User } = require('../database/models');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });

    if (!user) throw Error;

    res
      .status(201)
      .json({ message: 'Novo usuário criado com sucesso', user: email });
  } catch (err) {
    res
      .status(500)
      .json({
        message: 'Erro ao salvar o usuário no banco',
        error: err.message,
      });
  }
};

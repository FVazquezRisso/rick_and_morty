const users = require('../utils/users')

const login = (req, res) => {
  const { email, password } = req.query;

  const access = users.find(user => user.email === email && user.password === password);

  return res.json({access: !!access})
} 

module.exports = { login }
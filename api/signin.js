// signin.js

// signin.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/User');

async function signinUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing email or password' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ email: user.email }, 'idrsthabet', { expiresIn: '365d' });

    res.status(200).json({ message: 'Sign in successful', token });
  } catch (error) {
    console.error('Error signing in user:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = signinUser;


/* function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Authorization token is missing' });

  jwt.verify(token.replace(/^Bearer\s/, ''), 'your-secret-key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded; // Save decoded user information to request object
    next();
  });
}

// Protected route using the middleware
app.post('/protected-route', verifyToken, (req, res) => {
  // Access decoded user information from req.user
  console.log(req.user.email);
  res.json({ message: 'Authorized request' });
});
 */
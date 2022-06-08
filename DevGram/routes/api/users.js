const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const User = require('../../models/User');
const jwt = require('jsonwebtoken')
const config = require('config');

router.post(
  '/',
  body('name', 'Please include a name').not().isEmpty(),
  body('email', 'Please include an Email').isEmail(),
  body(
    'password',
    'Please provide a password greater than or equal to 6 characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        password,
        avatar,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
          payload,
          config.get('JWTSecret'),
          {expiresIn: 360000},
          (err,token) =>{
            if(err) throw err;
            res.json({token})
          }
      )

    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Server Error' });
    }

    console.log(req.body);
  }
);

module.exports = router;

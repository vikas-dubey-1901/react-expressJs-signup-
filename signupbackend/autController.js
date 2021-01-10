const catchAsync = require('./catchAsync');
const User = require('./models/signupModel');
const bcrypt = require('bcrypt');

exports.signup = catchAsync(async (req, res, next) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securepassword = await bcrypt.hash(req.body.password, saltPassword);

  const user = await User.create({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: securepassword
  });
  res.status(200).json({
    status: 'success',
    message: 'user signed up successfully',
    data: {
      user
    }
  });
});

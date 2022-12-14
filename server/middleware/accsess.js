const usersModel = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateSignUp,validateSignIn } = require("../validation/user-accsess");

const signUp = async (req, res) => {
    const { isValid, errors } = validateSignUp(req.body.user);
    if (!isValid) return res.status(400).json(errors);
    usersModel.findOne({ email: req.body.user.email }, (err, user) => {
      if (err) return res.status(400).json(err);
      if (user) return res.json({ massage: "email already taken" });
      bcrypt
        .genSalt()
        .then((salt) => {
          bcrypt
            .hash(req.body.user.password, salt)
            .then(async (hashPassword) => {
              req.body.user.password = hashPassword;
              await usersModel
                .insertMany(req.body.user)
                .then(() => res.json({ massage: "success" }))
                .catch((err) => res.json(err));
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  
const signIn = async (req, res) => {
    const { isValid, errors } = validateSignIn(req.body.user);
    if (!isValid) return res.status(400).json(errors);
    const email = req.body.user.email;
    const password = req.body.user.password;
    await usersModel.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(404).json({ emailNotFound: "Email not found" });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
          jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 31556926 }, (err, token) => {
            if (err) return res.status(400).json({ err, message: false });
            res.json({ success: true, token: `Bearer token: ${token}` });
          });
        } else {
          return res
            .status(400)
            .json({ passwordIncorrect: "Password incorrect" });
        }
      });
    });
  };


module.exports = { signUp, signIn };
const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgetPassword", forgetPassword);

function login(req, res, next) {
  userController
    .login(req.body)
    .then(user =>
      user
        ? res.status(200).json({ success: true, user })
        : res.status(400).json({
            success: false,
            message: "Username or password is incorrect"
          })
    )
    .catch(err => next(err));
}

function signup(req, res, next) {
  userController
    .signup(req.body)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => next(err));
}

function forgetPassword(req, res, next) {
  userController
    .forgetPassword(req.body)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => next(err));
}

module.exports = router;

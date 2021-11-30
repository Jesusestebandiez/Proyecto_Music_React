const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {setError} = require("../../utils/error.util")

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate("music")
        return res.json({
            status: 200,
            message: 'Todo Ok',
            data: { users: users }
        });
    } catch (error) {
        return next(error);
    }
}

const register = async (req, res, next) => {
    try {
      const newUser = new User();
      newUser.name = req.body.name;
      newUser.lastname = req.body.lastname;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.music = [];
  
      const userDb = await newUser.save();

      return res.json({
        status: 201,
        message: "Has crado un usuario",
        data: {user: userDb}
      });
    } catch (err) {
      return next(err);
    }
  }

const login = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email });
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },
                req.app.get("secretKey"),
                { expiresIn: "1h" }
            );
            return res.json({
                status: 201,
                message: "Todo Ok, has logueado tu usuario",
                data: { user: userInfo, token: token }
            });
        } else {
            const error = setError(500, 'Oooopps');
            return res.json ({status: error.code, message: error.message, data:null})
        }
    } catch (error) {
        return next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        return res.json({
            status: 201,
            message: "Todo Ok, has deslogueado tu usuario",
            token: null
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = { getAllUsers, register, login, logout };
const { userSignUp, userSignIn } = require('../helper/user');

exports.signup = async (req, res, next) => {
    try {
        const cred = await userSignUp(req);
        return res.status(200).json(cred)
     }
     catch(err){
        return next({
            message: err.message,
            status: 400
        })
     }
 }

exports.signin = async (req, res) => {
    try {
        const cred = await userSignIn(req);
        return res.status(200).json(cred)
     }
     catch(err){
        return next({
            message: err.message,
            status: 400
        })
 }}
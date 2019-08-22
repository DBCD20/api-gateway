const fetch = require('node-fetch');

//HANDLE USER SIGN UP
exports.userSignUp = req => {
    return fetch(`https://dso-auth-service.herokuapp.com/api/auth/signup`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}
//HANDLE USER LOGIN
exports.userSignIn = req => {
    return fetch(`https://dso-auth-service.herokuapp.com/api/auth/signin`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}


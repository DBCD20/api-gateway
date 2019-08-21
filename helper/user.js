const fetch = require('node-fetch');

//HANDLE USER SIGN UP
exports.userSignUp = req => {
    return fetch(`http://localhost:3003/api/auth/signup`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}
//HANDLE USER LOGIN
exports.userSignIn = req => {
    return fetch(`http://localhost:3003/api/auth/signin`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}


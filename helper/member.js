const fetch = require('node-fetch');


//HANDLE GET MEMBER
exports.getMembers = () => {
    return fetch(`https://dso-member-service.herokuapp.com/api/members`)
    .then(res => res.json())
}

//HANDLE ADD MEMBER
exports.addMember = req => {
    return fetch(`https://dso-member-service.herokuapp.com/api/members/`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}
//HANDLE EDIT MEMBER
exports.editMember = (req, id) => {
    return fetch(`https://dso-member-service.herokuapp.com/api/members/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(req.body) })
            .then(res => res.json())
}
//HANDLE DELETE MEMBER
exports.delMember = id => {
    return fetch(`https://dso-member-service.herokuapp.com/api/members/${id}`, {
                method: 'DELETE', })
            .then(res => res.json())
}
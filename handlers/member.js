const { getMembers, addMember, editMember, delMember } = require('../helper/member')

exports.getLists =  async (req, res) => {
    try {
       const list = await getMembers();
       res.status(200).json(list)
       return
    }
    catch(err){
       console.log(err.message)
    }
};
exports.add = async(req, res) => {
    try {
       const member = await addMember(req);
       res.status(200).json(member)
       return
    }
    catch(err){
       console.log(err.message)
    }
}
exports.edit = async(req, res) => {
    try {
        console.log(req.params.id)
       const member = await editMember(req, req.params.id);
       res.status(200).json(member)
       return
    }
    catch(err){
       console.log(err.message)
    }
}

exports.remove = async(req, res) => {
    try {
       const member = await delMember(req.params.id);
       res.status(200).json(member)
       return
    }
    catch(err){
       console.log(err.message)
    }
}
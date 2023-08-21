import userService from "../services/userService";
let handleLogin = async(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){
        return res.status(500).json({
            errCode: 1,
            message:'Missing inputs parameters'
        })
    }
    let userData = await userService.handleUserLogin(username,password);
    return res.status(200).json({
        errCode: userData.errCode,
        message:userData.errMessage,
       user:userData.user ? userData.user :{}
       
    })
}
let handleGetAllUsers = async(req,res) =>{
    let id = req.body.id;
    if(!id){
        return res.status(200).json({
            errCode:1,
            errMessage:'Missing req parameters',
            users:[]
        })
    }

    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode:0,
        errMessage:'OK',
        users:[]
    })
    
}
module.exports ={
    handleLogin:handleLogin,
    handleGetAllUsers:handleGetAllUsers,
} 
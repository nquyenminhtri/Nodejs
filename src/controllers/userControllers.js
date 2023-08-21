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
module.exports ={
    handleLogin:handleLogin,
} 
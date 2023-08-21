import db from "../models/index";
import bcrypt from 'bcryptjs';
let handleUserLogin = (username,password) =>{
return new Promise(async(resolve, reject) => {
    try{
        let userData ={};
        let isExist = await checkUsername(username);
        if(isExist){
            let user = await db.User.findOne({
                attributes:['username','passWord','phonenumber','role'],
                where:{username:username},
                raw:true
            });
            if(user){
                
                let check = await bcrypt.compareSync(password,user.passWord);
                
                if(check){
                    userData.errCode = 0;
                    userData.errMessage = "Ok";
                    delete user.passWord;
                    userData.user = user;
                }else{
                    userData.errCode = 3;
                    userData.errMessage = "Wrong password";
                }
            }else{
                userData.errCode =2;
                userData.errMessage = 'User is not found';

            }
          
        }else{
            userData.errCode = 1;
            userData.errMessage = 'Your is username is not exist in your system'
            
        }
        resolve(userData);
    }catch(e){
        reject(e);
    }
})
}


// Check username 
let checkUsername = (username)=>{
    return new Promise(async(resolve, reject) =>{
        try{
            let user = await db.User.findOne({
                where:{username : username}
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
        }catch(e){
            reject(e);
        }
    })
}

module.exports ={
    handleUserLogin:handleUserLogin,
    checkUsername: checkUsername,
    
}
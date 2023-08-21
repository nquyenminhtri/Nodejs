import bcrypt from 'bcryptjs';
import db from '../models';
const salt = bcrypt.genSaltSync(10);
let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {

            // Kiểm tra xem tài khoản đã tồn tại hay chưa
            const existingUser = await db.User.findOne({
                where: {
                    username: data.username,
                },
            });

            if (existingUser) {
                console.log('Tài khoản đã tồn tại');
                resolve('Tài khoản đã tồn tại');
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({

                    username: data.username,
                    passWord: hashPasswordFromBcrypt,
                    phonenumber: data.phonenumber,
                    role: data.role,
                })

                resolve('Create a new user successfully');
            }
        } catch (e) {
            reject(e);
        }
    });
}
let getUserInfoById = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            if (user) {
                resolve(user);

            } else {
                resolve([])
            }
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {

            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}
let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
}
let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.username = data.username;
                user.phonenumber = data.phonenumber;
                user.role = data.role;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            console.log(e);
        }
    });
}
let deleteCRUDById = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getUserInfoById: getUserInfoById,
    getAllUser: getAllUser,
    hashUserPassword: hashUserPassword,
    updateUserData: updateUserData,
    deleteCRUDById: deleteCRUDById,
}
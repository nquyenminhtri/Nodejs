import db from '../models/index';
import CRUDServices from "../services/CRUDServices";


let getHomePage = (req, res) => {
    return res.render('home.ejs');
};
let getHomePageSignup = (req, res) => {
    return res.render('signup.ejs');
};
let postSignupPage = async(req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message);
    console.log(req.body);
    return res.send('post crud from server');
};
let getEditCRUD = async(req, res) => {
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            user: userData
        }); 
    } else {
        return res.send('User not found!');
    }

};
let displayHomePage = async(req, res) => {
    let data = await CRUDServices.getAllUser();
    return res.render('displayHomePage.ejs', {
        dataTable: data,
    });
};
let putCRUD = async(req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('displayHomePage.ejs', {
        dataTable: allUsers
    });
}
let deleteCRUD = async(req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteCRUDById(id);
        return res.send('Delete successfully');
    } else {
        return res.send('Delete failed');
    }
}
module.exports = {
    getHomePage: getHomePage,
    postSignupPage: postSignupPage,
    getHomePageSignup: getHomePageSignup,
    getEditCRUD: getEditCRUD,
    displayHomePage: displayHomePage,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}
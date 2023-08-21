import express from "express";
import homeControllers from "../controllers/homeControllers";
import userControllers from "../controllers/userControllers";
let router = express.Router();
let initWebRoutes = (app) => {

    router.get('/', homeControllers.getHomePage);
    router.get('/signup', homeControllers.getHomePageSignup);
    router.post('/post-signup', homeControllers.postSignupPage);
    router.get('/get-crud', homeControllers.displayHomePage);
    router.get('/edit-crud', homeControllers.getEditCRUD);
    router.post('/put-crud', homeControllers.putCRUD);
    router.get('/delete-crud', homeControllers.deleteCRUD);
    router.post('/api/login',userControllers.handleLogin);
    return app.use("/", router);
}
module.exports = initWebRoutes;
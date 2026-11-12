const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res, next) => {
    res.send("Admin dashboard");
});
adminRouter.get("/users", (req, res, next) => {
    res.send("Admin user");

});

adminRouter.get("/settings", (req, res, next) => {
    res.send("Admin Settings");
});
module.exports = adminRouter;
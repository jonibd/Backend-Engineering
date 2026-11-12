const express = require("express");

const app = express();

const adminRouter = require("./routes/adminRoutes.js");

//Application-level Middlewareok
// app.use((req, res, next) => {
//     console.log("Request Received");
//     next();
// });

// app.use((req, res, next) => {
//     if (req.method === "POST") {
//         console.log("POST Request Received")
//     }

//     next();

// });

// //Router-level middleware

// const authMiddleware = (req, res, next) => {

//     const isAuthenticated = true;
//     if (!isAuthenticated) {
//         return res.status(401).send("you are not authorised to access this route.");
//     }
//     next();
// }

// const roleMiddleware = (req, res, next) => {

//     const isAdmin = true;
//     if (!isAdmin) {
//         return res.status(403).send("You don't have permission to access this page.");
//     }
//     next();
// }


// adminRout.use((req, res, next) => {
//     console.log("Admin Middleware");
//     next();
// });

// adminRout.get("/dashboard", authMiddleware, (req, res) => {
//     res.send("Admin Dashboard");
// });


// adminRout.get("/users", (req, res) => {
//     res.send("Admin Users");

// });

// adminRout.get("/products", authMiddleware, (req, res) => {
//     res.send("Admin products");

// });
// adminRout.get("/settings", authMiddleware, (req, res) => {
//     res.send("Admin settings ");

// });



app.use("/admin", adminRouter);



// app.get("/", (req, res) => {

//     res.send("Welcome to Express.js");

// });

// app.post("/products", (req, res) => {
//     res.send("Post Request Received.");
// })



// app.get("/about", (req, res) => {
//     res.send("This is about page!");
// });

// app.get("/contact", (req, res) => {
//     res.send("This is Contact Page");
// });

// app.get("/admin", authMiddleware, roleMiddleware, (req, res) => {
//     res.send("Admin");

// });

// app.use((req, res) => {
//     res.status(404).send("Route Not Fount");
// });

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
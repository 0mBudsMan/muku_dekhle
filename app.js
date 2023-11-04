const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");

const passportSetup = require("./passport");

const authRoute = require("./routes/auth");
app.use(passport.initialize());
app.use(passport.session()); 

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  credentials: true,  
}));
app.use("/books", router); // localhost:5000/books
app.use("/auth", authRoute);
app.use(
  cookieSession({name: "session", keys: ["ombudsman"], maxAge: 24*60*60*100})
)

app.use("/auth", authRoute)


mongoose
  .connect(
    "mongodb+srv://om:jaymataji@cluster0.ablhky6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

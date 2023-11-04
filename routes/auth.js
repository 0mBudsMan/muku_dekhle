var express = require('express');
const passport = require("passport");

const router = express.Router();
router.get("/login/failed", (req,res)=>{
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
    })
});

router.get("/login/success", (req,res)=>{
    if(req.user){
        res.status(401).json({
            success: true,
        message: "user has successfully authenticated.",
        user: req.user
        })
       
    }
});

router.get("logout", (req,res)=>{
    req.logout();
    res.redirect("http://localhost:3000/");
}); 


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",  
    failureRedirect: "/login/failed",
})
)

module.exports = router
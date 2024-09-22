const jwt = require("jsonwebtoken")
const JWT_USER_SECERT = process.env.JWT_USER_SECERT

function userMiddleware(req,res,next){
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_USER_SECERT)

    if( decoded){
        req.userId = decoded.id
        next()
    }else{
        res.json({
            message: "Authentication Failed"
        })
    }
}
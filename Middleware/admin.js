const jwt = require("jsonwebtoken")
const JWT_USER_SECERT = process.env.JWT_USER_SECERT

function adminMiddleware(req,res,next){
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_USER_SECERT)

    if( decoded){
        req.adminId = decoded.id
        next()
    }else{
        res.json({
            message: "Authentication Failed"
        })
    }
}
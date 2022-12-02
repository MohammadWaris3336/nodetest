const json = require("jsonwebtoken");

module.exports = (request, response, next)=>{
    try {
        const auth = request.headers.authorization.split(" ")[1];
        const verify = json.verify(auth, "Token");
        next();
        
    } catch (error) {
        response.status(401).send("You are Not Allowed for this Action!")
    }
    
}
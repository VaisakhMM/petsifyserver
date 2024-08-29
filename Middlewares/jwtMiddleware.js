const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwt middleware");
    
    // Check if the authorization header is present
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json("Authorization header is missing");
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json("Token is missing from Authorization header");
    }

    try {
        const jwtResponse = jwt.verify(token, 'supersecretkey12345');
        console.log("===jwtresponse===");
        console.log(jwtResponse);
        req.payload = jwtResponse.userId;
        next();
    } catch (err) {
        res.status(401).json("Authorization failed, Please Login");
    }
};

module.exports = jwtMiddleware;

const adminAuth = (req , res , next) =>{
    const token = "admin"
    const isAdminAuthorized = token === "admin"
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request")
    }
    else{
        next()
    }
}

const userAuth = (req , res , next) =>{
    const token = "user"
    const isUserAuthenticated = token === "user"
    if (!isUserAuthenticated){
        res.status(401).send("Unauthorized request")
    }
    else{
        next()
    }

}

module.exports = {
    adminAuth,
    userAuth
}
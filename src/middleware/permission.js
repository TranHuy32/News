const permission = async(req, res, next) => {
    try {
        console.log(req.user);
       console.log('check permission' );
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = permission

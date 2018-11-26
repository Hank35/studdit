const User = require('../src/user');
const neo = require('../neo4j_setup');
const neoQueries = require('../src/neo_queries');



// create a new user
function create(req, res) {
    const userProps = req.body;
    let session;
    let replyUser;
console.log('user aanmaken..')
    // add user to mongodb
    User.create(userProps)
        // .then(user => {
        //     replyUser = user;
        //     // add user with relevant nodes to neo4j

        //     // NOTE: we have an atomicity problem here
        //     session = neo.session();
        //     return neoQueries.createUser(session, user);
        // })
        // .then(() => {
        //     this.session.close();
        //     res.send(replyUser);
        // })
        .catch(err => {
            // error code 11000 in mongo signals duplicate entry
            if (err.code === 11000) {
                res.status(409);
                res.send('user already exists');
            } else {
                console.log('error in create user: ' + err);
                res.status(400);
                res.send(err);                
            }
        });
}


module.exports = {
    // list: list,
    create: create,
    // getUser: getUser,
    // setUser: setUser
}
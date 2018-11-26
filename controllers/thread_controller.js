const Thread = require('../src/thread');
const neo = require('../neo4j_setup');
const neoQueries = require('../src/neo_queries');



// create a new thread
function create(req, res) {
    const threadProps = req.body;
    let session;
    let replyThread;

    // add user to mongodb
    Thread.create(threadProps)
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
                res.send('thread already exists');
            } else {
                console.log('error in create thread: ' + err);
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
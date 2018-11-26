const UserController = require('../controllers/user_controller');
const ThreadController = require('../controllers/thread_controller');
const CommentController = require('../controllers/comment_controller');
const VoteController = require('../controllers/vote_controller');

function replyBasic(req, res) {

    let reply = {
        'description': 'Studdit',

    };

    res.send(reply);

}


module.exports = (app) => {
    //basic reply
    app.get('/', replyBasic)

    // create a new user
    app.post('/user', UserController.create);
    // create a new thread
    app.post('/thread', ThreadController.create )
}
    
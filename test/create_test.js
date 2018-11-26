const assert = require('assert');
const User = require('../src/user');
const Thread = require('../src/thread');
const Comment = require('../src/comment');


 describe('Creating records', () => {
    let joe, jack, threadOne, comment;

    beforeEach((done) => {
        joe = new User({ name:'Joe', password: 'banana' });
        jack = new User({ name: 'Jack', password: 'potato'});
        threadOne = new Thread({ title:'First thread', content: 'Hello Studdit.' });
        comment = new Comment({ content: 'Deleet your blog.' });

        joe.threads.push(threadOne);
        threadOne.comments.push(comment);
        threadOne.author = joe;
        comment.author = jack;

        Promise.all([jack.save(), joe.save(), threadOne.save(), comment.save()])
            .then(() => done());
    });

    it('saves a user', (done) => {
        const pete = new User({name: 'Pete', password: 'test1234'});

        pete.save()
         .then (() => {
             assert(!pete.isNew);
             done();
         });
    });

    xit('Saves a relation between a user and a thread', (done) => {
        User.findOne({ name: 'Joe' })
        .populate('threads')
        .then((user) => {
            assert(user.threads[0].title === 'First thread');
            done();
        });
    });
});
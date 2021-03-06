const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than two characters.'
        },
        required: [true, 'Name is required.']
    },
    password: {
        type: String,
        unique: true,
        validate: {
            validator: (password) => password.length > 5,
            message: 'Password must be at least six characters.'
        },
        required: [true, 'Password is required.']
    },
    threads: [{
        type: Schema.Types.ObjectId,
        ref: 'thread'
    }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

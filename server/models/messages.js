const mongoose = require('mongoose');
const { v4 : uuidv4 } = require('uuid');

const messageSchema = new mongoose.Schema ({
    message_id : { type : String, default : uuidv4, required : true, unique : true },
    sender_id : { type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver_id : { type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content : { type : String, required: true, trim : true},
    status : { type : String, enum : ['sent', 'delivered', 'read'], default: 'sent' },
    timestamp : { type : Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

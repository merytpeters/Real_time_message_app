const mongoose =  require('mongoose');
const { v4 : uuidv4 } = require('uuid');

const groupSchema = new mongoose.Schema ({
  groupID : { type : Number, default : uuidv4, required : true, unique : true },
  group_name : { type : String, required : true },
  members : [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
  created_at : { type : Date, default: Date.now }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;

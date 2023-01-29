const mongoose = require("mongoose");

//user schema
const TagSchema = mongoose.Schema({
  title:{
    type: String,
    default:''
  },
  detail: {
    type: String,
    default:''
    // unique: true,
  },
  page: {
    type: String,
    default:''
    // unique: true,
  },

 
});
//user Model
module.exports.MetaTag = mongoose.model("MetaTag", TagSchema);

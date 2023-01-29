const mongoose = require("mongoose");

//user schema
const blogSchema = mongoose.Schema({
  title:{
    type: String,
    default:''
  },
  title2:{
    type: String,
    default:''
  },
  description: {
    type: String,
    default:''
   
  },
  publisherName: {
    type: String,
    default:''
  },
  p1: {
    type: String,
    default:''
  },
  p2: {
    type: String,
    default:''
  },
  p3: {
    type: String,
    default:''
  },
  p4: {
    type: String,
    default:''
  },
  date: {
    type: String,
    default:''
  },
  img1: {
    type: String,
    default:''
  },
  img2: {
    type: String,
    default:''
  },

 
});
//user Model
module.exports.Blog = mongoose.model("Blog", blogSchema);

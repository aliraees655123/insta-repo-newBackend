const mongoose = require("mongoose");

//content schema
const contentSchema = mongoose.Schema({
  page: {
    type: String,
    default: "",
  },
  mainHeading: {
    type: String,
    default: "",
  },
  copyLinkTxt: {
    type: String,
  },
  feature: {
    type: String,
  },
  placeHolderTxt: {
    type: String,
  },
  featureTxt: {
    type: String,
  },

  sliderData: {
    type: Array,
  },
  questionsHeading: {
    type: String,
  },
  questionsText: {
    type: String,
  },
  btnQuestionTxt: {
    type: String,
  },
  faqData: {
    type: Array,
  },
  termConditionsText: {
    type: String,
  },
  privacyText: {
    type: String,
  },
  termConditionsText: {
    type: String,
  },
  faqTxt: {
    type: String,
  },
  emailTxt: {
    type: String,
  },
  subscribeBtnTxt: {
    type: String,
  },
  language:{
    type: String,

  },
  path:{
    type: String,

  },
  videoD:{
    type: String,

  },
  imageD:{
    type: String,

  },
  download:{
    type: String,

  },




  abousUs:{
    type: String,

  },
  blog:{
    type: String,

  },
  feautureNav:{
    type: String,

  },
  photoNav:{
    type: String,

  },
  reelNav:{
    type: String,

  },
  postNav:{
    type: String,

  },
  videoNav:{
    type: String,

  },

});
//user Model
module.exports.Content = mongoose.model("Content", contentSchema);

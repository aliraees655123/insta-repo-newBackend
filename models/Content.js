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
  privacyP1:{
    type: String,

  },
  privacyP2:{
    type: String,

  },
  privacyP3:{
    type: String,

  },
  privacyP4:{
    type: String,

  },
  privacyP5:{
    type: String,

  },
  term1:{
    type: String,

  },
  term2:{
    type: String,

  },
  term3:{
    type: String,

  },
  term4:{
    type: String,

  },
  term5:{
    type: String,

  },

});
//user Model
module.exports.Content = mongoose.model("Content", contentSchema);

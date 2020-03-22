var mongoose = require('mongoose')
var MovieSchema = new mongoose.Schema({
  title: {type:String, required:true, minlength:3},
  reviews:[{
    user: {type:String, required:true, minlength:3},
    rating:{type:Number, default:5},
    comment:{type:String, required: true, minlength: 3, default:""}
  }]
})
module.exports = mongoose.model('Movie', MovieSchema);
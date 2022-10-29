//Monggoose
const {Timestamp}  = require('bson')
const mongoose = require('mongoose')

//ConnectMongoDB
const dbUrl ='mongodb://localhost:27017/SuggestionDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err =>console.log(err))

//Design Schema
let suggestionSchema = mongoose.Schema({
    name : String,
    lastname : String,
    email : String,
    suggestion : String,
    timestamp : Number

})
//Create Model
let Suggestion = mongoose.model("model", suggestionSchema)

//Export Model
module.exports = Suggestion

//Function Save Information
module.exports.saveInformation = function(model, data){
    model.save(data)
}


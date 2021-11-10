const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({ 
umbrella_type: String, 
color: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("umbrella",umbrellaSchema) 

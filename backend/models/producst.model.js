const  mongoose  = require("mongoose");

const productsSchema = mongoose.Schema({
    imgURL: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: String, required: true},
    installments: {type: String, required: true},
    flag: {type: String},
})

module.exports = mongoose.model("User", productsSchema);
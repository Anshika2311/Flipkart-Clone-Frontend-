import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    id: String,
    url: String,
    detailUrl : String,
    title:Object,
    price:Object,
    decsription:String,
    discount:String,
    tagline:String

})

const Product = mongoose.model("product",productSchema);

export default Product;
const mongoose=require('mongoose')

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String
  });
  
  const subcategorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    items: [itemSchema] 
  });
  
  const categorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    subcategories: [subcategorySchema] 
  });
  

  const datas =new mongoose.model('datas', categorySchema);
  module.exports=datas
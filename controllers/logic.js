const datas = require("../models/dataModel");

const getData=async(req,res)=>{
    try{
        const result=await datas.find()
        res.status(200).json(result)
    }
    catch{
        res.status(400).json("network error")
    }
    
}

module.exports={
    getData
}
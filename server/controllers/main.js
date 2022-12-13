const getAll = async (req,res,model) => {
    await model.find({})
    .then(items=>{
        items.length == 0 ? res.status(300).json({success:false, message:"no items found"}) :
        res.status(200).json({success:true,items})
    })
    .catch(err=>res.status(400).json({success:false,err}))
}
const getById = async (req,res,model) => {
    await model.findById(req.params.id)
    .then(result=>{
        res.status(200).json({success:true,result})
    })
    .catch(err=>res.status(400).json({success:true,err}))
}
const create = async (req,res,model,field) => {
    await model.insertMany(req.body.products)
    .then(()=>res.status(200).json({success:true, message:"products added successfully"}))
    .catch(err=>{res.status(400).json({success:false,err})})
}

module.exports = {
    getAll,
    getById,
    create
}
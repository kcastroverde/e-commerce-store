const categorie = require('../models/categorie');

const getCategoriesByStore = async (req, res) => {
    try{
        const categories = await categorie.find({storeId: req.params.storeId});
        res.json(categories);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getCategorieById = async (req, res) => {
    try{
        const categorie = await categorie.findById(req.params.id);
        res.json(categorie);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const updateCategorie = async (req, res) => {
    const storeId = req.params.storeId;
    try{
        if(storeId === req.user.storeId){
        const categorie = await categorie.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(categorie);
        }
        else{
            res.status(403).json({message: "Forbidden"});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const deleteCategorie = async (req, res) => {
    const storeId = req.params.storeId;
    try{
        if(storeId === req.user.storeId){
            await categorie.findByIdAndRemove(req.params.id);
            res.json({message: "Categorie deleted"});
        }else{
            res.status(401).json({message: "Unauthorized"});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getCategoriesByStore, updateCategorie, deleteCategorie, getCategorieById}

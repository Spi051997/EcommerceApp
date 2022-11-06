const express=require('express');
const router=express.Router();
const {ProductRegistration,GetProduct,updateproduct,DeleteProdcut,Getproductbyid,SerachProduct,tryserach}=require('../controller/ProductControler');

router.post('/registration',ProductRegistration);
router.get('/getproduct',GetProduct)
router.put('/updateprodcut/:id',updateproduct);
router.delete('/deleteproduct/:id',DeleteProdcut);
router.get('/getproductbyid/:id',Getproductbyid);
router.get('/searchProduct',SerachProduct);
router.get('/searchProductt',tryserach);

module.exports=router;
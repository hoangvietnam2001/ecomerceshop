import express from 'express';
import data from '../data.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import Slider from '../models/sliderModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();


seedRouter.get('/',async (req,res)=>{

    await Product.remove({});
    const createProducts = await Product.insertMany(data.products);
    
    await Category.remove({});
    const createCategory = await Category.insertMany(data.category);
    
    await Slider.remove({});
    const createSlider = await Slider.insertMany(data.sliderItems);

    await User.remove({});
    const createUser = await User.insertMany(data.users);

    res.send({createProducts, createCategory, createSlider, createUser});
});


export default seedRouter;
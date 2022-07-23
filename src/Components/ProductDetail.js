import React from 'react';
import axios from 'axios'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { selectedProducts } from '../Redux/Actions/ProductActions';
import {useSelector} from 'react-redux';
import '../Styles/productComponent.css';




function ProductDetail() {
    const {productId} =useParams();
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
const {price,title,category,description,image} = product



    
    const fetchProductDetail =async()=>
    {
        const response = await axios
        .get(`http://fakestoreapi.com/products/${productId}`)
        .catch((error)=>{
            console.log(error);
        })
dispatch(selectedProducts(response.data))
    }


useEffect(()=>
{
  if(productId && productId !=="") fetchProductDetail()




},[productId])  //depenedency ==> [productId]

   


  return (
    <div className='productDetail'>
  <div className='productimg'>
    <img src ={image} className='productDetailImg' alt={title} />
    
    
    </div> 

    <div className='productinfo'>
<h3 className='title'>{title}</h3>
<h4 className='price'>{price} $</h4>
<p className='description'>{description}</p>
<p>Category: {category}</p>
<button className='cart'>Add to Cart</button>



    </div>
  
    </div>
    
  )
}

export default ProductDetail;
import React from 'react'

import ProductComponent from './ProductComponent';
import axios from 'axios';
import {useEffect} from 'react';
import {setProducts} from '../Redux/Actions/ProductActions';
import {useDispatch} from 'react-redux'



function ProductListing() {

    const URL ='https://fakestoreapi.com/products';
    const dispatch=useDispatch();

useEffect(()=>
{
    const fetchProducts= async()=>
    {
       const response = await axios.get(URL).catch((error)=>console.log(error))
       dispatch(setProducts(response.data))


    }

    fetchProducts();
})





  return (
    <div>

        <ProductComponent /> 
        
       

    </div>
  )
}

export default ProductListing
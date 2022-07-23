import { render } from '@testing-library/react';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../Styles/productComponent.css';

function ProductComponent() {
    const products = useSelector(state=>state.allProducts.products)
    const renderList = products.map((product)=>
    {
        const {id,title,image,price,category} =product
        return (
           <Link to={`product/${id}`} className='link'>
            <div key ={id} className='card'>
               <img src = {image} className='cardImg' />

               <div className='productDetails'>
                <p className='cardTitle'>{title}</p>
                <p className='cardPrice'>{price}</p>
                <p className='cardCategory'>{category}</p>

</div>
<div>
    <button className='productBuyBtn'>Buy Now</button>
</div>
            </div>
           
           </Link>
        )
    })
  
return(
   <div className='productComponent'>
   {renderList }
   </div>
)

}

export default ProductComponent;
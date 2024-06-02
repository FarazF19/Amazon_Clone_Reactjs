import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { callAPI } from '../utils/CallApi'
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../utils/constants';

const ProductPage = () => {
  const {id} = useParams(); 
  const dispatch = useDispatch()
  const [product, setproduct] = useState(null);
  const [quantity,setQuantity] = useState("1");

  const getProduct = () => {
         callAPI(`data/products.json`)
         .then((productResults)=>{
            setproduct(productResults[id]);
         }); 

   }
const addQuantityToProduct = () => { 
  setQuantity(product.quantity=quantity);
  return product;
 }

  useEffect(()=>{
       getProduct();
  })

  if(!product?.title) return <h1>Loading Product...</h1>

  return (product &&
    <div className='h-screen bg-amazonClone-background'>
       <div className='min-w-[1000px] max-w-[1500px]  m-auto p-4'>

        <div className='grid grid-cols-10 gap-2'>
            {/*Left*/}
            <div className='col-span-3 bg-white rounded p-8 m-auto'>
                <img src={`${product.image}`} alt="img" />
            </div>

             {/*Middle*/}
            <div className='col-span-5 bg-white rounded p-4 divide-y divide-gray-600'>
                <div className='mb-3'>
                <ProductDetails product={product} ratings={true}/>
                </div>
                <div className='text-base xl:text-lg mt-3'>
                  {product.description}
                </div>
                
            </div>

             {/*RIght*/}
            <div className='col-span-2 p-4 rounded bg-white'>
              <div className='text-xl xl:text-2xl font-semibold text-red-700 text-right'> {GB_CURRENCY.format(product.price)}</div>
              <div className='text-base xl:text-lg font-semibold text-gray-500 text-right'><span className='line-through'>RRP: {GB_CURRENCY.format(product.oldPrice)}</span> </div>
              <div className='text-sm xl:text-base font-semibold  text-blue-500 mt-3'>FREE Returns</div>
              <div className='text-sm xl:text-base font-semibold  text-blue-500 mt-1'> FREE Delivery</div>
              <div className='text-base xl:text-lg font-semibold text-green-700  '> In Stock</div>
              <div className='text-base xl:text-lg mt-1 '>Quantity: 
                <select onChange={(e)=>setQuantity(e.target.value)} className=' ml-2 p-2 bg-white border rounded-md focus:border-indigo-500'>
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
              <button onClick={()=>dispatch(addToCart(addQuantityToProduct()))} className='btn'>Add to Cart</button>   
              </Link>
    
            </div>

        </div>

       </div>
    </div>
  )
}

export default ProductPage
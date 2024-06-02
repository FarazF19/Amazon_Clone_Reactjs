import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Search from './Search';

export const NavBar = () => {
  const cart = useSelector((state)=>state.cart.productNumber)
  return (
    <header className='min-w-[1000px] '>
    <div className='flex text-white bg-amazonClone h-[60px] '>
        <div className='flex items-center m-4'>
          <Link to={"/"}>
          <img className='h-[35px] w-[100px] m-2' src="../images/amazon.png" alt="" />
          </Link>
         
           <div className='pr-4 pl-4 '>
             <div className='text-xs xl:text-sm'>Deliver to</div>
             <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
           </div>
        </div >
        <div className='flex grow items-center '>
             <Search/>
        </div>
        <div className='flex items-center'>
          <div className='pr-4 pl-4 '>
             <div className='text-xs xl:text-sm'>Hello, Sign in</div>
             <div className='text-sm xl:text-base font-bold'>Accounts and Lists</div>
          </div>
          <div className='pr-4 pl-4 '>
             <div className='text-xs xl:text-sm'>Returns</div>
             <div className='text-sm xl:text-base font-bold'>& Orders</div>
           </div>
        </div>
        <Link to={"/checkout"}>
        <div className='flex pr-3 pl-3 m-4'>
            <ShoppingCartIcon className='h-[40px]'/>
            <div className='relative'>
              <div className='absolute right-[8px] font-bold m-1 text-orange-400'>
                 {cart}
              </div>

            </div>
            <div className='mt-7 text-xs xl:text-sm font-bold '>
              Cart
            </div>
        </div>
        </Link>

    </div>
    <div className='flex gap-10 bg-amazonClone-light_blue text-white p-3 pl-6 space-x-3 text-xs xl:text-sm'>
      <div>Today's Deals</div>
      <div>Customer Service</div>
      <div>Registry</div>
      <div>Gift Card</div>
      <div>Sell</div>
    </div>
    </header>
  )
}

export default NavBar;

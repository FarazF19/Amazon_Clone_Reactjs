import React from 'react'
import Carousel from './Carousel'
import HomepageCard from './HomepageCard'
import CarousalCategories  from './CarousalCategories'
import CarousalProduct from './CarousalProduct'

const Homepage = () => {
  return (
    <div className='bg-amazonClone-background'> 
    <div className='min-w-[1000px] max-w-[1500px] m-auto'>
      
      <Carousel />
      <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80 '>
        <HomepageCard 
        title="We have a gift for you" 
        img={'../images/home_grid_1.jpg'} 
        link={"See terms and condition"} 
        />
        <HomepageCard 
        title="Watch the Rings of Power" 
        img={'../images/home_grid_2.jpg'} 
        link={"Start streaming now "} 
        />
        <HomepageCard 
        title="Unlimited Streaming " 
        img={'../images/home_grid_3.jpg'} 
        link={"Find out more"} 
        />
        <HomepageCard 
        title="More titles to Explore"  
        img={'../images/home_grid_4.jpg'} 
        link={"Browse Kindle Unlimited"} 
        />
         <HomepageCard 
        title="Shop Pet Suppliers" 
        img={'../images/home_grid_5.jpg'} 
        link={"See more"} 
        />
        <HomepageCard 
        title="Spring Sale" 
        img={'../images/home_grid_6.jpg'} 
        link={"Sea the deals "} 
        />
        <HomepageCard 
        title="Echo Buds" 
        img={'../images/home_grid_7.jpg'} 
        link={"See more"} 
        />
        <HomepageCard 
        title="Family Plan: 3 months free"  
        img={'../images/home_grid_8.jpg'} 
        link={"Learn more"} 
        />
        <div >
          <img className='xl:hidden' src="../images/banner_image_2.jpg" alt="" />
        </div>
      </div>
      <CarousalProduct/>
      <CarousalCategories/>
      <div className='h-[200px]'>
        <img  className='h-[100%] m-auto' src="../images/banner_image.jpg" alt="banner" />
      </div>
    </div>
    
    </div>
  )
}

export default Homepage
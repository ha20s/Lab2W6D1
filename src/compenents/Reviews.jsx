import React from 'react'
import LastesCards from './LastesCards'
import BestCards from './BestCards'

function Reviews() {
  return (
    <div className='bg-white'> 
    <div className='lg:mx-40 md:mx-10 mx-5 py-10'>
       

    
        
        <div className='flex lg:flex-row flex-col text-center  items-center justify-between my-10'>
            <p className='lg:text-6xl text-4xl font-bold'>Lastest Reviews</p>

            <button className='white-btn'> View All</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

            <LastesCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg" title="Grilled Flank Steak with Chimichurri" des="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."></LastesCards>
            <LastesCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg" title="Mushroom Penne with Walnut Pesto" des="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus"></LastesCards>
            <LastesCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg" title="Garlic Butter White Wine Shrimp Linguine" des="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."></LastesCards>


</div>
</div> 


<div className='bg-[#F2EFEE]'>

    

    <div className='lg:mx-40 md:mx-10 mx-5 py-10'>
   
    <div className='text-center'>
    <p className='lg:text-6xl  text-4xl my-5'>Best in Class Restaurant</p>
    <p className='lg:mx-8 lg:text-2xl text-gray'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
    </div>

 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg" title="Eewak Korean Restaurant" des="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui." ></BestCards>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg" title="Bern's Steak House" des="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."></BestCards>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg" title="The Ramban Vegan House" des="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."></BestCards>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg" title="Maniest Bake & Cake" des="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."></BestCards>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg" title="Crush Los Angeles" des="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."></BestCards>
    <BestCards img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg" title="The Mike Winery" des="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."></BestCards>
    </div>

    <div >


    <div className='bg-white border border-[0.5rem] my-16'>

        <div className='grid lg:grid-cols-2 grid-cols-1 items-center p-5'>
        <img className='-mt-14' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg" alt="" />

        <div className='mx-5'>
            <p className='lg:text-5xl text-4xl font-bold my-8 '>Join Mailing List</p>
            <p className='text-xl'>Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>

<div className='flex flex-col justify-around lg:flex-row my-5'>
  <input type="text" placeholder='Enter your email' className='border border-2 px-4 py-2 mb-4 lg:mb-0 mr-4 w-full' />
  <button className='white-btn'>Subscribe</button>
</div>   
        </div>
        </div>
    </div>

    </div>

    </div>
</div>

    </div>
  )
}

export default Reviews

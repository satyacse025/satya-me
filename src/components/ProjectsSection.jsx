import React from 'react'
import carImg from '../assets/cars.jpg';
import dreamImg from '../assets/dream-shop.jpg';
import bookImg from '../assets/book-shop.png';

export default function ProjectsSection() {
    return (
        <div id='projects' className=' pt-2'>
            <div className="divider divider-success">Projects</div>
            <div className="grid lg:grid-cols-3 gap-4 ">
                <div className="items-center justify-center card glass">
                    <figure>
                        <img src={carImg} alt="" className='' />
                    </figure>
                    <p className='text-lg text-center'>Car Bazar</p>
                    <p className='text-base text-center'>A Car buy-sell full functionality website</p>
                    <p className='text-base text-center'>React, Node.js, Express, Mongo DB</p>
                    <p className='text-base text-center'><span className='font-semibold'>Live Link : </span> 
                    <a href="https://product-buy-sell-shop-ui.onrender.com/" target="_blank" className='text-[#1877f2]'>View Site</a> </p><br />

                </div>
                <div className="items-center justify-center card glass">
                    <figure>
                        <img src={dreamImg} alt="" className='' />
                    </figure>
                    <p className='text-lg text-center'>Dream Shop</p>
                    <p className='text-base text-center'>A Sharee buy-sell full functionality website</p>
                    <p className='text-base text-center'>React, Node.js, Express, Mongo DB</p>
                    <p className='text-base text-center'><span className='font-semibold'>Live Link : </span> 
                    <a href="https://dream-shop-7288b.web.app/" target="_blank" className='text-[#1877f2]'>View Site</a> </p><br />

                </div>
                <div className="items-center justify-center card glass">
                    <figure>
                        <img src={bookImg} alt="" className='' />
                    </figure>
                    <p className='text-lg text-center'>Book Haven</p>
                    <p className='text-base text-center'>A book buy-sell full functionality website</p>
                    <p className='text-base text-center'>React, Node.js, Express, Mongo DB</p>
                    <p className='text-base text-center'><span className='font-semibold'>Live Link : </span> 
                    <a href="https://66f3a52da70a27cb6009882d--chimerical-pithivier-ce1ce5.netlify.app/" target="_blank" className='text-[#1877f2]'>View Site</a> </p><br />

                </div>
            </div>
        </div>
    )
}

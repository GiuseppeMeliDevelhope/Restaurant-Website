import React from 'react';
import basil from '../assets/basil.png';
import { Fade, Zoom } from 'react-awesome-reveal';
import quote from '../assets/quote.png';
import badge from '../assets/badge.png';
import star from '../assets/star.png';

function Reviews() {
  return (
    <div name='reviews' className='relative w-full py-48 px-4 tab:px-12 md:px-8 bg-[#202020d1]'>
       <img src={basil} alt='/' className='absolute -top-[20%] -left-[50%] opacity-[0.2] w-full drop-shadow-2xl' />
       <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px] md:gap-[30px] text-center'>
            <Fade left>
                <div className='p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]'>
                    <img src={quote} alt='/' className='h-[30px] w-[30px] absolute top-[20px] left-[20px]' />
                    <div className='flex items-center gap-[20px] justify-center'>
                        <p className='text-4xl font-bold text-yellow-500 '>Martina Gallo</p>
                        <img src={badge} alt='/' className='h-[30px] w-[30px]' />
                    </div>
                    <p className='text-[#a3b690] pt-6'>Eccelente, panini buonissimi con carne di qualità. Prezzi ottimi.</p>
                 <div className='flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]'>
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                 </div>
                </div>
            </Fade>
            <Zoom>
            <div className='p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]'>
                    <img src={quote} alt='/' className='h-[30px] w-[30px] absolute top-[20px] left-[20px]' />
                    
                        <p className='text-4xl font-bold text-yellow-500 '>Rosario Triglia</p>
                   
                    <p className='text-[#a3b690] pt-6'>La miglior pizza che ho mangiato a Palma di Montechiaro.</p>
                 <div className='flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]'>
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                 </div>
                </div>
            </Zoom>
            <Fade right>
            <div className='p-8 rounded-xl drop-shadow-2xl border border-[#ffffff2e] bg-[#212122] relative min-w-[270px]'>
                    <img src={quote} alt='/' className='h-[30px] w-[30px] absolute top-[20px] left-[20px]' />  
                    <div className='flex items-center gap-[20px] justify-center'>
                        <p className='text-4xl font-bold text-yellow-500 '>Celeste Inguanta</p>
                        <img src={badge} alt='/' className='h-[30px] w-[30px]' />
                    </div>
                    <p className='text-[#a3b690] pt-6'>Pizza e panini buonissimi! Assolutamente consigliati 🤗 Inoltre i proprietari sono infinitamente gentili. Ottimi anche i panini e le pizze stagionali, fatti con condimenti di stagione come il panino o la pizza alla zucca. Consiglio davvero!  </p>
                 <div className='flex gap-[15px] w-[50%] mx-auto justify-around pt-[20px]'>
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                    <img src={star} alt='/' className='h-[30px] w-[30px] sepia' />
                 </div>
                </div>
            </Fade>

        </div>

       </div>
    </div>
  )
}

export default Reviews;
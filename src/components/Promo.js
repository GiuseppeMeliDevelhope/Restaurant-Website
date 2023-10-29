import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import promoImg from '../assets/promo.png';
import onion from '../assets/onion.png';
import tomato from '../assets/tomato.png';

function Promo() {
  return (
    <div name='promo' className='grid grid-cols-6 lg:grid-cols-14 gap-[50px] relative bg-[#212122] px-8 md:px-[0.5rem] lg:pt-[50px] 2xl:pt-[50px] pb-[120px] -mt-[1px] z-20 '>
        <div className='col-span-full md:col-start-2 md:col-end-8 mx-auto flex'>
            <div className='flex flex-col gap-[50px] justify-center text-center md:text-left'>
                <div className='flex flex-col gap-[10px]'>
                    <Fade left>
                      <h1 className='text-[20px] font-semibold text-yellow-500'>Panini Gustosi</h1>
                      <h1 className='text-[50px] md:text-[60px] font-semibold text-yellow-500'>Cucina Autentica</h1>
                    </Fade>
                </div>
                <Fade delay={1000}>
                    <p className='text-[#a3b690]'>"Dalle squisite pizze, passando per le deliziose piadine, fino alle prelibatezze degli hamburger, offriamo una vasta selezione di specialità culinarie, con l'obiettivo di soddisfare ogni palato. La qualità e la soddisfazione dei nostri clienti sono sempre al centro delle nostre attenzioni. La passione per la buona cucina è il nostro ingrediente segreto, e la qualità dei nostri prodotti è il nostro punto di forza."</p>
                </Fade>

            </div>

        </div>
        <div className='relative col-span-full mx-auto md:col-start-9 md:col-end-15'>
            <Zoom delay={1000}>
                <img className='lg:relative lg:-top-[90px] md:h-[350px] md:w-[420px] lg:h-[400px] lg:w-[470px] lg:translate-y-[100px] object-cover -rotate-[10deg] drop-shadow-2xl ' src={promoImg} alt='/'/>
            </Zoom>
            <img src={onion} alt='/' className='absolute -top-[80%] md:-top-[30%] -right-[35%] md:-right-[30%] drop-shadow-2xl brightness-50 scale-[0.25] opacity-[0.8] -z-10' />
            <img src={tomato} alt='/' className='absolute top-[10%] md:top-[40%] right-[40%] md:right-[50%] drop-shadow-2xl brightness-50 scale-[0.25] opacity-[0.8] -z-10' />
        </div>
    </div>
  )
}

export default Promo;
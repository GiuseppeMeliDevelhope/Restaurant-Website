import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import special1 from '../assets/pizza.png';
import special2 from '../assets/burger.jpeg';
import special3 from '../assets/piadina.jpeg';


function Menu() {
  return (
    <div name='menu' className='w-full pt-24 bg-[#212122] pb-[100px] px-8 md:px-16'>
        <div className='max-w-[1240px] mx-auto relative'>
            <div className='px-4 py-6'>
                <h3 className='text-7xl font-semibold text-center text-yellow-500'>
                Le nostre nuove specialità
                </h3>
            </div>
            <div className='grid grid-cols-1 tab:grid-cols-3 relative gap-x-12 tab:gap-x-4 lg:gap-x-12 gap-y-16 px-4 md:px-1 lg:px-4 pt-12 sm:pt-20'>
                <Fade left>
                    <div className='bg-[#353630] shadow-2xl rounded-[10px]'>
                        <div className='flex flex-col h-full'>
                            <div className='relative h-[60%]'>
                                <img src={special1} alt='/' className='h-full w-full object-cover brightness-75' />
                            </div>
                            <div className='p-4 md:p-8'>
                                <h3 className='font-bold text-center text-2xl mb-6 text-yellow-500'>
                                     Pizza Gourmet
                                </h3>
                                <p className='text-[#a3b690] lg:text-xl w-full tab:w-[70%] md:w-full'>Ingredienti: Mortadella, fior di latte, crema di parmigiano 24 mesi stagionato, crocchette di patate, impasto con biga, 48h lievitazione.</p>

                            </div>

                        </div>

                    </div>
                </Fade>
                <Zoom>
                <div className='bg-[#353630] shadow-2xl rounded-[10px]'>
                        <div className='flex flex-col h-full'>
                            <div className='relative h-[60%]'>
                                <img src={special2} alt='/' className='h-full w-full object-cover brightness-75' />
                            </div>
                            <div className='p-4 md:p-8'>
                                <h3 className='font-bold text-center text-2xl mb-6 text-yellow-500'>
                                     Hamburger Wagyu
                                </h3>
                                <p className='text-[#a3b690] lg:text-xl w-full tab:w-[70%] md:w-full'>"L'Hamburger di Wagyu". Considerata una delle carni più apprezzate al mondo con l'aggiunta del foglio oro (24k) commestibile. Provate ora questo spettacolo con le nostre Pan Brioche fatte rigorosamente da noi, 200g di Wagyu Beef, cheddar, cipolla rossa di tropea, pomodoro, insalata, bacon croccante e la nostra homemade "killer sauce".   </p>

                            </div>

                        </div>

                    </div>
                </Zoom>
                <Fade right>
                <div className='bg-[#353630] shadow-2xl rounded-[10px]'>
                        <div className='flex flex-col h-full'>
                            <div className='relative h-[60%]'>
                                <img src={special3} alt='/' className='h-full w-full object-cover brightness-75' />
                            </div>
                            <div className='p-4 md:p-8'>
                                <h3 className='font-bold text-center text-2xl mb-6 text-yellow-500'>
                                    Piadina Artigianale
                                </h3>
                                <p className='text-[#a3b690] lg:text-xl w-full tab:w-[70%] md:w-full'>Provate ora questa bomba con 150g Hamburger di Chianina, cheddar, bacon, rucola, prosciutto crudo, scaglie e patatine.</p>

                            </div>

                        </div>

                    </div>
                </Fade>

            </div>

        </div>

    </div>
  )
}

export default Menu;
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';


function Footer() {
  return (
    <div name='footer' className='w-full'>
      <div className='flex flex-col gap-[20px] w-full py-4 justify-between text-center bg-[#212122] px-50 -mt-[1px]'>
        <h1 className='text-gray-300 text-[30px]'>Ciao,</h1>
        <p className='text-gray-500 max-w-[700px] mx-auto my-[10px] px-4'>
        "Da noi, ogni pasto è un'esperienza straordinaria, realizzata con passione e dedizione. Siamo orgogliosi di offrirvi le nostre prelibatezze culinarie, realizzate rigorosamente in casa e con ingredienti di alta qualità. La vostra soddisfazione è la nostra priorità, e ci impegniamo a rendere ogni visita memorabile. Che siate appassionati del nostro famoso hamburger, amanti delle nostre pizze gourmet o fan delle irresistibili piadine artigianali, vi garantiamo una tavola imbandita di felicità. Venite da noi e vivrete un'esperienza culinaria indimenticabile in un ambiente accogliente e caloroso. Vi aspettiamo con il sorriso, pronti a deliziarvi con i sapori unici della nostra cucina."
        </p>
        <h2 className='text-gray-300 text-[30px]'>Find us on:</h2>
        <div className='flex justify-between m-auto w-full sm:w-[300px] pt-4 text-2xl text-gray-300 pb-[50px]'>
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 text-gray-300 bg-[#353630] px-[50px]'>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul className='text-gray-500'>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul className='text-gray-500'>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul className='text-gray-500'>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul className='text-gray-500'>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2 '>
          <p className='font-bold uppercase '>Pizzicotti</p>
          <p className='py-4 text-gray-500'>
            © 2023 Pizzicotti. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Footer;
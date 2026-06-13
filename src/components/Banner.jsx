import React from 'react'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';

const Banner = () => {
    const { navigate } = useAppContext()
    const handleListCar = () => {
        navigate('/owner/add-car')
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-dark-ocean to-[#a9cfff] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'
        >    
            <div className='text-white'>
                <h2 className='text-3xl font-medium'>Do you own a Car?</h2>
                <p className='mt-2'>You can collaborate and monetize your vehicles effortlessly by listing it on HanRent</p>
                <p className='max-w-130'>We take care of secure payments, insurance, and drive verification so you can easily get passive income.</p>

                <motion.button 
                    onClick={handleListCar}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-6 py-2 bg-white hover:bg-dark-ocean border border-dark-ocean/10 hover:text-white hover:border-white transition-all text-dark-ocean rounded-lg text-sm mt-4 cursor-pointer'>
                    List your car
                </motion.button>
            </div>
            <motion.img 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                src={assets.banner_car_image} 
                alt="banner car" 
                className='max-h-45 mt-10' 
            />
        </motion.div>
    )
}

export default Banner;
import React from 'react'
import Title from './Title';
import { assets, dummyCarData } from '../assets/assets';
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';

const FeaturedSection = () => {
    const navigate = useNavigate()
    const { cars } = useAppContext();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut"}}
            className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}   
            >
                <Title title="Featured Vehicles" subTitle="Explore our selection of premium vehicles available for your next adventure." />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'
            >
                {cars.slice(0,10).map((car) => (
                    <motion.div key={car._id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    >
                        <CarCard car={car} />
                    </motion.div>
                ))
                }
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                onClick={() => {
                    navigate('/cars'); scrollTo(0,0)
                }} 
                className='relative overflow-hidden flex items-center justify-center gap-2 px-6 py-2 border border-dark-ocean bg-white text-dark-ocean rounded-md mt-18 cursor-pointer group transition-all duration-300'
            >
                <span className='absolute inset-0 w-0 bg-dark-ocean transition-all duration-500 ease-out group-hover:w-full'></span>
                
                <span className='relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white group-hover:gap-3'>
                    Explore all cars
                    <img 
                        src={assets.arrow_icon} 
                        alt="arrow" 
                        className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                </span>
            </motion.button>
        </motion.div>
    )
}

export default FeaturedSection;
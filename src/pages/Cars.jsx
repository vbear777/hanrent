
import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import { assets, dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard';
import { useAppContext } from '../context/AppContext';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cars = () => {
    const [input, setInput] = useState("")

    // getting search params
    const [searchParams] = useSearchParams()
    const pickupLocation = searchParams.get('pickupLocation')
    const pickupDate = searchParams.get('pickupDate')
    const returnDate = searchParams.get('returnDate')

    const {cars, axios} = useAppContext();
    const isSearchData = pickupLocation && pickupDate && returnDate
    const [filteredCars, setFilteredCars] = useState([])
    
    const searchCarAvailability = async () => {
        try {
            const { data } = await axios.post('/api/bookings/check-availability', {
                location: pickupLocation,
                pickupDate,
                returnDate
            })
            if (data.success) {
                setFilteredCars(data.availableCars)
                if (data.availableCars.length === 0) {
                    toast('No cars available for selected dates')
                }
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (isSearchData) {
            searchCarAvailability()
        } else {
            setFilteredCars(cars.filter(car => car.isAvailable))
        }
    }, [isSearchData, cars])  

    const displayedCars = filteredCars.filter(car => {
        if (!car || !car.brand || !car.model) return false
        const searchTerm = (input || "").toLowerCase()
        return car.brand.toLowerCase().includes(searchTerm) ||
               car.model.toLowerCase().includes(searchTerm)
    }) 

    return (
        <div>
            <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
                <Title title='Available Cars' subTitle='Browse our selection of available premium vehicles for your travel and adventure'/>

                <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
                    <img src={assets.search_icon} alt="search icon" className='w-4 h-4.5 mr-2'/>

                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        value={input} 
                        type="text" 
                        placeholder='Search by make, model, or features' 
                        className='w-full h-full outline-none text-gray-500'
                    />
                    <img src={assets.filter_icon} alt="search icon" className='w-4 h-4.5 mr-2'/>
                </div>
            </div>

            <div className='px-6 md:px-6 lg:px-24 xl:px-32 mt-10'>
                <p className='text-cream/70 xl:px-20 max-w-7xl mx-auto'>Showing {displayedCars.length} Cars</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto mb-14'>
                    {displayedCars.map((car, index) => (
                        <div key={index}>
                            <CarCard car={car} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cars;

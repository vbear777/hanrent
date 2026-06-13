import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {
    const { axios, user, currency } = useAppContext()
    const [loading, setLoading] = useState(true)
    const [bookings, setBookings] = useState([])

    const fetchMyBookings = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/api/bookings/user')
            if (data.success) {
                setBookings(data.bookings)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user) fetchMyBookings()
        else setLoading(false)
    }, [user])

    if (loading) {
        return (
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mb-10'>
                <Title title="My Bookings" subTitle="View and manage your all car bookings" align="left" />
                {[1, 2, 3].map(i => (
                    <div key={i} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12 animate-pulse'>
                        <div className='md:col-span-1'>
                            <div className='rounded-md overflow-hidden mb-3 bg-gray-200 h-32 w-full'></div>
                            <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
                            <div className='h-3 bg-gray-200 rounded w-1/2'></div>
                        </div>
                        <div className='md:col-span-2'>
                            <div className='h-4 bg-gray-200 rounded w-1/3 mb-3'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2 mb-2'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                        </div>
                        <div className='md:col-span-1'>
                            <div className='h-6 bg-gray-200 rounded w-1/3 ml-auto mb-2'></div>
                            <div className='h-8 bg-gray-200 rounded w-1/2 ml-auto'></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (bookings.length === 0) {
        return (
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16 text-center'>
                <p className='text-gray-500'>You have no bookings yet.</p>
            </div>
        )
    }

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mb-10'>
            <Title title="My Bookings" subTitle='View and manage your all car bookings' align="left" />
            <div>
                {bookings.map((booking, index) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'>
                        <div className='md:col-span-1'>
                            <div className='rounded-md overflow-hidden mb-3 bg-gray-100'>
                                <img 
                                    src={booking.car.image} 
                                    alt="car" 
                                    className='w-full h-auto aspect-video object-cover'
                                    style={{ outline: 'none' }}
                                />
                            </div>
                            <p>{booking.car.brand} {booking.car.model}</p>
                            <p>{booking.car.year} • {booking.car.category} • {booking.car.location}</p>
                        </div>

                        <div className='md:col-span-2'>
                            <div className='flex items-center gap-2'>
                                <p className='px-3 py-1.5 bg-light rounded'>Booking #{index+1}</p>
                                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === 'confirmed' ? 'bg-green-400/15 text-green-600' : 'bg-gray-400/15 text-gray-600'}`}>{booking.status}</p>
                            </div>
                            <div className='flex items-start gap-2 mt-3'>
                                <img src={assets.calendar_icon_colored} alt="" className='w-4 h-4 mt-1' />
                                <div>
                                    <p className='text-gray-500'>Rental Period</p>
                                    <p className='text-dark-ocean font-bold'>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-2 mt-3'>
                                <img src={assets.location_icon_colored} alt="" className='w-4 h-4 mt-1' />
                                <div>
                                    <p className='text-gray-500'>Pick-up Location</p>
                                    <p className='text-dark-ocean font-bold'>{booking.car.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className='md:col-span-1 flex flex-col justify-between gap-6'>
                            <div className='text-sm text-gray-500 text-right'>
                                <p>Total Price</p>
                                <h1 className='text-2xl font-semibold text-cream'>{currency}{booking.price}</h1>
                                <p>Booked on {booking.createdAt.split('T')[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings;
{/*
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {

    const { axios, user, currency } = useAppContext()
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);

    const fetchMyBookings = async () => {
        try {
            const { data } = await axios.get('/api/bookings/user')
            if (data.success){
                setBookings(data.bookings)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (user) fetchMyBookings()
    }, [user])

    if (loading) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mb-10'>
            <Title title="My Bookings" subTitle='View and manage your all car bookings' align="left" />

            <div>
                {bookings.map((booking, index) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'>
                        <div className='md:col-span-1'>
                            <div className='rounded-md overflow-hidden mb-3'>
                                <img src={booking.car.image} alt="" className='w-full h-auto aspect-video object-cover' />
                            </div>
                            <p>{booking.car.brand} {booking.car.model}</p>

                            <p>{booking.car.year} • {booking.car.category} • {booking.car.location}</p>
                        </div>

                        <div className='md:col-span-2'>
                            <div className='flex items-center gap-2'>
                                <p className='px-3 py-1.5 bg-light rounded'>Booking #{index+1}</p>
                                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === 'confirmed' ? 'bg-green-400/15 text-green-600' : 'bg-gray-400/15 text-gray-600'}`}>{booking.status}</p>
                            </div>

                            <div className='flex items-start gap-2 mt-3'>
                                <img src={assets.calendar_icon_colored} alt="" className='w-4 h-4 mt-1'/>
                                <div>
                                    <p className='text-gray-500'>Rental Period</p>
                                    <p className='text-dark-ocean font-bold'>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-2 mt-3'>
                                <img src={assets.location_icon_colored} alt="" className='w-4 h-4 mt-1'/>
                                <div>
                                    <p className='text-gray-500'>Pick-up Location</p>
                                    <p className='text-dark-ocean font-bold'>{booking.car.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className='md:col-span-1 flex flex-col justify-between gap-6'>
                            <div className='text-sm text-gray-500 text-right'>
                                <p>Total Price</p>
                                <h1 className='text-2xl font-semibold text-cream'>{currency}{booking.price}</h1>
                                <p>Booked on {booking.createdAt.split('T')[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings;

*/}
import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {
    const { axios, currency } = useAppContext();

    const [image, setImage] = useState(null)
    const [car, setCar] = useState({
        brand: '',
        model: '',
        year: 0,
        pricePerDay: 0,
        category: '',
        transmission: '',
        fuel_type: '',
        seating_capacity: 0,
        location: '',
        description: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (isLoading) return null

        setIsLoading(true)
        try {
            const formData = new FormData()
            formData.append('image', image)
            formData.append('carData', JSON.stringify(car))

            const { data } = await axios.post('/api/owner/add-car', formData)

            if (data.success){
                toast.success(data.message)
                setImage(null)
                setCar({
                    brand: '',
                    model: '',
                    year: 0,
                    pricePerDay: 0,
                    category: '',
                    transmission: '',
                    fuel_type: '',
                    seating_capacity: 0,
                    location: '',
                    description: ''
                })
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='px-4 py-10 md:px-10 flex-1'>
            <Title title="Tambah Mobil Baru" subTitle="Isi detail untuk mendaftarkan mobil baru, termasuk harga, ketersediaan, dan spesifikasi kendaraan" />
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

                <div className='flex items-center gap-2 w-full'>
                    <label htmlFor="car-image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="upload image" className='h-14 rounded cursor-pointer' />
                        <input type="file" id="car-image" accept="image/*" hidden onChange={e => setImage(e.target.files[0])}/>
                    </label>
                    <p className='text-sm text-gray-500'>Unggah foto mobil Anda</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Merek</label>
                        <input type="text" placeholder='mis. Toyota, Honda, BMW...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e => setCar({...car, brand: e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Model</label>
                        <input type="text" placeholder='mis. Avanza, Brio, X5...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e => setCar({...car, model: e.target.value})}/>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Tahun</label>
                        <input type="number" placeholder='2026' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e => setCar({...car, year: e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Harga Harian ({currency})</label>
                        <input type="number" placeholder='100' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e => setCar({...car, pricePerDay: e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Kategori</label>
                        <select onChange={e => setCar({...car, category: e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Pilih kategori</option>
                            <option value="sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label>Transmisi</label>
                        <select onChange={e => setCar({...car, transmission: e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Pilih transmisi</option>
                            <option value="Automatic">Otomatis</option>
                            <option value="Manual">Manual</option>
                            <option value="Semi-Automatic">Semi-Otomatis</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Jenis BBM</label>
                        <select onChange={e => setCar({...car, fuel_type: e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Pilih jenis BBM</option>
                            <option value="Gas">Gas</option>
                            <option value="Solar">Solar</option>
                            <option value="Bensin">Bensin</option>
                            <option value="Listrik">Listrik</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Kapasitas Kursi</label>
                        <input type="number" placeholder='4' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e => setCar({...car, seating_capacity: e.target.value})}/>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <label>Lokasi</label>
                    <select onChange={e => setCar({...car, location: e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                        <option value="">Pilih lokasi</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Tasikmalaya">Tasikmalaya</option>
                        <option value="Garut">Garut</option>
                        <option value="Jakarta">Jakarta</option>
                    </select>
                </div>

                <div className='flex flex-col w-full'>
                    <label>Deskripsi</label>
                    <textarea rows={5} placeholder='mis. SUV modern dengan interior luas dan mesin bertenaga' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e => setCar({...car, description: e.target.value})}></textarea>
                </div>

                <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-dark-ocean text-white rounded-md font-medium w-max cursor-pointer'>
                    <img src={assets.tick_icon} alt="" />
                    {isLoading ? 'Mendaftarkan...' : 'Daftarkan Mobil'}
                </button>
            </form>
        </div>
    )
}

export default AddCar;
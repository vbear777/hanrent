import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 text-sm text-gray-500 bg-dark-ocean'>
            <div className='flex flex-wrap justify-between gap-8 pb-6 border-borderColor'>
                {/* Bagian kiri: Logo dan deskripsi */}
                <div className='max-w-80'>
                    <img src={assets.logo2} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3 text-white'>
                        Premium car rental service with wide selection.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.instagram_logo} alt="instagram logo" className='w-5 h-5'/></a>
                        <a href="#"><img src={assets.facebook_logo} alt="facebook logo" className='w-5 h-5'/></a>
                        <a href="#"><img src={assets.gmail_logo} alt="gmail logo" className='w-5 h-5'/></a>
                    </div>
                </div>

                {/* Bagian kanan: COMPANY dan SUPPORT (flex row agar berdekatan) */}
                <div className='flex flex-wrap gap-8 md:gap-12 lg:gap-16'>
                    <div>
                        <h2 className='text-base text-white font-semibold'>Quick Links</h2>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Browse Cars</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">List Your Car</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base text-white font-semibold'>Resources</h2>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base text-white font-semibold'>Contact</h2>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li>4398573</li>
                            <li>Bandung</li>
                            <li>+62 8932 3259 3824</li>
                            <li>hanifwalian@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-white'>
                <p>© {new Date().getFullYear()} <a href="/" className="hover:text-gray-700 transition-colors">HanRent</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#" className="hover:text-gray-700 transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-gray-700 transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-gray-700 transition-colors">Cookies</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
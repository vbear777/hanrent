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
                        <p className='text-lg text-white font-semibold'>COMPANY</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg text-white font-semibold'>SUPPORT</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Safety Information</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Cancellation Options</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-700 transition-colors">Accessibility</a></li>
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
                    <li><a href="#" className="hover:text-gray-700 transition-colors">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
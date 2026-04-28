import React from 'react'

const Newsletter = () => {
    return (
        <div class="w-full bg-dark-ocean px-2 text-center text-white py-20 flex flex-col items-center justify-center">
            <p class="text-cream font-medium">Get updated</p>
            <h1 class="max-w-lg font-semibold text-4xl/[44px] mt-2">Subscribe to get the latest offer & discount</h1>
            <div class="flex items-center justify-center mt-10 border border-slate-600 focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-md w-full">
                <input type="text" class="bg-transparent outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address"/>
                <button 
                    type='submit' 
                    className="relative overflow-hidden bg-white text-dark-ocean rounded-full h-11 mr-1 px-8 flex items-center justify-center cursor-pointer group transition-all duration-300 border border-white"
                    >
                    <span className="absolute inset-0 w-0 bg-dark-ocean transition-all duration-500 ease-out group-hover:w-full"></span>
                    <span className="relative z-10 flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                        Subscribe now
                        <svg 
                        className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                    </button>
            </div>
        </div>
    )
}

export default Newsletter;
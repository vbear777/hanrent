import React from 'react';
import Title from './Title';

const Testimonial = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            text: "Fantastic experience with HanRent! The booking process was smooth, the car was clean and in perfect condition, and the staff was super friendly. I'll definitely rent from them again on my next trip!"
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            text: 'HanRent made my business trip so much easier. The pickup and drop-off were hassle-free, and the prices are very reasonable. Their customer service responded quickly when I had a question. Highly recommended!'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Oblivion',
            handle: '@oblivionnam_',
            text: "Best rental car service I've ever used! The car was ready on time, fuel-efficient, and very comfortable. HanRent truly cares about their customers. 10/10 service."
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Lewis Graham',
            handle: '@lewisgg2',
            text: "I've rented from several companies before, but HanRent is by far the best. Transparent pricing, no hidden fees, and the vehicle was spotless. The team even gave me great local tips for my road trip. Love them."
        },
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
            name: 'Morgan Freeman',
            handle: '@morganf',
            text: "Great value for money! The car exceeded my expectations, and the return process took less than 5 minutes. HanRent is now my go-to rental service. Keep up the great work!"
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
            name: 'Tobey Williams',
            handle: '@tobey',
            text: "Amazing support from the HanRent team! My flight was delayed, but they waited for me and still gave me a warm welcome. The car was modern, well-maintained, and very clean. Truly a 5-star experience."
        }
    ];

    const Card = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
            <div className="flex gap-2">
                <img 
                    className="size-11 rounded-full object-cover" 
                    src={card.image} 
                    alt={`${card.name}'s profile`}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-medium">{card.name}</p>
                        <svg className="mt-0.5 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm pt-4 text-gray-800">
                {card.text}
            </p>
        </div>
    );

    const renderCardContent = () => {
        const doubled = [...cardsData, ...cardsData];
        return doubled.map((card, index) => (
            <Card key={`${card.handle}-${index}-${card.text.substring(0, 20)}`} card={card} />
        ));
    };

    return (
        <div className="w-full mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
            <div className='p-8 mt-10'>
                <Title title="What our customers say?" subTitle="Discover why discerning travelers choose HanRent as their partner on Rental Car." />
            </div>
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }

                @media (prefers-reduced-motion: reduce) {
                    .marquee-inner {
                        animation: none;
                    }
                }
            `}</style>

            {/* Row 1 */}
            <div className="marquee-row w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {renderCardContent()}
                </div>
                <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Row 2 (Reverse) */}
            <div className="marquee-row w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10">
                    {renderCardContent()}
                </div>
                <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </div>
    );
};

export default Testimonial;
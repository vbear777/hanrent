import React from 'react';
import Title from './Title';
import { motion } from 'motion/react';

const Testimonial = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Ujang Martin',
            handle: '@neilstellar',
            text: "Pengalaman luar biasa dengan HanRent! Proses pemesanannya sangat mudah, mobilnya bersih dan dalam kondisi sempurna, dan stafnya sangat ramah. Saya pasti akan menyewa lagi di perjalanan berikutnya!"
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Alessio',
            handle: '@averywrites',
            text: 'HanRent membuat perjalanan bisnis saya jauh lebih mudah. Proses jemput dan antar sangat lancar, harganya sangat terjangkau. Layanan pelanggannya cepat merespons saat saya bertanya. Sangat direkomendasikan!'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Oblivion',
            handle: '@oblivionnam_',
            text: "Layanan sewa mobil terbaik yang pernah saya gunakan! Mobil siap tepat waktu, irit BBM, dan sangat nyaman. HanRent benar-benar peduli dengan pelanggannya. Pelayanan 10/10."
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Asep Graham',
            handle: '@asepgg2',
            text: "Sudah pernah menyewa dari beberapa tempat, tapi HanRent yang terbaik sejauh ini. Harga transparan, tanpa biaya tersembunyi, dan kendaraannya sangat bersih. Timnya bahkan memberi rekomendasi wisata lokal yang keren. Suka banget!"
        },
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
            name: 'Jasmine',
            handle: '@jasminef',
            text: "Sangat worth it! Mobilnya melebihi ekspektasi saya, dan proses pengembalian hanya butuh kurang dari 5 menit. HanRent kini jadi pilihan utama saya setiap perjalanan. Pertahankan pelayanannya!"
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
            name: 'Tobey Aveiro',
            handle: '@tobey',
            text: "Dukungan yang luar biasa dari tim HanRent! Pesawat saya terlambat, tapi mereka tetap menunggu dan menyambut dengan hangat. Mobilnya modern, terawat, dan sangat bersih. Benar-benar pengalaman bintang 5."
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
                <Title title="Apa Kata Pelanggan Kami?" subTitle="Temukan mengapa pelanggan setia kami memilih HanRent sebagai mitra sewa mobil mereka." />
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
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5"
                >
                    {renderCardContent()}
                </motion.div>
                <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Row 2 (Reverse) */}
            <div className="marquee-row w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <motion.div 
                    whileHover={{ scale: 1.10 }}
                    className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10"
                >
                    {renderCardContent()}
                </motion.div>
                <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </div>
    );
};

export default Testimonial;
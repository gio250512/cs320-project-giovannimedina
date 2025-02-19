import React from 'react';
import logo from './GAMTlogo.png';
import BBQ from '../Sources/BBQ.JPEG';
import arempas from '../Sources/arempas.JPEG';
import chalo from '../Sources/chalo.jpg';
import '../Styles/App.css';

const FamousWhispers = () => {
    const cards = [
        {
            title: "Arempas",
            City: "Salt Lake City, Utah",
            description:
                "Experience authentic Venezuelan cuisine at Arempas in Salt Lake City. Known for its delicious arepas, cachapas, and patacones, this restaurant offers a cozy atmosphere and a variety of gluten-free and vegan options. Perfect for a late-night bite or a flavorful meal any time of day.",
            image: arempas
        },
        {
            title: "Willamette Valley Smokehouse",
            City: "Salem, Oregon",
            description:
                "Indulge in mouthwatering BBQ at Willamette Valley Smokehouse! Relish delicious meals crafted by an expert pit master team & dedicated staff. Unwind by the campfire with a glass of locally sourced beer or wine, enjoy live music, and soak in the friendly atmosphere.",
            image: BBQ
        },
        {
            title: "El rico Sanguchon de Chalo",
            City: "West Valley City, Utah",
            description:
                "A popular sandwich shop, known for its mouthwatering Peruvian sandwiches. From the Churrasco sandwich to the Lomo Saltado, there's something for everyone to enjoy. The cozy atmosphere and friendly staff make it the perfect spot for a quick bite or a meal with friends and family.",
            image: chalo
        }
    ];

    return (
        <div className="bg-teal-100 py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-teal-800">Famous Whispers</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2 text-teal-900">{card.title}</h2>
                            <p className="text-teal-700 text-lg font-semibold mb-4">{card.city}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FamousWhispers;
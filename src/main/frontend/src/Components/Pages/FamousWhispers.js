import React from 'react';
import logo from './GAMTlogo.png';
import SLC1 from './IMG_6200.JPEG';
import SLC2 from './SLC1.jpg';

const FamousWhispers = () => {
    const cards = [
        {
            title: "Eggs in the city",
            price: "$-$$",
            description:
                "Voyage Distinction curates bespoke travel experiences, offering discerning travelers access to the world's most captivating destinations and hidden gems. Embark on a journey defined by elegance, luxury, and unparalleled service.",
            image: SLC1
        },
        {
            title: "Utah County",
            price: "$149",
            description:
                "Unleash the potential of every destination with our bespoke travel planning. Elevate your experiences through expert insights and meticulously crafted itineraries tailored to your finest tastes.",
            image: logo
        },
        {
            title: "Majestic Expeditions",
            price: "$199",
            description:
                "Embark on an unparalleled journey through nature's wonders, where every adventure is meticulously curated to offer an exquisite blend of thrill and serenity. Our bespoke outdoor excursions promise memories woven with the fabric of luxury and discovery.",
            image: SLC2        }
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
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2 text-teal-900">{card.title}</h2>
                            <p className="text-teal-700 text-lg font-semibold mb-4">{card.price}</p>
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

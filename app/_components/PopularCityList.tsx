"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-5">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Popular Destinations 
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
      category: "Paris, France",
      title: "Explore the City of Lights – Eiffel Tower, Louvre & more",
      src: "https://i.pinimg.com/originals/67/16/e1/6716e1400ab899c6b0824074e9bc0177.jpg",
      content: "Paris, the romantic capital of the world, boasts iconic landmarks such as the Eiffel Tower, the Louvre Museum, and charming cafes lining cobblestone streets. It’s a blend of history, fashion, and fine cuisine.",
    },
    {
      category: "New York, USA",
      title: "Experience NYC – Times Square, Central Park, Broadway",
      src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxfMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "New York City never sleeps. From the dazzling lights of Times Square to the tranquility of Central Park, and the unmatched performances on Broadway, NYC is a melting pot of culture, ambition, and energy.",
    },
    {
      category: "Tokyo, Japan",
      title: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",
      src: "https://static.vecteezy.com/system/resources/previews/026/850/384/large_2x/of-cherry-blossoms-and-the-sensoji-temple-in-asakusa-tokyo-japan-generated-by-ai-photo.jpg",
      content: "Tokyo offers a futuristic skyline fused with ancient tradition. Visit the iconic Shibuya Crossing, enjoy cherry blossoms in spring, and explore historic temples like Senso-ji in Asakusa for a truly unique journey.",
    },
    {
      category: "Rome, Italy",
      title: "Walk through History – Colosseum, Vatican, Roman Forum",
      src: "https://cdn.audleytravel.com/-/-/79/1338050-colosseum-rome.jpg",
      content: "Rome is a city frozen in time. Discover the grandeur of the Colosseum, wander the ruins of the Roman Forum, and marvel at Renaissance art in the Vatican – all while enjoying world-famous Italian cuisine.",
    },
    {
      category: "Dubai, UAE",
      title: "Luxury and Innovation – Burj Khalifa, Desert Safari",
      src: "https://images.unsplash.com/photo-1609241185970-cf03da0b50a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Dubai dazzles with modern marvels like the Burj Khalifa, man-made islands, and opulent shopping malls. Take a thrilling desert safari or indulge in the city’s blend of Arab heritage and futuristic ambition.",
    },
    {
      category: "India",
      title: "Harbour Views – Opera House, Bondi Beach & Wildlife",
      src: "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "India is a land of vibrant cultures and landscapes. From the snowy peaks of the Himalayas to sun-drenched beaches in Goa and ancient temples in Tamil Nadu, it's a journey through time, tradition, and color.",
    },
  ];
  


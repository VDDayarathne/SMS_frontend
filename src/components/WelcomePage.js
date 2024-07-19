import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

export default () => {
  const images = [
    'https://legra.ph/file/490ed57ea16766f63f2d7.jpg',
    'https://legra.ph/file/b116424d41b1d427bdb42.jpg',
    'https://legra.ph/file/f09a4f85afd15686f5c0c.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="each-slide">
          <img src={images[currentIndex]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between p-4">
          <button onClick={handlePrev} className="text-3xl">
            &#10094;
          </button>
          <button onClick={handleNext} className="text-3xl">
            &#10095;
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl relative z-10">
        <div className="bg-white/50 max-w-5xl rounded-3xl mx-auto p-2 mb-8"><br/><br/>
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">"Welcome to the Ultimate Sport Management System – Elevate Your Game!"
          <span className="dark:text-blue-900">Join our community</span>Your sports world at a glance
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">"Your sports world at a glance – manage teams, track progress, and plan events all from one place."</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-900 dark:text-gray-50">
            <a href="/login">
              Sign In
            </a>
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Learn more</button>
        </div><br/>
      </div></div>
    </section>
  );
};
import React from 'react';

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(your-image.jpg)" }}>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-black mb-4">Hello</h1>
        <p className="text-xl text-black text-center">Manage your study here</p>
        <p className="text-lg text-black text-center mb-8">We'll help you to manage study and classes.</p>
        <a href="#" className="px-6 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;

'use client'; 
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Feature = ({ title, description } : any ) => (
  <div className="text-center">
    <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const PricingPlan = ({ name, price, features, highlighted = false } : any) => (
  <div className={`border rounded-lg p-6 text-center ${highlighted ? 'bg-blue-100' : ''}`}>
    <h3 className="text-xl font-semibold mb-4">{name}</h3>
    <p className="text-3xl font-bold mb-4">{price}</p>
    <ul className="mb-6">
      {features.map((feature : any, index : any) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
      Choose Plan
    </a>
  </div>
);

export default function Home() {
  return (
    <div className="font-sans">
      
      <Head>
        <title>JobJudo - Revolutionary Smart Device</title>
        <meta name="description" content="JobJudo - The smartest device you'll ever own" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">JobJudo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-blue-200">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-200">Pricing</a></li>
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-slate-100 to-slate-400 py-20 h-[70vh] relative">
          <div className="container mt-32 mx-auto text-center z-10 relative">
            <h2 className="text-4xl font-bold mb-4">Revolutionize Your Life with JobJudo</h2>
            <p className="text-xl mb-8">The smartest device you'll ever own.</p>
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Get Started
            </a>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                title="AI Assistant"
                description="Advanced AI to help with your daily tasks."
              />
              <Feature
                title="Smart Home Integration"
                description="Seamlessly connect and control your home devices."
              />
              <Feature
                title="Health Monitoring"
                description="Track your vitals and fitness goals effortlessly."
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="mb-4">"JobJudo has completely transformed how I manage my day-to-day life. It's like having a personal assistant always at my fingertips!"</p>
                <p className="font-semibold">- Sarah J., Marketing Executive</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="mb-4">"The smart home integration is flawless. I can control everything from my lights to my thermostat with just my voice. It's incredible!"</p>
                <p className="font-semibold">- Mike T., Tech Enthusiast</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingPlan
                name="Basic"
                price="$99"
                features={['AI Assistant', 'Smart Home Basics', '1-year warranty']}
              />
              <PricingPlan
                name="Pro"
                price="$199"
                features={['Everything in Basic', 'Advanced Smart Home', 'Health Monitoring', '2-year warranty']}
                highlighted={true}
              />
              <PricingPlan
                name="Enterprise"
                price="Contact Us"
                features={['Custom Solutions', 'Priority Support', 'Extended Warranty']}
              />
            </div>
          </div>
        </section>
      </main>

      <section>
        <div className="flex flex-col py-24 mx-auto w-full items-center justify-center">
          <h2 className='text-3xl mb-10'>Other Possible Sections</h2>
          <h4 className='text-black text-xl my-1'>FAQ</h4>
          <h4 className='text-black text-xl my-1'>How it Works</h4>
          <h4 className='text-black text-xl my-1'>Problem / Solution</h4>
          <h4 className='text-black text-xl my-1'>About us</h4>
          <h4 className='text-black text-xl my-1'>Product Overview</h4>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 JobJudo. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Terms of Service</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
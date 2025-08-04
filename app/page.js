'use client';

import { useState } from 'react';
import Image from 'next/image'; // Importing the optimized Image component
import { ChevronDown, Menu, X, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

// Main App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* Tailwind CSS configuration (for custom colors) */}
      <style>{`
        .bg-primary { background-color: #dc2824; }
        .text-primary { color: #dc2824; }
        .border-primary { border-color: #dc2824; }
        .hover\\:bg-primary-dark:hover { background-color: #c02621; }
      `}</style>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 font-bold text-2xl text-gray-900">
              Agency<span className="text-primary">.</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200">About</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors duration-200">Portfolio</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-200">Contact Us</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#services" onClick={toggleMenu} className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">Services</a>
            <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">About</a>
            <a href="#portfolio" onClick={toggleMenu} className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">Portfolio</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-white bg-primary rounded font-semibold text-center hover:bg-primary-dark transition-colors duration-200">Contact Us</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Grow Your Business with <br /> <span className="text-primary">Data-Driven Digital Marketing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We are a leading digital solutions agency specializing in creating innovative strategies that drive real results.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#services" className="px-8 py-3 rounded-full font-bold text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-lg">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-200 shadow-lg">
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of digital solutions designed to help your business succeed in the modern landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-600">
                  Crafting beautiful, responsive, and high-performing websites tailored to your business needs.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SEO & Content</h3>
                <p className="text-gray-600">
                  Boosting your online visibility and attracting organic traffic with smart search engine optimization.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5 5 0 0010 0l-3-9m-3 9a5 5 0 01-10 0l-3-9m12 0a5 5 0 00-10 0l-3 9m3 9a5 5 0 01-10 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600">
                  Building a strong brand presence and engaging with your audience on all major social platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <Image 
                  src="https://placehold.co/800x600/f0f0f0/808080?text=About+Us" 
                  alt="Our Team" 
                  width={800} 
                  height={600} 
                  className="rounded-xl shadow-xl w-full h-auto" 
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Our Agency</h2>
                <p className="text-gray-600 mb-6">
                  We are a passionate team of digital innovators, strategists, and creatives dedicated to helping businesses of all sizes thrive in the digital world. Our mission is to deliver measurable results and exceptional value through cutting-edge technology and creative thinking.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronDown size={20} className="text-primary transform rotate-180" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Innovation-Driven Solutions</p>
                      <p className="text-gray-600">We stay ahead of the curve, using the latest tools and technologies.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronDown size={20} className="text-primary transform rotate-180" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Client-Centric Approach</p>
                      <p className="text-gray-600">Your success is our priority. We work closely with you to achieve your goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronDown size={20} className="text-primary transform rotate-180" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Transparent Reporting</p>
                      <p className="text-gray-600">We provide clear, honest insights into your campaign&apos;s performance.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check out some of our latest projects and see the results we&apos;ve delivered for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Image 
                  src="https://placehold.co/600x400/f0f0f0/808080?text=Project+1" 
                  alt="Project 1" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ecommerce Platform</h3>
                  <p className="text-gray-600">A modern and intuitive online store with advanced features.</p>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Image 
                  src="https://placehold.co/600x400/f0f0f0/808080?text=Project+2" 
                  alt="Project 2" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Website Redesign</h3>
                  <p className="text-gray-600">Revamping a corporate site for better performance and user experience.</p>
                </div>
              </div>
              {/* Project Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Image 
                  src="https://placehold.co/600x400/f0f0f0/808080?text=Project+3" 
                  alt="Project 3" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile App Development</h3>
                  <p className="text-gray-600">Building a seamless mobile application for a new startup.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to start your next project? Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-primary focus:ring-primary"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="px-8 py-3 rounded-full font-bold text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <a href="#" className="font-bold text-3xl text-white">
              Agency<span className="text-primary">.</span>
            </a>
            <p className="max-w-lg mx-auto text-gray-400">
              We are a creative digital agency committed to delivering exceptional results for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


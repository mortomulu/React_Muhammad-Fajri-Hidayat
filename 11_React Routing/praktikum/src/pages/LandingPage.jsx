import { useState } from "react";
import { useOptimistic } from "react";
import herologo from "../assets/hero-img.png";

export const LandingPage = () => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4  lg:px-6 py-4 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center  text-xl font-semibold whitespace-nowrap dark:text-white">
                Simple Header
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 lg:hidden"
              >
                Home
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="links ml-auto hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="sm:hidden lg:inline">
                  <a
                    href="#"
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="section-hero">
        <div className="hero-container">
          <div className="content">
            <h1 className="font-extrabold">
              Better Solution For Your Bussines
            </h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="content-button">
              <button className="getstarted">Get Started</button>
              <button>Watch Video</button>
            </div>
          </div>
          <div className="image">
            <img src={herologo} alt="" />
          </div>
        </div>
      </section>
      <section className="section-newslatter">
        <h3 className="newslatter-title font-bold">Join Our Newslatter</h3>
        <p className="newslatter-content">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form className="newslatter-form">
          <input className="input border-none" type="text" />
          <button className="button rounded-full">Subscribe</button>
        </form>
      </section>
      <section className="section-contact">
        <div className="contact-container">
          <div className="arsha">
            <h2 className="font-semibold">ARSHA</h2>
            <blockquote>
              A108 Adam Street New York, NY 535022 United States
              <b>Phone:</b> +1 5589 55488 55
              <b>Email:</b> info@example.com
            </blockquote>
          </div>
          <div className="usefullinks">
            <h4 className="font-bold">Useful Links</h4>
            <blockquote>
              Home About us Services Terms of services Privacy policy
            </blockquote>
          </div>
          <div className="ourservices">
            <h4 className="font-bold">Our Services</h4>
            <blockquote>
              Web Design Web Development Product Management Marketing Graphic
              Design
            </blockquote>
          </div>
          <div className="oursocnet">
            <h4 className="font-bold">Our Social Network</h4>
            <blockquote>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </blockquote>
            <div className="ava">
              <button className="profile" />
              <button className="profile" />
              <button className="profile" />
              <button className="profile" />
              <button className="profile" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <p>
            © Copyright <b>Arsha.</b> All Rights Reserved
          </p>
          <p>
            Designed by <span>BootstrapMade</span>
          </p>
        </div>
      </footer>
    </>
  );
};

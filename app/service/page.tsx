"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navMenu = document.getElementById("nav-menu")
      const hamburger = document.getElementById("hamburger")
      if (
        navMenu &&
        hamburger &&
        !navMenu.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [menuOpen])

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
        <nav className="flex justify-between items-center p-4">
          <div className="text-white">
            <h2 className="text-xl font-semibold">logx-cars</h2>
          </div>

          <button
            id="hamburger"
            className={`md:hidden flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer z-50`}
            onClick={toggleMenu}
          >
            <span className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>

          <ul
            id="nav-menu"
            className={`md:flex md:items-center md:gap-6 list-none font-medium
              fixed md:static top-14 right-0 md:right-auto
              w-60 md:w-auto h-screen md:h-auto
              bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none
              flex-col md:flex-row items-center pt-8 md:pt-0
              transition-all duration-300
              ${menuOpen ? "flex right-0" : "hidden md:flex"}`}
          >
            <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
              <Link href="/" className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none" onClick={() => setMenuOpen(false)}>
                home
              </Link>
            </li>
            <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
              <Link href="/categories" className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none" onClick={() => setMenuOpen(false)}>
                categories
              </Link>
            </li>
            <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
              <Link href="/service" className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none" onClick={() => setMenuOpen(false)}>
                service
              </Link>
            </li>
            <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
              <Link href="/#about" className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none" onClick={() => setMenuOpen(false)}>
                about us
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/sign" className="block px-4 py-2 bg-[#1174f7] border border-[#1174f7] rounded text-white no-underline hover:scale-110 transition-transform duration-300" onClick={() => setMenuOpen(false)}>
                sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="pt-20 px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center py-8 capitalize">our services</h2>

        {/* Sell Service */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-4 border border-gray-400 p-4 mb-8 items-center rounded">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/images/selling.jpg" alt="Sell your car" fill className="object-cover rounded" />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#1174f7] mb-4 capitalize">sell your car</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Looking to sell your car? We make the process simple and hassle-free. Get a fair price for your vehicle
              with our transparent evaluation process. Our team of experts will assess your car and provide you with a
              competitive offer. Whether you&apos;re upgrading to a new vehicle or simply looking to sell, we&apos;re here to
              help you every step of the way. Contact us today and let us handle the paperwork while you focus on
              what matters most.
            </p>
            <Link href="/categories" className="inline-block mt-4 px-6 py-3 bg-[#1174f7] text-white font-semibold rounded hover:bg-[#0059ff] transition-colors capitalize">
              learn more
            </Link>
          </div>
        </div>

        {/* Rental Service */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-4 border border-gray-400 p-4 mb-8 items-center rounded">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/images/rental.jpg" alt="Rent a car" fill className="object-cover rounded" />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#1174f7] mb-4 capitalize">rent a car</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Need a car for a day, week, or month? Our rental service offers a wide selection of vehicles to suit your
              needs. From compact cars for city driving to spacious SUVs for family trips, we have it all. Enjoy
              competitive rates, flexible rental periods, and excellent customer service. All our rental vehicles are
              well-maintained and come with comprehensive insurance coverage. Book online or visit us in person to get
              started on your next adventure.
            </p>
            <Link href="/categories" className="inline-block mt-4 px-6 py-3 bg-[#1174f7] text-white font-semibold rounded hover:bg-[#0059ff] transition-colors capitalize">
              learn more
            </Link>
          </div>
        </div>

        {/* Garage Service */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-4 border border-gray-400 p-4 mb-8 items-center rounded">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/images/garage.jpg" alt="Garage service" fill className="object-cover rounded" />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#1174f7] mb-4 capitalize">garage service</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Keep your vehicle in top condition with our professional garage services. Our certified technicians
              provide comprehensive maintenance and repair services for all makes and models. From routine oil changes
              and tire rotations to complex engine repairs and diagnostics, we have the expertise to handle it all. We
              use only high-quality parts and state-of-the-art equipment to ensure your vehicle runs smoothly. Schedule
              your appointment today and experience the difference of professional car care.
            </p>
            <Link href="/categories" className="inline-block mt-4 px-6 py-3 bg-[#1174f7] text-white font-semibold rounded hover:bg-[#0059ff] transition-colors capitalize">
              learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

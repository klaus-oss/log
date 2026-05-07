"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const buyCards = {
  sedan: [
    { name: "BMW M340i", price: "$75,000", year: "2024", mileage: "5,000 mi", image: "/images/bmw-sedan.jpg" },
    { name: "Mercedes AMG C63", price: "$82,000", year: "2024", mileage: "3,000 mi", image: "/images/mercedes-sedan.jpg" },
    { name: "Nissan Altima", price: "$35,000", year: "2023", mileage: "8,000 mi", image: "/images/nissan-sedan.jpg" },
    { name: "Tesla Model S", price: "$95,000", year: "2024", mileage: "2,000 mi", image: "/images/tesla-sedan.jpg" },
  ],
  suv: [
    { name: "Kia Telluride", price: "$45,000", year: "2024", mileage: "10,000 mi", image: "/images/kia-suv.jpg" },
    { name: "Audi Q8", price: "$78,000", year: "2023", mileage: "15,000 mi", image: "/images/audi-suv.jpg" },
    { name: "Toyota Highlander", price: "$42,000", year: "2024", mileage: "8,000 mi", image: "/images/toyota-suv.jpg" },
    { name: "BMW X7", price: "$92,000", year: "2024", mileage: "5,000 mi", image: "/images/bmw-suv.jpg" },
  ],
  pickup: [
    { name: "Ford F-150", price: "$55,000", year: "2024", mileage: "12,000 mi", image: "/images/ford-pickup.jpg" },
    { name: "Toyota Tundra", price: "$52,000", year: "2023", mileage: "18,000 mi", image: "/images/toyota-tundra.jpg" },
    { name: "GMC Sierra", price: "$58,000", year: "2024", mileage: "9,000 mi", image: "/images/gmc-pickup.jpg" },
    { name: "Nissan Frontier", price: "$42,000", year: "2024", mileage: "7,000 mi", image: "/images/nissan-pickup.jpg" },
  ],
}

const rentCards = {
  sedan: [
    { name: "Kia K5", price: "$80/day", year: "2024", transmission: "Automatic", image: "/images/kia-sedan.jpg" },
    { name: "Toyota Corolla", price: "$65/day", year: "2024", transmission: "Automatic", image: "/images/toyota-sedan.jpg" },
    { name: "Audi A5", price: "$150/day", year: "2023", transmission: "Automatic", image: "/images/audi-rent.jpg" },
    { name: "Mercedes C-Class", price: "$180/day", year: "2024", transmission: "Automatic", image: "/images/mercedes-rent.jpg" },
  ],
  suv: [
    { name: "VW Tiguan", price: "$95/day", year: "2024", transmission: "Automatic", image: "/images/vw-suv-rent.jpg" },
    { name: "Toyota RAV4", price: "$85/day", year: "2023", transmission: "Automatic", image: "/images/toyota-rent-suv.jpg" },
    { name: "Nissan Rogue", price: "$90/day", year: "2024", transmission: "Automatic", image: "/images/nissan-suv-rent.jpg" },
    { name: "Kia Sportage", price: "$88/day", year: "2024", transmission: "Automatic", image: "/images/kia-rent.jpg" },
  ],
  pickup: [
    { name: "Chevy Silverado", price: "$110/day", year: "2024", transmission: "Automatic", image: "/images/chevy-pickup.jpg" },
    { name: "Dodge RAM", price: "$120/day", year: "2023", transmission: "Automatic", image: "/images/dodge-pickup.jpg" },
    { name: "Mitsubishi L200", price: "$90/day", year: "2024", transmission: "Automatic", image: "/images/mitsubishi-pickup-rent.jpg" },
    { name: "Mercedes X-Class", price: "$130/day", year: "2024", transmission: "Automatic", image: "/images/mercedes-pickup-rent.jpg" },
  ],
}

export default function Categories() {
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

  const CarCard = ({ car, isRent }: { car: typeof buyCards.sedan[0] | typeof rentCards.sedan[0]; isRent?: boolean }) => (
    <div className="flex flex-col border border-gray-400 rounded hover:scale-105 transition-transform duration-300 bg-white">
      <div className="relative w-full h-40">
        <Image src={car.image} alt={car.name} fill className="object-cover rounded-t" />
      </div>
      <div className="p-4">
        <ul className="list-none">
          <li className="py-1 capitalize">
            <span className="font-semibold">Name:</span> {car.name}
          </li>
          <li className="py-1 capitalize">
            <span className="font-semibold">Price:</span> {car.price}
          </li>
          <li className="py-1 capitalize">
            <span className="font-semibold">Year:</span> {car.year}
          </li>
          <li className="py-1 capitalize">
            <span className="font-semibold">{isRent ? "Transmission" : "Mileage"}:</span>{" "}
            {"mileage" in car ? car.mileage : car.transmission}
          </li>
        </ul>
      </div>
      <button className="w-full py-3 bg-[#1174f7] text-white font-semibold rounded-b hover:bg-[#0059ff] transition-colors capitalize">
        {isRent ? "rent now" : "buy now"}
      </button>
    </div>
  )

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
        {/* Buy Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center py-8 capitalize">buy a car</h2>

          {/* Sedans */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">sedans</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {buyCards.sedan.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>

          {/* SUVs */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">SUVs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {buyCards.suv.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>

          {/* Pickups */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">pickups</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {buyCards.pickup.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>

        {/* Rent Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center py-8 capitalize">rent a car</h2>

          {/* Sedans */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">sedans</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {rentCards.sedan.map((car, index) => (
              <CarCard key={index} car={car} isRent />
            ))}
          </div>

          {/* SUVs */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">SUVs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {rentCards.suv.map((car, index) => (
              <CarCard key={index} car={car} isRent />
            ))}
          </div>

          {/* Pickups */}
          <h3 className="text-xl font-semibold mb-4 text-[#1174f7] capitalize">pickups</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {rentCards.pickup.map((car, index) => (
              <CarCard key={index} car={car} isRent />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

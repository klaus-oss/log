"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
      {/* Home Section */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/homebg.jpg')" }}
      >
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
          <nav className="flex justify-between items-center p-4">
            <div className="text-white">
              <h2 className="text-xl font-semibold">logx-cars</h2>
            </div>

            {/* Hamburger Button */}
            <button
              id="hamburger"
              className={`md:hidden flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer z-50 ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span
                className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </button>

            {/* Navigation Menu */}
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
                <Link
                  href="/"
                  className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none"
                  onClick={() => setMenuOpen(false)}
                >
                  home
                </Link>
              </li>
              <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
                <Link
                  href="/categories"
                  className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none"
                  onClick={() => setMenuOpen(false)}
                >
                  categories
                </Link>
              </li>
              <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
                <Link
                  href="/service"
                  className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none"
                  onClick={() => setMenuOpen(false)}
                >
                  service
                </Link>
              </li>
              <li className="my-2 md:my-0 w-4/5 md:w-auto text-center md:text-left">
                <a
                  href="#about"
                  className="block p-2 text-white no-underline hover:scale-110 transition-transform duration-300 border-b border-gray-500 md:border-none"
                  onClick={() => setMenuOpen(false)}
                >
                  about us
                </a>
              </li>
              <li className="my-2 md:my-0">
                <Link
                  href="/sign"
                  className="block px-4 py-2 bg-[#1174f7] border border-[#1174f7] rounded text-white no-underline hover:scale-110 transition-transform duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  sign up
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="text-white absolute top-1/3 left-0 px-4 max-w-1/2 capitalize">
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-bold py-4">want to drive your dream car?</h2>
            <p className="text-lg md:text-2xl py-2">we are here to help you, drive safe!</p>
          </div>

          <ul className="flex gap-8 md:gap-12 list-none text-lg md:text-2xl font-semibold py-4">
            <li>
              2,500<span className="text-[#1174f7] pl-2">+</span>
              <ul className="list-none text-sm md:text-base font-normal">
                <li>cars</li>
              </ul>
            </li>
            <li>
              4,500<span className="text-[#1174f7] pl-2">+</span>
              <ul className="list-none text-sm md:text-base font-normal">
                <li>customers</li>
              </ul>
            </li>
            <li>
              12<span className="text-[#1174f7] pl-2">+</span>
              <ul className="list-none text-sm md:text-base font-normal">
                <li>awards</li>
              </ul>
            </li>
          </ul>

          <Link
            href="/categories"
            className="inline-block mt-4 px-8 py-4 bg-[#1174f7] text-white border-none rounded font-semibold capitalize text-lg hover:scale-110 transition-transform duration-300"
          >
            explore
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="min-h-[80vh] mx-4 md:mx-20 mt-32 capitalize">
        <h2 className="text-[#1174f7] text-2xl md:text-3xl font-bold mb-4">about us</h2>
        <p className="p-4 text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ipsum ex non dolores molestiae similique
          labore vero exercitationem sint. Vero ut totam, libero eaque eos alias nisi distinctio sit fugit! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Quidem suscipit rerum doloribus! Laboriosam accusamus sint alias
          earum, deleniti consequatur incidunt nihil quis maiores harum magni provident ab nobis aliquid corrupti! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Quis expedita eos velit. Distinctio quas enim molestias
          explicabo qui maxime obcaecati alias, amet velit excepturi, consectetur nihil, fugiat corrupti dolorem
          temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dignissimos dolorum et soluta
          dolorem eos odio ullam accusamus. Doloremque consectetur dignissimos dolores accusantium, placeat suscipit
          recusandae nostrum reprehenderit facere dolore!
        </p>
        <p className="p-4 text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt quasi! Debitis, expedita
          incidunt neque facere fugit officiis error aliquid vel odio atque itaque et illum amet consequatur Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Aliquam, distinctio. Dolores expedita rem, aspernatur ratione
          quas, labore eum blanditiis et excepturi id officia. Tenetur similique, quas illo consequuntur rerum
          cupiditate! doloribus ea.
        </p>

        <hr className="my-8" />

        {/* Footer */}
        <footer className="flex flex-wrap justify-evenly gap-4 md:gap-8 py-8 md:py-12">
          <div className="min-w-[150px]">
            <h2 className="text-[#1174f7] text-lg md:text-xl font-bold">
              logx <span>- cars</span>
            </h2>
            <ul className="list-none mt-2">
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                drive safe!
              </li>
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h2 className="text-[#1174f7] text-lg md:text-xl font-bold">about us</h2>
            <ul className="list-none mt-2">
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                we&apos;re here to help you.
              </li>
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h2 className="text-[#1174f7] text-lg md:text-xl font-bold">contact us</h2>
            <ul className="list-none mt-2">
              <li className="py-1 font-medium flex items-center gap-2 hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +2519 123 4567 89
              </li>
              <li className="py-1 font-medium flex items-center gap-2 hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                logx-cars@gmail.com
              </li>
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h2 className="text-[#1174f7] text-lg md:text-xl font-bold">information</h2>
            <ul className="list-none mt-2">
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                about
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                blog
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                testimonial
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                more search
              </li>
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h2 className="text-[#1174f7] text-lg md:text-xl font-bold">more links</h2>
            <ul className="list-none mt-2">
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                service
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                support
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                terms & conditions
              </li>
              <li className="py-1 font-medium hover:scale-110 hover:text-[#317ada] transition-transform duration-300 cursor-pointer">
                privacy policy
              </li>
            </ul>
          </div>
        </footer>

        <hr />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-8">
          <Image src="/images/facebook-app-symbol.png" alt="Facebook" width={32} height={32} className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
          <Image src="/images/telegram.png" alt="Telegram" width={32} height={32} className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
          <Image src="/images/twitter(2).png" alt="Twitter" width={32} height={32} className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
          <Image src="/images/tik-tok.png" alt="TikTok" width={32} height={32} className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
        </div>
      </div>
    </>
  )
}

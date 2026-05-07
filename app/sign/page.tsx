"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Sign() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="flex-1 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1174f7] capitalize">
                {isLogin ? "welcome back" : "create account"}
              </h2>
              <p className="text-gray-600 mt-2 capitalize">
                {isLogin ? "please login to your account" : "sign up to get started"}
              </p>
            </div>

            {/* Login/Signup Toggle */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                className={`px-6 py-3 rounded font-semibold capitalize transition-all duration-300 ${
                  isLogin ? "bg-[#1174f7] text-white" : "border border-gray-400 hover:bg-[#1174f7] hover:text-white"
                }`}
                onClick={() => setIsLogin(true)}
              >
                login
              </button>
              <button
                className={`px-6 py-3 rounded font-semibold capitalize transition-all duration-300 ${
                  !isLogin ? "bg-[#1174f7] text-white" : "border border-gray-400 hover:bg-[#1174f7] hover:text-white"
                }`}
                onClick={() => setIsLogin(false)}
              >
                sign up
              </button>
            </div>

            {/* Social Sign In */}
            <p className="text-center text-gray-600 mb-4 capitalize">or continue with</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded hover:scale-105 transition-transform">
                <Image src="/images/apple-logo.png" alt="Apple" width={24} height={24} />
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded hover:scale-105 transition-transform">
                <Image src="/images/google.png" alt="Google" width={24} height={24} />
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded hover:scale-105 transition-transform">
                <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 border-b border-gray-400"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-1 border-b border-gray-400"></div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#1174f7]"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#1174f7]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#1174f7]"
              />

              {isLogin && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <span className="text-sm capitalize">remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#317ada] hover:underline capitalize">
                    forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#1174f7] text-white font-semibold rounded hover:scale-105 transition-transform capitalize"
              >
                {isLogin ? "login" : "sign up"}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600 capitalize">
              {isLogin ? "don't have an account? " : "already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#1174f7] font-semibold hover:underline capitalize"
              >
                {isLogin ? "sign up" : "login"}
              </button>
            </p>

            <div className="text-center mt-8">
              <Link href="/" className="text-[#1174f7] hover:underline capitalize">
                back to home
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block flex-1 relative">
            <Image
              src="/images/bmw-m4.jpg"
              alt="Car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

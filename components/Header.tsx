"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigation = [
    { name: "Vantaggi", href: "/#vantaggi" },
    { name: "Caratteristiche", href: "/#caratteristiche" },
    { name: "Moduli", href: "/moduli", subItems: [
      { name: "Ricevimento", href: "/ricevimento" },
      { name: "Movimenti Interni", href: "/movimenti_interni" },
      { name: "Inventario", href: "/inventario" },
      { name: "Monitoraggio", href: "/monitoraggio" },
      { name: "Spedizioni", href: "/spedizioni" },
    ] },
  ]

  const handleDropdownClick = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[100]">
      <nav className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8" aria-label="Navigazione principale">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center">
              <Image src="/Logicway_logo.svg" alt="LogicWay Logo" width={120} height={32} className="h-7 sm:h-8 w-auto" style={{ width: 'auto' }} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  {item.subItems ? (
                    <div className="relative">
                      <button
                        className="text-gray-700 hover:text-[#f6de34] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between"
                        onClick={handleDropdownClick}
                      >
                        {item.name} <ChevronDown className="h-4 w-4 ml-2" />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            className="absolute bg-white shadow-lg mt-2 rounded-md py-1 px-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              className="block text-gray-800 hover:text-[#f6de34] px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b border-gray-100 mb-1"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Tutti i moduli
                            </Link>
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-gray-800 hover:text-[#f6de34] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#f6de34] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link href="/contatti">
                <Button className="bg-[#f6de34] hover:bg-yellow-400 text-black transition duration-300">
                  Richiedi Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(true)} aria-label="Apri menu navigazione">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* X per chiudere */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Chiudi menu navigazione"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full max-w-sm space-y-6 text-center">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {item.subItems ? (
                    <details className="cursor-pointer">
                      <summary className="block text-2xl text-gray-800 font-semibold hover:text-[#f6de34] transition flex items-center justify-center space-x-2">
                        <span>{item.name}</span> <ChevronDown className="h-4 w-4" />
                      </summary>
                      <Link
                        href={item.href}
                        className="block text-lg text-gray-800 font-semibold hover:text-[#f6de34] px-3 py-2 rounded-md transition-colors border-b border-gray-100 mx-8 mb-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Tutti i moduli
                      </Link>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-1xl text-gray-800 font-semibold hover:text-[#f6de34] px-3 py-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                          
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-2xl text-gray-800 font-semibold hover:text-[#f6de34] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link href="/contatti" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#f6de34] hover:bg-yellow-400 text-black py-3 text-lg">
                    Richiedi Demo
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="block py-2 hover:text-[#dfc536]">{children}</a>
  )

  const DropdownNavItem = ({ title, items }: { title: string; items: string[] }) => (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 hover:text-[#dfc536]">
        {title}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-48 rounded-md bg-white/10 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {items.map((item, index) => (
          <div key={index}>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#dfc536] ">
              {item}
            </a>
            {index < items.length - 1 && <hr className="border-white/20" />}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/home.jpg?height=1080&width=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="flex items-center justify-end p-6 text-white">
          <div className="flex-1 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <AnimatePresence>
            {(isMenuOpen || !isMobile) && (
              <motion.div
                initial={isMobile ? { x: "-100%" } : { opacity: 1 }}
                animate={isMobile ? { x: 0 } : { opacity: 1 }}
                exit={isMobile ? { x: "-100%" } : { opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed md:relative top-0 left-0 bottom-0 w-64 md:w-auto bg-black/90 md:bg-transparent z-50 md:z-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-0 ${isMobile ? "" : "hidden md:flex"}`}
              >
                {isMobile && (
                  <Button variant="ghost" size="icon" className="self-end mb-4" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                )}
                <NavItem href="#">Home</NavItem>
                <DropdownNavItem 
                  title="Properties For Sale" 
                  items={["Houses For Sale", "Apartments For Sale", "Land For Sale"]} 
                />
                <DropdownNavItem 
                  title="Properties To Let" 
                  items={["Townhouses/Villas For Rent", "Studio Apartments For Rent", "Office Spaces For Rent"]} 
                />
                <NavItem href="#">Blog</NavItem>
                <NavItem href="#">Testimonials</NavItem>
                <NavItem href="#">Contact</NavItem>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-xl"
            >
              WELCOME TO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-7xl font-light text-[#C5B351]"
            >
              Intime Homes Consultancy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white text-2xl md:text-3xl italic"
            >
              Turning Dreams Into Homes
            </motion.p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full max-w-6xl mt-16 p-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center gap-4 justify-between"
          >
            <Select>
              <SelectTrigger className="w-[200px] bg-transparent text-white border-white/20">
                <SelectValue placeholder="Looking For?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy Property</SelectItem>
                <SelectItem value="rent">Rent Property</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] bg-transparent text-white border-white/20">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] bg-transparent text-white border-white/20">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="suburb">Suburb</SelectItem>
                <SelectItem value="beach">Beach Area</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] bg-transparent text-white border-white/20">
                <SelectValue placeholder="For Rent/For Sale" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
              </SelectContent>
            </Select>

            <Input 
              type="number" 
              placeholder="Budget" 
              className="w-[200px] bg-transparent text-white border-white/20 placeholder:text-white/70"
            />

            <Button className="bg-[#C5B351] text-black hover:bg-[#D5C361] px-8">
              Search
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
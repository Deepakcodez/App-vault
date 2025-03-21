"use client"
import Link from "next/link"
// import { useTheme } from "next-themes"
import { motion } from "motion/react"
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Header() {




  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <h1 className="text-2xl text-violet-300">AV</h1>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
         
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
           Explore
          </Link>
          <Link
            href="/publish"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Publish
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Our Goal
          </Link>
         
        </div>
        <div className="flex flex-1 justify-end">
         xxx
        </div>
      </nav>
    </motion.header>
  )
}


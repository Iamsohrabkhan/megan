/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";
import AnimatedLink from "./Animatelink";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { AnimatePresence } from "framer-motion";
import ThemeBotton from "../Theme/theme-button";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { title: "Home", href: "/" },
    // { title: "Services", href: "/Services" },
    { title: "Blogs", href: "/blogs" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    const toggleMenu = () => {
      setOpen((prevOpen) => !prevOpen);
    };
   
    const MobileNavLink = ({ title, href }) => {
      return (
        <motion.div
          variants={mobileLinkVars}
          className="text-3xl uppercase text-black"
        >
          <AnimatedLink
            setOpen={setOpen}
            href={href}
            tittle={title}
            path={path}
          ></AnimatedLink>
        </motion.div>
      );
    };
  
    return (
      <header className=" relative z-[100000] mb-24">
        <nav className="bg-white/75 dark:bg-black/75 backdrop-blur-sm flex justify-between items-center py-3 lg:py-4 px-2 fixed top-0 right-0 left-0 z-[60]">
          <div className="flex items-center gap-[1ch]">
            <div className="w-5 h-5 bg-yellow rounded-full" />
            <div className="logo absolute w-12 h-12 ml-4 z-[60]">
              <Image src="/logo.png" fill alt="logo" className=""  />
            </div>
          </div>
          <div className="lg:flex items-center hidden gap-4 text-md text-zinc-400">
            <>
              {navLinks.map((curr) => (
                <Link
                  key={curr.title}
                  href={curr.href}
                  className="relative  inline-block overflow-hidden group"
                >
                  <span className="font-lora text-black dark:text-white text-xl">
                    {curr.title}
                  </span>
                  <span className="absolute -z-20 -bottom-0.5  left-0 bg-[#7C96A6] transition-all duration-200 h-1/2 w-0 group-hover:w-full " />
                  {path === curr.href && (
                    <span className="absolute -z-10 -bottom-0.5  left-0 bg-[#7C96A6]w-full h-1/2" />
                  )}
                </Link>
              ))}
            <div className="w-24">
                <ThemeBotton />
            </div>
            
            </>
  
          </div>
          <div className="flex justify-center items-center lg:hidden relative z-50 left-0 top-0 gap-2">
            <ThemeBotton />
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer lg:hidden text-md text-black dark:text-white h-9"
              onClick={toggleMenu}
            >
              {open ? "Open" : "Close"}
            </Button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-white dark:bg-black text-black p-10 z-20"
            >
              <div className="flex h-full flex-col">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-lora items-center space-y-1 "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden" key={index}>
                        <MobileNavLink title={link.title} href={link.href} />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  };
  
  
   const menuVars = {
      initial: {
        scaleY: 0,
      },
      animate: {
        scaleY: 1,
        transition: {
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        },
      },
      exit: {
        scaleY: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
    const containerVars = {
      initial: {
        transition: {
          staggerChildren: 0.09,
          staggerDirection: -1,
        },
      },
      open: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.09,
          staggerDirection: 1,
        },
      },
    };
  
    const mobileLinkVars = {
      initial: {
        y: "30vh",
        transition: {
          duration: 0.5,
          ease: [0.37, 0, 0.63, 1],
        },
      },
      open: {
        y: 0,
        transition: {
          ease: [0, 0.55, 0.45, 1],
          duration: 0.7,
        },
      },
    };
  
  export default Navbar;

// "use client";
// import Link from 'next/link';
// import { useEffect, useState } from 'react'

// const Navbar= () => {

//     const [state, setState] = useState(false)

//     // Replace / paths with your paths
//     const navigation = [
//         { title: "Features", path: "/" },
//         { title: "About", path: "/about" },
//         { title: "Contact", path: "/contact" },
//         { title: "Blogs", path: "/blogs" }
//     ]

//     useEffect(() => {
//         document.onclick = (e) => {
//             const target = e.target;
//             if (!target.closest(".menu-btn")) setState(false);
//         };
//     }, [])

//     return (
//         <nav className={`bg-white pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
//             <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
//                 <div className="flex items-center justify-between py-5 md:block">
//                     <Link href="/">
//                         <img
//                             src="https://www.floatui.com/logo.svg"
//                             width={120}
//                             height={50}
//                             alt="Float UI logo"
//                         />
//                     </Link>
//                     <div className="md:hidden">
//                         <button className="menu-btn text-gray-500 hover:text-gray-800"
//                             onClick={() => setState(!state)}
//                         >
//                             {
//                                 state ? (
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                                     </svg>
//                                 ) : (
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                     </svg>
//                                 )
//                             }
//                         </button>
//                     </div>
//                 </div>
//                 <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
//                     <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
//                         {
//                             navigation.map((item, idx) => {
//                                 return (
//                                     <li key={idx} className="text-gray-700 hover:text-gray-900">
//                                         <Link href={item.path} className="block">
//                                             {item.title}
//                                         </Link>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                     <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
//                         <Link href="/" className="block text-gray-700 hover:text-gray-900">
//                             Log in
//                         </Link>
//                         <Link href="/" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
//                             Sign in
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                                 <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar
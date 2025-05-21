'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react';



const NavBarDashboard = () => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const Notifications = ['Check out our latest course', 'This article might inspire you', 'Get started with user testing']

  return (
    <nav className="hidden sm:flex justify-between items-center px-5 py-2 sm:py-5 sm:px-10 w-full text-center">
        <Link href={"/"}>
            <Image src={"/icons/Logo.svg"} width={200} height={30} alt='BoardCraft Studio Logo' />
        </Link>
        <div className="flex items-center gap-4 font-bold">
            <button className="cursor-pointer hover:text-slate-700">Course</button>
            <button className="cursor-pointer hover:text-slate-700">Design Assets</button>
            <button onClick={() => {setIsNotificationOpen(!isNotificationOpen)}} className="relative cursor-pointer">
                <Image src={"/icons/bell.svg"} width={20} height={20} alt="notifications"/>
                <AnimatePresence>
                    {isNotificationOpen && (
                            <motion.div 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            className="absolute flex flex-col p-2 gap-2 -left-65 top-8 border bg-bg-sand rounded-small">
                            {Notifications.map((message, index) => (
                                <div key={index} className="flex flex-col gap-2 text-start hover:bg-bg-green p-1 rounded-small">
                                    <div className="flex gap-2 items-center">
                                        <div className={`${index == 0 && 'bg-red-500'} border w-1.5 h-1.5 rounded-full`}></div>
                                        <p className="text-sm font-medium ">{message}</p>
                                    </div>
                                    <p className="text-xs font-light">This is a new Notifications about something interesting that is useful in a way</p>
                                </div>
                                ))}
                            </motion.div>
                        
                    )}
                </AnimatePresence>
            </button>
            <button onClick={() => {setIsSettingsOpen(!isSettingsOpen)}} className="relative border rounded-full cursor-pointer">
                <Image src={"/mathias.webp"} width={45} height={45} alt="notifications"/>
                <AnimatePresence>
                    {isSettingsOpen && (
                            <motion.div 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            className="absolute flex flex-col p-2 gap-2 -left-65 top-8 border bg-bg-sand rounded-small">
                            {Notifications.map((message, index) => (
                                <div key={index} className="flex flex-col gap-2 text-start hover:bg-bg-green p-1 rounded-small">
                                    <div className="flex gap-2 items-center">
                                        <div className={`${index == 0 && 'bg-red-500'} border w-1.5 h-1.5 rounded-full`}></div>
                                        <p className="text-sm font-medium ">{message}</p>
                                    </div>
                                    <p className="text-xs font-light">This is a new Notifications about something interesting that is useful in a way</p>
                                </div>
                                ))}
                            </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div> 
    </nav>
  )
}

export default NavBarDashboard;
'use client'

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'motion/react';
import { lessonData } from "@/data/data";
import MobileSidebar from "../mobileSidebar";



const NavBarCourse = ( { activeLesson, setActiveLesson} : {

    activeLesson: number;
    setActiveLesson: Dispatch<SetStateAction<number>>
} ) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    //  Sidebar open or closed state
    const [isOpen, setIsOpen] = useState(false);



    // This hook is used to prevent scrolling on the lesson content when the sidebar is open which causes annoying UX on mobile
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        
        // unmount, then remove the class
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);



    const Notifications = ['Check out our latest course', 'This article might inspire you', 'Get started with user testing']
    const Settings = ['Account', 'Settings', 'Theme']


  return (
    <nav className="flex sticky top-0 z-50 justify-between bg-bg-sand items-center h-[72px] px-5 w-full text-center border-t border-b">
        {/* Overlay that can close the sidebar and dims the background content */}
        {isOpen && (
            <div onClick={() => {setIsOpen(false)}} className="sm:hidden absolute inset-0 w-full h-screen z-30 bg-black/40"/>
        )}
        {/* Mobile only sidebar */}
        {/* It receives the ability to open or close itself */}
        <MobileSidebar activeLesson={activeLesson} setActiveLesson={setActiveLesson} isOpen={isOpen} setIsOpen={setIsOpen}/> 
        <p>{lessonData[activeLesson].title}</p>
        <div className="flex items-center gap-6 sm:gap-4 font-bold">
            <button className="hidden sm:block cursor-pointer hover:text-slate-600">Course</button>
            <button className="hidden sm:block cursor-pointer hover:text-slate-600">Design Assets</button>
            {/* Sidebar state button */}
            <button onClick={() => {setIsOpen(!isOpen)}} className='lg:hidden border bg-bg-green p-2 rounded-full'>
                <Image src={"/icons/list.svg"} width={30} height={30} alt='open close sidebar'/>
            </button>
            <button onClick={() => {setIsNotificationOpen(!isNotificationOpen); setIsSettingsOpen(false)}} className="relative cursor-pointer">
                <Image className="hidden sm:block" src={"/icons/bell.svg"} width={20} height={20} alt="notifications"/>
                {/* Mobile bell */}
                <Image className="sm:hidden" src={"/icons/bell.svg"} width={30} height={30} alt="notifications"/>
                <AnimatePresence>
                    {isNotificationOpen && (
                            <motion.div 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            className="absolute flex flex-col p-2 gap-2 -left-65 top-9 border bg-bg-sand z-50 rounded-small">
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
            <button onClick={() => {setIsSettingsOpen(!isSettingsOpen); setIsNotificationOpen(false)}} className="hidden sm:block relative border rounded-full cursor-pointer">
                <Image src={"/mathias.webp"} width={45} height={45} alt="notifications"/>
                <AnimatePresence>
                    {isSettingsOpen && (
                            <motion.div 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            className="absolute flex flex-col p-2 gap-2 -left-13 top-12 border bg-bg-sand rounded-small">
                            {Settings.map((message, index) => (
                                <div key={index} className="flex flex-col gap-2 text-start hover:bg-bg-green p-3 rounded-small">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm font-medium ">{message}</p>
                                    </div>
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

export default NavBarCourse;
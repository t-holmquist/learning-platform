'use client'

import { motion } from "motion/react"
import Image from "next/image"


const Achievements = () => {


  const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
  }




  return (
    <motion.section 
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{
        staggerChildren: 0.2
    }}
    className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Latest Achievements</h2>
        <div className="flex gap-4">
          <motion.div 
          variants={variants}
          className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-large"> 
              <Image src={"/icons/medal.svg"} width={35} height={35} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">1 lesson completed</p>
          </motion.div>
          <motion.div 
          variants={variants}
          className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-large"> 
              <Image src={"/icons/hourglass.svg"} width={20} height={20} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">3-day streak</p>
          </motion.div>
          <motion.div 
          variants={variants}
          className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-large"> 
              <Image src={"/icons/wand.svg"} width={35} height={35} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">Generated 1 idea</p>
          </motion.div>
        </div>
         <button className="flex gap-2 border cursor-pointer hover:bg-bg-sandHover p-2 rounded-small w-fit bg-bg-sand">
            <p className="text-sm">See all achievements</p>
        </button>
        
    </motion.section>
  )
}

export default Achievements
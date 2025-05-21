'use client'


import Image from "next/image";
import Button from "./button";
import { motion } from "motion/react";


const RecommendedLessons = () => {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    }



  return (
    <div className="space-y-6">
        <motion.section
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            staggerChildren: 0.2
        }}
        className="flex gap-6">
            {/* Cards */}
            <motion.div 
            variants={variants}
            className="w-full sm:w-fit flex flex-col gap-4 p-6 justify-center border shadow-primary rounded-large">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </motion.div>
            <motion.div 
            variants={variants}
            className="hidden sm:flex flex-col gap-4 p-6 justify-center border shadow-primary rounded-large">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </motion.div>
            <motion.div 
            variants={variants}
            className="hidden sm:flex flex-col gap-4 p-6 justify-center border shadow-primary rounded-large">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </motion.div>
        </motion.section>
        {/* Shuffle */}
        <button className="flex gap-2 cursor-pointer border hover:bg-bg-sandHover p-2 rounded-small w-fit bg-bg-sand">
            <p className="text-sm">Shuffle lessons</p>
            <Image src={"/icons/shuffle.svg"} alt="shuffle lessons" width={15} height={15}/>
        </button>
    </div>
  )
}

export default RecommendedLessons;
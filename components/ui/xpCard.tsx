'use client'

import { motion } from "motion/react";


const XpCard = () => {
  return (
    <motion.div 
    initial={{y: 20}}
    whileInView={{y: 0}}
    className='flex flex-col px-4 p-8 gap-4 border rounded-large bg-bg-red shadow-primary'>
        <div className="flex justify-between items-center">
            <h3 className='text-xl font-bold'>Current XP:</h3>
            <p className="text-sm text-primary">1287 / 2700 XP</p>
        </div>
        <div className="flex justify-between items-center">
            <h3 className='text-xl font-bold'>Rank</h3>
            <p className="text-sm text-primary">Dreamer</p>
        </div>
        <div className="flex justify-between items-center">
            <h3 className='text-xl font-bold'>Next rank</h3>
            <p className="text-sm text-primary">Architect</p>
        </div>
    </motion.div>
  )
}

export default XpCard;
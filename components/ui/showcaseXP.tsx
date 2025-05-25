'use client'

import { motion } from 'motion/react'

export const ShowcaseXP = () => {

  return (

    <div 
    className='col-span-4 row-span-5 border space-y-4 rounded-large p-6 bg-secondary hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Get XP and rank up</h2>
        <motion.div
        initial={{y:0, rotate: 0}}
        whileHover={{y:5, rotateX: 20, rotateZ: 5}} 
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
    </div>
    
  );
}
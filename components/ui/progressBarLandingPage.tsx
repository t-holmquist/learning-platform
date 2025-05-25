'use client'

import { motion } from 'motion/react'
import { useState } from 'react';


export const ProgressBarLandingPage = () => {

    const [isActive, setIsActive] = useState(false);

  
  return (

    <div 
    onMouseEnter={() => {setIsActive(true)}}
    onMouseLeave={() => {setIsActive(false)}}
    className='col-span-4 space-y-4 row-span-3 border p-6 rounded-large bg-bg-green hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Keep track of your progress</h2>
        <div className="flex shadow-primary rounded-large">
            <motion.div 
            initial={{width: '15%'}}
            animate={isActive ? {width: '40%'} : '0%'} 
            transition={{
            type: 'spring',
            duration: 1,
            bounce: 0.3,
            }}
            className="bg-secondary rounded-l-xl p-3 border">
                <p className="text-black font-bold">{isActive ? '40%' : '15%'}</p>
            </motion.div>
            {/* Flex 1 allows the dot div to shrink and grow regardless of initial width */}
            <div className="flex-1 border bgDots border-black rounded-r-xl"></div>
        </div>
    </div>
    
  );
}
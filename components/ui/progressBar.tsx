'use client'

import { motion } from 'motion/react'
import {useState} from 'react'


export const ProgressBar = () => {
  
// Here it should calculate the amount of completed lessons in LessonData and update the width value
  // const [progress, setProgress] = useState(45);
  
  return (
    <div className="flex shadow-primary rounded-large">
        <motion.div 
        initial={{
          width: '0%'
        }}
        animate={{
          width: `40%`
        }}  
        transition={{
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        }}
        className="bg-secondary rounded-l-xl p-3 border">
          <p className="text-black font-bold">40%</p>
        </motion.div>
        {/* Flex 1 allows the dot div to shrink and grow regardless of initial width */}
        <div className="flex-1 border bgDots border-black rounded-r-xl"></div>
    </div>
  );
}
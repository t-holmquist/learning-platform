'use client'

import { motion } from 'motion/react'


export const ProgressBar = ( { completedLessons } : {
  completedLessons: string;
} ) => {
  
  // const [progress, setProgress] = useState(45);
  
  return (
    <div className="flex shadow-primary rounded-large">
        <motion.div 
        initial={{
          width: '0%'
        }}
        animate={{
          width: `${completedLessons}%`
        }}  
        transition={{
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        }}
        className="bg-secondary rounded-l-xl p-3 border">
          <p className="text-black font-bold">{completedLessons}%</p>
        </motion.div>
        {/* Flex 1 allows the dot div to shrink and grow regardless of initial width */}
        <div className="flex-1 border bgDots border-black rounded-r-xl"></div>
    </div>
  );
}
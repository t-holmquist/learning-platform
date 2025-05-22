'use client'

import { lessonData } from '@/data/data';
import { motion } from 'motion/react'


export const ProgressBar = ( { completedLessons } : {
  completedLessons?: string;
} ) => {
  
  // Calculate amount of completed lessons. Currently not connected to database, just showing the static data from lessonData.
  // If completed prop given then show that percentage or else calculate based on static data.
  let lessonsCompleted = 0;
  const totalLessons = lessonData.length;
  
  for (let i = 0; i < lessonData.length; i++) {
    if (lessonData[i].completed) {
      lessonsCompleted += 1
    } 
  }

  const staticCompletedLessons = Math.floor((lessonsCompleted / totalLessons) * 100 ).toString()
  
  return (
    <div className="flex shadow-primary rounded-large">
        <motion.div 
        initial={{
          width: '0%'
        }}
        animate={{
          width: `${completedLessons ? `${completedLessons}` : `${staticCompletedLessons}`}%`
        }}  
        transition={{
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        }}
        className="bg-secondary rounded-l-xl p-3 border">
          <p className="text-black font-bold">{completedLessons ? `${completedLessons}` : `${staticCompletedLessons}`}%</p>
        </motion.div>
        {/* Flex 1 allows the dot div to shrink and grow regardless of initial width */}
        <div className="flex-1 border bgDots border-black rounded-r-xl"></div>
    </div>
  );
}
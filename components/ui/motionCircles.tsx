'use client'

import { motion } from 'motion/react'
import React from 'react'

const MotionCircles = () => {
  return (
    <>
        <motion.figure 
        initial={{y: 10}}
        animate={{y: 20}}
        transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            duration: 5,
        }}
        className='absolute top-0 right-0 w-8 h-8 border-2 bg-accent rounded-full'>

        </motion.figure>
        <motion.figure 
        initial={{y: 20}}
        animate={{y: 10}}
        transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            duration: 5,
            delay: 0.5,
        }}
        className='absolute top-0 right-2 w-8 h-8 border-2 bg-primary rounded-full'>

        </motion.figure>
        <motion.figure 
        initial={{y: 30}}
        animate={{y: 0}}
        transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            duration: 5,
            delay: 0.9,
        }}
        className='absolute top-0 right-4 w-8 h-8 border-2 bg-bg-sand rounded-full'>
        </motion.figure>
    </>
  )
}

export default MotionCircles
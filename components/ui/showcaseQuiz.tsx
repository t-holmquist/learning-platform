'use client'

import { motion } from 'motion/react'
import { useState } from 'react';


export const ShowcaseQuiz = () => {

    const [isActive, setIsActive] = useState(false);

  return (
    <div 
    onMouseEnter={() => {setIsActive(true)}}
    onMouseLeave={() => {setIsActive(false)}}
    className='col-span-4 row-span-9 border p-6 rounded-large bg-bg-green hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Interactive Quizzes</h2>
        
    </div>
    
  );
}
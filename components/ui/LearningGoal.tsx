'use client'

import Image from "next/image";
import { useState } from "react";
import { motion } from 'motion/react';

const LearningGoal = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [learningGoal, setLearningGoal] = useState('Publish a game');

  const learningGoals = ['Publish a game', 'Learn something new', 'Learn game design'];


  const handleChangeGoal = (goal: string) => {

    setLearningGoal(goal)
    setIsOpen(false)
  }

  

  return (
    <motion.div 
    initial={{x: 20}}
    whileInView={{x: 0}}
    className='flex flex-col px-4 p-8 gap-4 border rounded-large bg-bg-green shadow-primary'>
        {/* Overlay */}
        {isOpen && (
          <div className="flex items-center justify-center fixed inset-0 overflow-hidden bg-black/40">
            {/* Select menu */}
            <motion.div
            initial={{y: 20, rotate: 5}}
            animate={{y: 0, rotate: 0}}
            className="flex flex-col items-center shadow-primaryRed gap-4 border bg-bg-green rounded-large p-6">
              <h2 className="text-2xl font-bold">Select your learning goal</h2>
              {learningGoals.map((goal) => (
                <button key={goal} onClick={() => {handleChangeGoal(goal)}} className="border cursor-pointer hover:bg-bg-sandHover p-2 rounded-small w-fit bg-bg-sand">{goal}</button>
              ))}
            </motion.div>
          </div>
        )}
        <div className="flex gap-10">
            <h3 className='text-xl font-bold'>Your learning goal</h3>
            <button onClick={() => {setIsOpen(!isOpen)}} className="flex gap-1 items-center cursor-pointer">
                <p className="text-primary">Edit</p>
                <Image src={"/icons/edit.svg"} width={15} height={15} alt="edit goal"/>
            </button>
        </div>
        <p>{learningGoal}</p>
    </motion.div>
  )
}

export default LearningGoal;
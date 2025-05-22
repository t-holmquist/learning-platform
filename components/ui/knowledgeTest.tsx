'use client'

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";


const KnowledgeTest = () => {

    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const questions = [
        {
        id: 0,
        title: "Ignoring feedback that is difficult to implement",
        correct: false,
        },
        {
        id: 1,
        title: "Prioritizing feedback based on its impact and feasibility",
        correct: true,
        },
        {
        id: 2,
        title: "Collecting feedback only through direct communication",
        correct: false,
        },
        {
        id: 3,
        title: "Addressing all feedback simultaneously without analysis",
        correct: false,
        },
    ];

    // Gets the id of the chosen question -> then checks if question with that id is true -> updates correct state
    const handleAnswer = (id: number) => {

        // Checks if user has already clicked on an answer, then stop.
        if(hasAnswered) {
            return
        }

        setHasAnswered(true)

        if(questions[id].correct) {
            setIsCorrect(true)
        }
    }

    const restart = () => {
        setHasAnswered(false)
        setIsCorrect(false)
    }


  return (
    <section className="flex flex-col gap-6 bg-bg-green p-8  rounded-large border">
        <h2 className="font-bold text-2xl p-2 border w-fit rounded-small shadow-primaryRed">Test your knowledge</h2>
        <h3 className="font-bold text-lg max-w-md">Which of the following is a crucial step in effectively handling user feedback?</h3>
        {questions.map(( {id, title, correct}, idx) => (
            <button key={idx} onClick={() => {handleAnswer(id)}} className={'border p-2 cursor-pointer rounded-small bg-bg-sand'}>
                <p>{title}</p>
            </button>
        ))}
        {/* Only render correct/wrong response if the user has answered the question */}
        {hasAnswered && (
            <div className="flex flex-col gap-2">
                <motion.p
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                >{isCorrect ? 'You are correct!' : 'Not correct, try again later'}</motion.p>
                <button onClick={() => {restart()}} className="flex gap-2 border bg-bg-sand w-fit py-1 px-2 rounded-small cursor-pointer">
                    <p className="text-sm">Restart quiz</p>
                    <Image src={"/icons/shuffle.svg"} width={12} height={12} alt="restart"/>
                </button>
            </div>
        )}
        
    </section>
  )
}

export default KnowledgeTest;
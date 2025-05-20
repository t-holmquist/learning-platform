'use client'

import Lesson from "@/components/Lesson";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


// Sidebar og Lesson skal have nuværende state (activeLesson) og mulighed for at ændre state (setActiveLesson)

const Learn = () => {


  const [activeLesson, setActiveLesson] = useState(0);

  // mobile sidebar component kan være under sidebar og være hidden på large devices
  return (
    <div className='flex'>
      <Sidebar activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
      <Lesson activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
    </div>
  )
}

export default Learn;
import { Dispatch, SetStateAction } from "react";
import { lessonData } from "@/data/data";

const ComingSoon = ( {activeLesson, setActiveLesson} : {
  activeLesson: number;
  setActiveLesson: Dispatch<SetStateAction<number>>
} ) => {


    const handleComplete = () => {
        
        if (activeLesson < lessonData.length - 1) {
            // Set current lesson complete property to true
            lessonData[activeLesson].completed = true;
            // Move one step forward in the lessons
            setActiveLesson(activeLesson + 1)
        } else {
            return
        }
    }




  return (
    <section className='flex justify-center min-h-screen w-full mb-10 sm:mb-0'>
      <div className='w-full md:w-11/12 lg:w-9/12 p-4 lg:px-6 lg:py-14'>
        <section className="flex flex-col items-center py-10 lg:px-10 lg:py-20 gap-16">
          <h1 className='text-2xl sm:text-6xl font-black'>This lesson is coming soon</h1>
          <div className="bgDots w-full sm:w-8/12 flex items-center justify-center p-20">
            <button 
            onClick={() => {handleComplete()}}
            className="cursor-pointer font-bold bg-primary px-4 py-2 rounded-small text-white hover:bg-primaryHover">{activeLesson == lessonData.length - 1 ? 'Finish Module' : 'Complete Lesson'}</button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ComingSoon;
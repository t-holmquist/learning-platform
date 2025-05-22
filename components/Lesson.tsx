
import { Dispatch, SetStateAction } from "react";
import { lessonData } from "@/data/data";
import IntroductionLesson from "./lessons/introductionLesson";
import UserTestingLesson from "./lessons/userTestingLesson";
import NavBarCourse from "./ui/navBarCourse";
import ComingSoon from "./lessons/comingSoon";


const Lesson = ( {activeLesson, setActiveLesson} : {
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
    <div className="flex relative flex-col w-full items-center">
        <NavBarCourse activeLesson={activeLesson} />
        {activeLesson == 0 && (
            <IntroductionLesson />
        )}
        {activeLesson == 1 && (
            <UserTestingLesson />
        )}
        {activeLesson > 2 && (
            <ComingSoon />
        )}
        <button 
        onClick={() => {handleComplete()}}
        className="cursor-pointer font-bold bg-primary px-4 py-2 rounded-small text-white hover:bg-primaryHover">{activeLesson == lessonData.length - 1 ? 'Finish Module' : 'Complete Lesson'}</button>
    </div>
  )
}

export default Lesson
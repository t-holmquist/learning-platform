
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


  return (
    <div className="flex relative flex-col w-full items-center">
        <NavBarCourse activeLesson={activeLesson} />
        {activeLesson == 0 && (
            <IntroductionLesson activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        )}
        {activeLesson == 1 && (
            <UserTestingLesson />
        )}
        {activeLesson > 2 && (
            <ComingSoon />
        )}
    </div>
  )
}

export default Lesson
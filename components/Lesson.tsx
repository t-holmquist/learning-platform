
import { Dispatch, SetStateAction } from "react";
import IntroductionLesson from "./lessons/introductionLesson";
import NavBarCourse from "./ui/navBarCourse";
import ComingSoon from "./lessons/comingSoon";
import UnderstandingGameComponents from "./lessons/understandingGameComponents";
import GameMechanics from "./lessons/gameMechanics";


const Lesson = ( {activeLesson, setActiveLesson} : {
    activeLesson: number;
    setActiveLesson: Dispatch<SetStateAction<number>>
} ) => {


  return (
    <div className="flex relative flex-col w-full items-center">
        {/* Mobile sidebar inside navbarCourse. NavbarCourse gives activelesson to sidebar */}
        <NavBarCourse activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        {activeLesson == 0 && (
            <IntroductionLesson activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        )}
        {activeLesson == 1 && (
            <UnderstandingGameComponents activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        )}
        {activeLesson == 2 && (
            <GameMechanics activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        )}
        {activeLesson > 2 && (
            <ComingSoon activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
        )}
    </div>
  )
}

export default Lesson
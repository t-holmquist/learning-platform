import Achievements from "@/components/ui/achievements";
import ContinueLessonCard from "@/components/ui/continueLessonCard";
import LearningGoal from "@/components/ui/LearningGoal";
import MotionCircles from "@/components/ui/motionCircles";
import NavBarDashboard from "@/components/ui/navBarDashboard";
import { ProgressBar } from "@/components/ui/progressBar";
import RecommendedLessons from "@/components/ui/recommendedLessons";
import XpCard from "@/components/ui/xpCard";



export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarDashboard />
      <section className="flex p-5 sm:p-10 flex-col gap-8 sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <h1 className="font-black text-3xl sm:text-6xl">Welcome back, Mathias</h1>
            {/* Motion circles - hidden on mobile */}
            <div className="hidden sm:block">
              <MotionCircles />
            </div>
          </div>
          <h2 className="font-bold text-2xl">Keep Learning</h2>
          <ContinueLessonCard />
          <h2 className="font-bold text-2xl">Total Course Progression</h2>
          <ProgressBar />
          <h2 className="font-bold text-2xl">Other Lessons you might like</h2>
          <RecommendedLessons />
        </div>
        <aside className="flex flex-col gap-8 w-full sm:w-fit">
          <LearningGoal />
          <XpCard />
          <Achievements />
        </aside>
      </section>
    </div>
  );
}
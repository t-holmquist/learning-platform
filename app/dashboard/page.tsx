import Achievements from "@/components/ui/achievements";
import ContinueLessonCard from "@/components/ui/continueLessonCard";
import Footer from "@/components/ui/footer";
import LearningGoal from "@/components/ui/LearningGoal";
import NavBarDashboard from "@/components/ui/navBarDashboard";
import { ProgressBar } from "@/components/ui/progressBar";
import RecommendedLessons from "@/components/ui/recommendedLessons";
import XpCard from "@/components/ui/xpCard";


export default function Dashboard() {

  return (
    // Justify-between avoids floating footer on x-large screens
    <div className="flex flex-col min-h-screen justify-between">
      <NavBarDashboard />
      <section className="flex px-5 sm:px-10 py-2 flex-col gap-8 lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <h1 className="font-black text-3xl sm:text-6xl">Welcome back, Mathias</h1>
          </div>
          <h2 className="font-bold text-2xl">Keep Learning</h2>
          <ContinueLessonCard />
          <h2 className="font-bold text-2xl">Total Course Progression</h2>
          <ProgressBar />
          <h2 className="font-bold text-2xl">Other Lessons you might like</h2>
          <RecommendedLessons />
        </div>
        <aside className="flex flex-col gap-8 w-full lg:w-fit">
          <LearningGoal />
          <XpCard />
          <Achievements />
        </aside>
      </section>
      <Footer />
    </div>
  );
}
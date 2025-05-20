import ContinueLessonCard from "@/components/ui/continueLessonCard";
import LearningGoal from "@/components/ui/LearningGoal";
import { ProgressBar } from "@/components/ui/progressBar";
import RecommendedLessons from "@/components/ui/recommendedLessons";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen p-10">
      <nav className="hidden sm:block w-full h-10 border text-center">
        Navbar placeholder
      </nav>
      <section className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-8">
          <h1 className="font-black text-6xl">Welcome back, Mathias</h1>
          <h2 className="font-bold text-2xl">Keep Learning</h2>
          <ContinueLessonCard />
          <h2 className="font-bold text-2xl">Total Course Progression</h2>
          <ProgressBar />
          <h2 className="font-bold text-2xl">Other Lessons you might like</h2>
          <RecommendedLessons />
        </div>
        <aside>
          <LearningGoal />
        </aside>
      </section>
      <footer className="w-full h-10 border text-center">
        Footer placeholder
      </footer>
    </div>
  );
}
import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson3 } from "@/app/data/KS1/year-1/football/lesson-3";

export default function FootballLesson3Page() {
  return (
    <PELessonPage
      lesson={footballLesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
    />
  );
}
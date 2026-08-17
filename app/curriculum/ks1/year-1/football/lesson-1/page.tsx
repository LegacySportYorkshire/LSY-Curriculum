import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson1 } from "@/app/data/football/lesson-1";

export default function FootballLesson1Page() {
  return (
    <PELessonPage
      lesson={footballLesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
      nextLesson={2}
    />
  );
}
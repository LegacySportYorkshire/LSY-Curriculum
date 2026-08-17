import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson2 } from "@/app/data/football/lesson-2";

export default function FootballLesson2Page() {
  return (
    <PELessonPage
      lesson={footballLesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
      previousLesson={1}
    />
  );
}
import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson4 } from "@/app/data/KS1/year-1/football/lesson-4";

export default function FootballLesson4Page() {
  return (
    <PELessonPage
      lesson={footballLesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}
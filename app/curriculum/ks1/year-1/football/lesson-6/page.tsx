import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson6 } from "@/app/data/KS1/year-1/football/lesson-6";

export default function FootballLesson6Page() {
  return (
    <PELessonPage
      lesson={footballLesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
      previousLesson={5}
    />
  );
}
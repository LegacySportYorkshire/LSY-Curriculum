import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson1 } from "@/app/data/KS1/year-2/football/lesson-1";
export default function FootballYear2Lesson1Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      nextLesson={2}
    />
  );
}
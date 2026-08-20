import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson2 } from "@/app/data/KS1/year-2/football/lesson-2";
export default function FootballYear2Lesson2Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      previousLesson={1}
      nextLesson={3}
    />
  );
}
import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson4 } from "@/app/data/KS1/year-2/football/lesson-4";

export default function FootballYear2Lesson4Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}
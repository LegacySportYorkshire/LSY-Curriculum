import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson3 } from "@/app/data/KS1/year-2/football/lesson-3";

export default function FootballYear2Lesson3Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      previousLesson={2}
      nextLesson={4}
    />
  );
}
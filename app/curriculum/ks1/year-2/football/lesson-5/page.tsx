import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson5 } from "@/app/data/KS1/year-2/football/lesson-5";

export default function FootballYear2Lesson5Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}
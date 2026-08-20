import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear2Lesson6 } from "@/app/data/KS1/year-2/football/lesson-6";

export default function FootballYear2Lesson6Page() {
  return (
    <PELessonPage
      lesson={footballYear2Lesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-2/football"
      previousLesson={5}
    />
  );
}
import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson6 } from "@/app/data/KS2/year-3/football/lesson-6";

export default function FootballYear3Lesson6Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      previousLesson={5}
    />
  );
}

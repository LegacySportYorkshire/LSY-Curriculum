import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson1 } from "@/app/data/KS2/year-3/football/lesson-1";

export default function FootballYear3Lesson1Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      nextLesson={2}
    />
  );
}

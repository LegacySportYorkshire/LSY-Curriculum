import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson3 } from "@/app/data/KS2/year-3/football/lesson-3";

export default function FootballYear3Lesson3Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      previousLesson={2}
      nextLesson={4}
    />
  );
}

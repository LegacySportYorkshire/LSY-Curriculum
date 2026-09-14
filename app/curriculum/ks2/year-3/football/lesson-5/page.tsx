import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson5 } from "@/app/data/KS2/year-3/football/lesson-5";

export default function FootballYear3Lesson5Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}

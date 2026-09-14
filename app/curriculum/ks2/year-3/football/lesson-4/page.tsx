import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson4 } from "@/app/data/KS2/year-3/football/lesson-4";

export default function FootballYear3Lesson4Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}

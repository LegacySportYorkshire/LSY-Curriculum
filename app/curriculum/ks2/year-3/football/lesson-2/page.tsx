import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear3Lesson2 } from "@/app/data/KS2/year-3/football/lesson-2";

export default function FootballYear3Lesson2Page() {
  return (
    <PELessonPage
      lesson={footballYear3Lesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-3/football"
      previousLesson={1}
      nextLesson={3}
    />
  );
}

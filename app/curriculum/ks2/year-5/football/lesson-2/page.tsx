import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson2 } from "@/app/data/KS2/year-5/football/lesson-2";

export default function FootballYear5Lesson2Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      previousLesson={1}
      nextLesson={3}
    />
  );
}

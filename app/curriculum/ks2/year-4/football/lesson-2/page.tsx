import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson2 } from "@/app/data/KS2/year-4/football/lesson-2";

export default function FootballYear4Lesson2Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      previousLesson={1}
      nextLesson={3}
    />
  );
}

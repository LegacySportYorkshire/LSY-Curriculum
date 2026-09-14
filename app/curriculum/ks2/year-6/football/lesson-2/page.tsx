import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson2 } from "@/app/data/KS2/year-6/football/lesson-2";

export default function FootballYear6Lesson2Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson2}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      previousLesson={1}
      nextLesson={3}
    />
  );
}

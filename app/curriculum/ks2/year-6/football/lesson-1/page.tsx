import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson1 } from "@/app/data/KS2/year-6/football/lesson-1";

export default function FootballYear6Lesson1Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      nextLesson={2}
    />
  );
}

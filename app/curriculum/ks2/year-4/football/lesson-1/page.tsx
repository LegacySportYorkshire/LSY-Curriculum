import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson1 } from "@/app/data/KS2/year-4/football/lesson-1";

export default function FootballYear4Lesson1Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      nextLesson={2}
    />
  );
}

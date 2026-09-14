import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson1 } from "@/app/data/KS2/year-5/football/lesson-1";

export default function FootballYear5Lesson1Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson1}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      nextLesson={2}
    />
  );
}

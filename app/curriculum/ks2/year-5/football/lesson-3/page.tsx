import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson3 } from "@/app/data/KS2/year-5/football/lesson-3";

export default function FootballYear5Lesson3Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      previousLesson={2}
      nextLesson={4}
    />
  );
}

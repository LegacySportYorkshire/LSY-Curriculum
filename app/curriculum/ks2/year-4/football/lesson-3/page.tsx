import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson3 } from "@/app/data/KS2/year-4/football/lesson-3";

export default function FootballYear4Lesson3Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      previousLesson={2}
      nextLesson={4}
    />
  );
}

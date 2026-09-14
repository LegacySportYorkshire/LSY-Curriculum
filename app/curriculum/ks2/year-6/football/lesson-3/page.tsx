import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson3 } from "@/app/data/KS2/year-6/football/lesson-3";

export default function FootballYear6Lesson3Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson3}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      previousLesson={2}
      nextLesson={4}
    />
  );
}

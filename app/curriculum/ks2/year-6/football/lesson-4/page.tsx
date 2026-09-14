import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson4 } from "@/app/data/KS2/year-6/football/lesson-4";

export default function FootballYear6Lesson4Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}

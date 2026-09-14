import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson5 } from "@/app/data/KS2/year-6/football/lesson-5";

export default function FootballYear6Lesson5Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}

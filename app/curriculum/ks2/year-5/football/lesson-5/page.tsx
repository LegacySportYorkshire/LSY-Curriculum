import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson5 } from "@/app/data/KS2/year-5/football/lesson-5";

export default function FootballYear5Lesson5Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}

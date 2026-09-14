import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson5 } from "@/app/data/KS2/year-4/football/lesson-5";

export default function FootballYear4Lesson5Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}

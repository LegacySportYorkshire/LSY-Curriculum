import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson4 } from "@/app/data/KS2/year-4/football/lesson-4";

export default function FootballYear4Lesson4Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}

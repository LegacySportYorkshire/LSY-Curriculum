import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson4 } from "@/app/data/KS2/year-5/football/lesson-4";

export default function FootballYear5Lesson4Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson4}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      previousLesson={3}
      nextLesson={5}
    />
  );
}

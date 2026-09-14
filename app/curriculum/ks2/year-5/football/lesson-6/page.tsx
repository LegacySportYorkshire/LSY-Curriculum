import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear5Lesson6 } from "@/app/data/KS2/year-5/football/lesson-6";

export default function FootballYear5Lesson6Page() {
  return (
    <PELessonPage
      lesson={footballYear5Lesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-5/football"
      previousLesson={5}
    />
  );
}

import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear4Lesson6 } from "@/app/data/KS2/year-4/football/lesson-6";

export default function FootballYear4Lesson6Page() {
  return (
    <PELessonPage
      lesson={footballYear4Lesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-4/football"
      previousLesson={5}
    />
  );
}

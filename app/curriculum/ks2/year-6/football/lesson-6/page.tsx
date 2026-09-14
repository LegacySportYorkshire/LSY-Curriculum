import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballYear6Lesson6 } from "@/app/data/KS2/year-6/football/lesson-6";

export default function FootballYear6Lesson6Page() {
  return (
    <PELessonPage
      lesson={footballYear6Lesson6}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks2/year-6/football"
      previousLesson={5}
    />
  );
}

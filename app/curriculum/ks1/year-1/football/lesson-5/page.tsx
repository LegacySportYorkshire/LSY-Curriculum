import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { footballLesson5 } from "@/app/data/KS1/year-1/football/lesson-5";

export default function FootballLesson5Page() {
  return (
    <PELessonPage
      lesson={footballLesson5}
      activityName="Football"
      activityIcon="⚽"
      routeBase="/curriculum/ks1/year-1/football"
      previousLesson={4}
      nextLesson={6}
    />
  );
}
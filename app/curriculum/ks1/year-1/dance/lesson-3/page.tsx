import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson3 } from "@/app/data/dance/lesson-3";

export default function Lesson3Page() {
  return (
    <PELessonPage
      lesson={lesson3}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-1/dance"
      previousLesson={2}
      nextLesson={4}
    />
  );
}
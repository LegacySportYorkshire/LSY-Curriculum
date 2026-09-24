import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson3 } from "@/app/data/KS1/year-2/Dance/lesson-3";
export default function Lesson3Page() {
  return (
    <PELessonPage
      lesson={lesson3}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-2/dance"
      previousLesson={2}
      nextLesson={4}
    />
  );
}
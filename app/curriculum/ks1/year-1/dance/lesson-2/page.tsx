import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson2 } from "@/app/data/KS1/year-1/Dance/lesson-2";
export default function Lesson2Page() {
  return (
    <PELessonPage
      lesson={lesson2}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-1/dance"
      previousLesson={1}
      nextLesson={3}
    />
  );
}
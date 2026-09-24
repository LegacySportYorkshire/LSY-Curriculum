import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson4 } from "@/app/data/KS1/year-2/Dance/lesson-4";
export default function Lesson4Page() {
  return (
    <PELessonPage
      lesson={lesson4}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-2/dance"
      previousLesson={3}
      nextLesson={5}
    />
  );
}
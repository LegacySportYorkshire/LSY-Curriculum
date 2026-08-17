import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson1 } from "@/app/data/dance/lesson-1";

export default function Lesson1Page() {
  return (
    <PELessonPage
      lesson={lesson1}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-1/dance"
      nextLesson={2}
    />
  );
}
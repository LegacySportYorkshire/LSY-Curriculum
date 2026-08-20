import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson5 } from "@/app/data/KS1/year-1/Dance/lesson-5";

export default function Lesson5Page() {
  return (
    <PELessonPage
      lesson={lesson5}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-1/dance"
      previousLesson={4}
    />
  );
}
import PELessonPage from "@/app/components/curriculum/PELessonPage";
import { lesson5 } from "@/app/data/KS1/year-2/Dance/lesson-5";

export default function Lesson5Page() {
  return (
    <PELessonPage
      lesson={lesson5}
      activityName="Dance"
      activityIcon="💃"
      routeBase="/curriculum/ks1/year-2/dance"
      previousLesson={4}
    />
  );
}
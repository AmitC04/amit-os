import { PageTransition } from "@/components/shell/PageTransition";
import { ResumeModule } from "@/components/modules/resume/ResumeModule";

export default function ResumePage() {
  return (
    <PageTransition>
      <ResumeModule />
    </PageTransition>
  );
}

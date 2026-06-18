import { PageTransition } from "@/components/shell/PageTransition";
import { ProjectsModule } from "@/components/modules/projects/ProjectsModule";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectsModule />
    </PageTransition>
  );
}

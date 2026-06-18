import { PageTransition } from "@/components/shell/PageTransition";
import { ResearchModule } from "@/components/modules/research/ResearchModule";

export default function ResearchPage() {
  return (
    <PageTransition>
      <ResearchModule />
    </PageTransition>
  );
}

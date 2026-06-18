import { PageTransition } from "@/components/shell/PageTransition";
import { SkillsModule } from "@/components/modules/skills/SkillsModule";

export default function SkillsPage() {
  return (
    <PageTransition>
      <SkillsModule />
    </PageTransition>
  );
}

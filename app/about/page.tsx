import { PageTransition } from "@/components/shell/PageTransition";
import { AboutModule } from "@/components/modules/about/AboutModule";

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutModule />
    </PageTransition>
  );
}

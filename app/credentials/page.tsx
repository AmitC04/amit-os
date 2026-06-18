import { PageTransition } from "@/components/shell/PageTransition";
import { CredentialsModule } from "@/components/modules/credentials/CredentialsModule";

export default function CredentialsPage() {
  return (
    <PageTransition>
      <CredentialsModule />
    </PageTransition>
  );
}

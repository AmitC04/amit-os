import { PageTransition } from "@/components/shell/PageTransition";
import { ContactModule } from "@/components/modules/contact/ContactModule";

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactModule />
    </PageTransition>
  );
}

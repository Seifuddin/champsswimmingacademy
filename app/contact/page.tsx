import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";
import ContactVisit from "@/components/contact/ContactVisit";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactVisit />
    </main>
  );
}
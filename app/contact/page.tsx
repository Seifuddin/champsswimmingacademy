import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactVisit from "@/components/contact/ContactVisit";


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
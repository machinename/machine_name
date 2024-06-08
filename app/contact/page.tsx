import ContactForm from "../components/contact_form";

export const metadata = {
  title: 'Contact - machinename.dev',
}


export default function Contact() {
  return (
    <section>
      {/* <h1 className="mb-8 tracking-tighter">Contact</h1> */}
      <ContactForm />
    </section>
  );
}

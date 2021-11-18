import ContactForm from "./client/ContactForm";
import Section from "./shared/components/Section/Section";
import ContactList from "./client/ContactList";
import Filter from "./client/Filter";

import { GlobalStyles } from "./shared/Styles/GlobalStyles";
import s from './shared/Styles/App/App.module.css';

function App() {


  // useEffect(() => {
  //   const contactsFromLocalSt = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(contactsFromLocalSt);
  //   if (parseContacts) {
  //     setContacts(parseContacts)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);

  return (
    <div className={s.appWrapper} >
      <GlobalStyles />
      <ContactForm />
      <Section title="My Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;


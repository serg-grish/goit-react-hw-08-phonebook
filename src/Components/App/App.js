import { ContactList } from '../ContactList';
import InputForm from '../ContactForm';
import Filter from '../Filter';
import './app.scss';



export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
  </>
  );
}

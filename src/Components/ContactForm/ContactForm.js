import { contacstOperations } from "../../redux/contacts/contact-operations";
import { contactsSelectors } from "../../redux/contacts/contact-selectors";
import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { useState } from 'react';
import PropTypes from "prop-types"

function ContactForm() {
  const [stateName, setStateName] = useState('');
  const [stateNumber, setStateNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChangeName = e => {
    setStateName(e.target.value)
    };
  const handleChangeNunber = e => {
    setStateNumber(e.target.value);
    };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.map(contact => contact.name.toLowerCase() === stateName.toLowerCase(),
      )
    ) {
      return alert(`Sorry,${stateName} is alredy in contacts`);
    }

  dispatch(contacstOperations.addContact(stateName, stateNumber));
  setStateName('');
  setStateNumber('');
  };
  


  return (
      <form className={s.form} onSubmit={handleSubmit} >
        <label className={s.label} >
          Name
          <input 
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={stateName}
            onChange={handleChangeName}
          />
        </label>
        <label className={s.label} >
          Number
          <input 
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={stateNumber}
            onChange={handleChangeNunber}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
          </button>
      </form>
  );
}

  ContactForm.protoTypes = {
  stateName: PropTypes.string.isRequired,
  stateNumber: PropTypes.string.isRequired,
  }

  export default ContactForm;



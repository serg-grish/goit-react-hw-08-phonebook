import { contacstOperations, contactsSelectors } from "redux/contacts";
import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { useState } from 'react';
import PropTypes from "prop-types"

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  dispatch

  

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit} >
        <label className={s.label} >
          Name
          <input className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label} >
          Number
          <input className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          <span className={s.btnText}>Add contact</span>
          </button>
      </form>
    </div>
  )
};

  export default ContactForm;



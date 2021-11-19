import { getVisibleContact } from '../../redux/contacts/contactsSelectors';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactListItem/ContactListItem'
import { useSelector, useDispatch } from 'react-redux';
import s from "./ContactList.module.css";
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function ContactList() {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul className={s.list}> {
            contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
          
                />
            ))
        }
       
            </ul> 
    );
};
ContactList.propTypes = {
    contacts: PropTypes.array,
}
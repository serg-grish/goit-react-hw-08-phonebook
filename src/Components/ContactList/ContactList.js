import { contactOperations, contactSelectors } from 'redux/contact';
import { useSelector, useDispatch } from 'react-redux';
import s from "./ContactList.module.css";
import { useEffect } from 'react';

const ContactList = () => {
    const contacts = useSelector(contactSelectors.getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactOperations.fetchContacts());
    }, [dispatch]);

    const onDeleteContacts = id => dispatch(contactOperations.DeleteContact(id));

    return (
        <ul className={s.list}> 
        {contacts.map(({ id, name, number }) => {
            return (
                <li className={s.list__item} key={id}>
                    {name} ; {number}
                    <button
                    type="button"
                    className={s.btn}
                    onClick={() => onDeleteContacts(id)}
                    >
                        Delete
                    </button>
                </li>
            );
          })}
        </ul>
    );
};

export default ContactList;
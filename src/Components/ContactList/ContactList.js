import { contactOperations, contactSelectors } from 'redux/contact';
import { useSelector, useDispatch } from 'react-redux';
import s from "./ContactList.module.css";
import { useEffect } from 'react';

const ContactList() {
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
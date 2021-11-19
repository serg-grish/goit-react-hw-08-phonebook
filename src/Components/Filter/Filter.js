import { filterContacts } from "../../redux/contacts/contactsActions";
import { useDispatch, useSelector } from "react-redux";
import s from './Filter.module.css';
import shortid from "shortid";

export default function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filteredID = shortid.generate();
    return (
        <>
            <label htmlFor={filteredID} className={s.filterLabel}>
            <h3>Find contacts by name</h3>
                <input type="text"
                    id={filteredID}
                    value={filter}
                    onChange={e => dispatch(filterContacts(e.target.value))}
                    className={s.filterInput}
                
                />
            
            </label>
        </>
    );
};


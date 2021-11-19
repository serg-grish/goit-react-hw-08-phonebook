import { contactSelectors, changeFilter } from "redux/contact";
import { useDispatch, useSelector } from "react-redux";
import styles from './Filter.module.css';


const Filter = () => {
    const value = useSelector(contactSelectors.getFilter);
    const dispatch = useDispatch();
    return (
            <label className={styles.label}>
            <h3>Find contacts by name</h3>
                <input 
                    type="text"
                    value={value}
                    onChange={e => dispatch(changeFilter(e.target.value))}
                    className={styles.input}
                    placeholder="Find your contact"
        autoComplete="off"
                />
            </label>
    );
};

export default Filter;
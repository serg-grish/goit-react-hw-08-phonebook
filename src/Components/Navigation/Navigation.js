import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { NavLink } from "react-router-dom";

const styles = {
    link: {
        display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F', 
    },
};

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggerdIn);

    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
                HOME
            </NavLink>

            {isLoggedIn && (
            <NavLink to="/contact" exact styles={styles.link}
            activeStyle={styles.activeLink}>
                PHONEBOOK
            </NavLink>
            )}
        </nav>
    );
}
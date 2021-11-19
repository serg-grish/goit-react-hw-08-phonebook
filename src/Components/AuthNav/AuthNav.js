import { NavLink } from 'react-router-dom';

const styles = {
    link: {
        display: 'inline-block',
        textDercoation: 'none',
        padding: 12,
        fontWeight: 700,
        color: 'rgb(59, 11, 73)',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

export default function AuthNav() {
    return (
        <div>
            <NavLink
            to="/register"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
            >
            Sing Up
            </NavLink>

            <NavLink
            to="/login"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
            >
            Log In
            </NavLink>
        </div>
    )
}
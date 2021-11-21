import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";

const styles = {
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAling: 'center',
    },
};

export default function HomeView() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const userName = useSelector(authSelectors.getUserName);

    return (
        <>
        {isLoggedIn ? (
            <div style={styles.container}>
                <p style={styles.title}>Hi, {userName}!</p>
                <p style={styles.title}>We happy to see u!</p>
            </div>
        ) : (
            <div style={styles.container}>
                <p style={styles.title}>Welcome to Phonebook App</p>
                <p style={styles.title}>Register and use the application without restrictions</p>
            </div>
        )}
        </>
    );
}

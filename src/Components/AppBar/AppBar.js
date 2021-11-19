import { useSelector } from "react-redux";

import AuthNav from "component/AuthNav";
import Navigation from "component/Navigation";
import UserMenu from "component/UserMenu";
import { authSelectors } from "redux/auth";

const styles = {
    header: {
        display: 'flex',
        justifuContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
};

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav style={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
    );
}
import { useSelector } from "react-redux";

import AuthNav from "component/AuthNav";
import Navigation from "component/Navigation";
import UserMenu from "component/UserMenu";
import { authSelectors } from "redux/auth";

const style = {
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
        <nav style={style.header}>
            <Navigation />
            {isLoggerIn ? <UserMenu /> : <AuthNav />}
        </nav>
    );
}
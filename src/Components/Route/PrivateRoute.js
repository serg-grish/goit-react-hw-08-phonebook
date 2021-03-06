import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { authSelectors } from "../../redux/auth/auth-selectors";

export default function PrivateRoute({
    children,
    redirectTo = '/',
    ...routeProps
}) {
    console.log(routeProps);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect ro={redirectTo} />}
        </Route>
    );
}
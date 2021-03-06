import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { authSelectors } from "../../redux/auth/auth-selectors";

export default function PublicRoute({
    children,
    redirectTo = '/',
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    console.log('shouldRedirect: ', shouldRedirect);
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect ro={redirectTo} /> : children}
        </Route>
    );
}
import styles from './app.scss';

import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import PrivateRoute from './Components/Route/PrivateRoute';
import PublicRoute from './Components/Route/PublicRoute';

const HomeView = lazy(() => import('./view/HomeView/HomeView.js'));
const RegisterView = lazy(() => import('./view/RegisterView/RegisterView.js'));
const LoginView = lazy(() => import('./view/LoginView/LoginView.js'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <h1 className={styles.title__phonebook}>Phonebook</h1>
              <ContactForm />
              <h2 className={styles.title__contacts}>Contacts</h2>
              <Filter />
              <ContactList />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
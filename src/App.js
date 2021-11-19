import { ContactList } from './Components/ContactList';
import InputForm from './Components/ContactForm';
import Filter from './Components/Filter';
import s from './app.scss';

import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelectors } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import Container from 'react-dom';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelectors(authSelectors.isFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>LOADING...</p>}>
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
              <h1 className={s.tittle__phonebook}>Phonebook</h1>
              <InputForm />
              <h2 className={s.tittle__contacts}>Contacts</h2>
              <Filter />
              <ContactList />
            </PrivateRoute>

          </Suspense>
        </Switch>
      </Container>
    )
  );
}

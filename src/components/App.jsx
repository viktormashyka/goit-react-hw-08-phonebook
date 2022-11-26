import React from 'react';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

// import { ContactForm } from './ContactsForm/ContactsForm';
// import { FilterBox } from './ContactsFilter/ContactsFilter';
// import { ContactListBox } from './ContactsList/ContactsList';
// import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// return (
//   <div>
//     <Layout>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       {error && <b>{error}</b>}
//       {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
//       {contacts.length > 0 && !isLoading && (
//         <div>
//           <h2>Contacts</h2>
//           <FilterBox />
//           <ContactListBox />
//         </div>
//       )}
//       <ToastContainer />
//     </Layout>
//   </div>
// );

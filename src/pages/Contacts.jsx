import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactListBox } from 'components/ContactsList/ContactsList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { ContactForm } from 'components/ContactsForm/ContactsForm';
import { FilterBox } from 'components/ContactsFilter/ContactsFilter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {/* <TaskEditor /> */}
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <FilterBox />
      <ContactListBox />
    </>
  );
}

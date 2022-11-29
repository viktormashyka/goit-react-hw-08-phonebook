import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';

export const ContactListBox = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  console.log('contacts: ', contacts);
  console.log('filter: ', filter);
  console.log('visibleContacts: ', visibleContacts);

  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

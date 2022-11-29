import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import css from './ContactsForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    for (const contact of contacts) {
      if (contact.name === name) {
        toast.info('This contact exist in your list');
        // console.log('This contact exist in your list');
        return;
      }
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <br />
        <input
          type="text"
          name="name"
          // placeholder="Enter contact's name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label className={css.label} htmlFor="">
        Number
        <br />
        <input
          type="tel"
          name="number"
          // placeholder="Enter contact's number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
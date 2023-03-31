// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';
// import { add, remove } from 'redux/sliceContact';
// const CONTATCTS = 'contatcts';
// const initialContacts = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];
export const App = () => {
  const dispatch = useDispatch();
  // const contR = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filter);
  // const [contacts, setContacts] = useState(
  // () => JSON.parse(window.localStorage.getItem(CONTATCTS)) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   window.localStorage.setItem(CONTATCTS, JSON.stringify(contacts));
  // }, [contacts]);

  const handleChange = evt => {
    dispatch(qwery(evt.currentTarget.value));
    // setFilter(evt.currentTarget.value);
  };
  // const addContact = (nameContact, number) => {
  //   if (
  //     contacts.some(
  //       value =>
  //         value.name.toLocaleLowerCase() === nameContact.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(`${nameContact} is alredy in contacts`);
  //   } else {
  //     setContacts(prevCont => {
  //       return [
  //         ...prevCont,
  //         { id: nanoid(), name: nameContact, number: number },
  //       ];
  //     });
  //   }
  // };
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  // const delContact = id => {
  //   const filtred = contacts.filter(item => item.id !== id);
  //   // setContacts(filtred);
  // };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {/* <span>{contR}</span>
      <button onClick={() => dispatch(add(5))}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <input
        value={filtered}
        onChange={e => dispatch(qwery(e.target.value))}
        type="text"
      /> */}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filtered} />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

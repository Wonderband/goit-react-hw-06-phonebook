import React, { useState, useEffect } from 'react';
import { Section } from '../Section/Section';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, setFilter } from 'redux/reducer';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.fltr);
  console.log(filter);

  // const [contacts, setContacts] = useState(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   if (localContacts && JSON.parse(localContacts).length)
  //     return JSON.parse(localContacts);
  //   else
  //     return [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ];
  // });

  // const [filterName, setFilterName] = useState('');

  // useEffect(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   console.log(localContacts);
  //   if (localContacts) setContacts(JSON.parse(localContacts));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    // if (
    //   contacts.find(
    //     contact =>
    //       contact.name.toLowerCase() ===
    //       e.target.name.value.toLowerCase().trim()
    //   )
    // ) {
    //   alert(`${e.target.name.value} is already in contacts`);
    //   return;
    // }
    const newContact = {
      name: e.target.name.value.trim(),
      number: e.target.number.value,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    // setContacts(contacts => [...contacts, newContact]);
    e.currentTarget.reset();
  };

  const filterHandle = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  // const onDelete = idToDelete => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== idToDelete)
  //   );
  // };

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm handleSubmit={handleSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={filter} filterHandle={filterHandle} />
        <ContactList
        // filter={filterName}
        // contacts={contacts}
        // onDelete={onDelete}
        />
      </Section>
    </div>
  );
};

import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { addContact } from 'redux/contact/operations';
import { selectContacts } from 'redux/contact/selectors';

import PropTypes from 'prop-types';
import { HiUserAdd } from 'react-icons/hi';
import { NameLabel, AddContactBtn, Input } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneNumberInputId = nanoid();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
      // id: nanoid(),
    };

    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    checkContact
      ? alert(`${name} is already in contact`)
      : dispatch(addContact(contact));

    resetSubmit();
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <NameLabel htmlFor={nameInputId}>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
            placeholder="Please write name"
          />
        </NameLabel>
        <label htmlFor={phoneNumberInputId}>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            id={phoneNumberInputId}
            placeholder="Please write number"
          />
        </label>
        <AddContactBtn tupe="submit">
          <HiUserAdd size={16} />
        </AddContactBtn>
      </form>
    </div>
  );
}

Phonebook.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

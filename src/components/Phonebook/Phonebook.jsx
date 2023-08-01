import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { HiUserAdd } from 'react-icons/hi';
import { NameLabel, AddContactBtn, Input } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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

      case 'phoneNumber':
        setPhoneNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      phoneNumber,
      id: nanoid(),
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
    setPhoneNumber('');
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
          Phone number:
          <Input
            type="tel"
            name="phoneNumber"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phoneNumber}
            onChange={handleChange}
            id={phoneNumberInputId}
            placeholder="Please write number"
          />
        </label>
        <AddContactBtn tupe="submit">
          <HiUserAdd size={16} fill="#7f24a8" />
        </AddContactBtn>
      </form>
    </div>
  );
}

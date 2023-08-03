// ContactsPage.jsx
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contact/operations';
// import { selectIsLoading } from 'redux/contact/selectors';

import Phonebook from 'components/Phonebook/Phonebook';
import SearchInput from 'components/SearchInput/SearchInput';
import ContactList from 'components/ContactList/ContactList';
// import SkeletonItem from 'components/Skeleton/SkeletonItem';

export default function ContactsPage() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <title>Your contacts</title>

      <Phonebook />
      <SearchInput />
      <ContactList />
    </div>
  );
}

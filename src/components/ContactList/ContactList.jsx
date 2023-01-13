import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ListItem } from './ListItem/ListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsArray);
  const filter = useSelector(state => state.filter.fltr);
  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter))
        .map(item => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

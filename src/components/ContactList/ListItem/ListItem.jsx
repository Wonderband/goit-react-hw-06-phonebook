import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ListItem.module.css';
import { deleteContact } from 'redux/reducer';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.liFlex}>
      {name} : {number}
      <button type="button" onClick={e => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

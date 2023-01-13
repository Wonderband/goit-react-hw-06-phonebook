import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, filterHandle }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className={css.input}
        title="Find the name!"
        value={filter}
        onChange={filterHandle}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterHandle: PropTypes.func.isRequired,
};

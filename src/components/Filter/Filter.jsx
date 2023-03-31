import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleChange, filter }) => {
  return (
    <>
      <label htmlFor="">
        <span>Find contacts by name</span>
      </label>
      <input
        className={css.input}
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

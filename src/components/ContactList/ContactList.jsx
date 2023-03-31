import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ listContact, delContact }) => {
  return listContact.map(cont => {
    return (
      <p key={cont.id} className={css.listItem}>
        <span className={css.phone}>
          {cont.name}: {cont.number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            delContact(cont.id);
          }}
        >
          Delete
        </button>
      </p>
    );
  });
};

ContactList.propTypes = {
  delContact: PropTypes.func.isRequired,
  listContact: PropTypes.array.isRequired,
};

import PropTypes from 'prop-types';
// import styles from './contactList.module.css';
export default function ContactList({ contacts}) {
  return (
    <ul>
      {contacts.map(({ id, name}) => (
        <li key={id} id={id}>
          <p>
            {name}
          </p>
          {/* <button className={styles.btn} onClick={() => onClick(id)}>
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
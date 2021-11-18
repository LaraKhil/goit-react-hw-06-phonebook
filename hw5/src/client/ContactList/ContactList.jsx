import buttonStyle from '../../shared/Styles/Button/Button.module.css';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/actions';

function PhoneList({ contacts, removeContact }) {

    const onClick = ({ target }) => {
        const { id } = target;
        removeContact(id);
    }

    return (
        <ul className={s.contactWrapper}>
            {contacts.map(({ name, number, id }) => <li
                className={s.contactItem}
            >{name} {number}
                <button id={id} onClick={onClick} className={buttonStyle.button}>Delete</button>
            </li>)}
        </ul>
    )
}

PhoneList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ),
    removeContact: PropTypes.func,
}

const mapStateToProps = (state) => {
    if (state.filterName) return { contacts: state.contacts.filter(({ name }) => name.toLowerCase().includes(state.filterName)) };

    return {
        contacts: state.contacts
    }
};


export default connect(mapStateToProps, { removeContact })(PhoneList);
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilterName } from '../../redux/actions';

function Filter({ setFilterName, filterName }) {

    const addFilterValue = ({ target }) => {
        const { value } = target;
        setFilterName(value);
    }

    return (
        <>
            <input
                className={s.filterInput}
                type="text"
                value={filterName}
                onChange={addFilterValue}
                placeholder='Find contacts by name '
            />
        </>
    )
}

Filter.propTypes = {
    setFilterName: PropTypes.func,
    filterName: PropTypes.string,
}

const mapStateToProps = ({ filterName }) => {
    return {
        filterName: filterName,
    }
};

export default connect(mapStateToProps, { setFilterName })(Filter);
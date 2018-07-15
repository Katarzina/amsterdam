import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateFilterEstablishment, updateTitle} from '../action'
import {stateSelector, currentSelector} from '../reducer/establishment'
import { filterByTitle } from '../share/share'

class SearchBarTitle extends Component {

    PropTypes = {
        updateFilterEstablishment: PropTypes.func,
        establishmentSelect: PropTypes.array
    }

    dataSearch = e => {
        const { establishment: {dataUnchangable, establishmentSelect}, updateFilterEstablishment, updateTitle } = this.props;
        const value = e.target.value.toLowerCase();
        const filterEstablishment = filterByTitle(dataUnchangable, value);
        updateTitle(value);
        updateFilterEstablishment(filterEstablishment);
    };

    render() {
        return (
            <div>
                <input
                    value={this.value}
                    type="text"
                    placeholder="Search title..."
                    onChange={this.dataSearch}
                />
            </div>
        );
    }
};

export default connect((state) => ({
    establishment: stateSelector(state),
    establishmentSelect: currentSelector(state),
}),{updateFilterEstablishment, updateTitle})(SearchBarTitle)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateFilterEstablishment} from '../action'
import {stateSelector, currentSelector} from '../reducer/establishment'


class SearchBarTitle extends Component {

    PropTypes = {
        updateFilterEstablishment: PropTypes.func,
        establishmentSelect: PropTypes.array
    }

    dataSearch = e => {
        const { establishment: {dataUnchangable}, updateFilterEstablishment } = this.props;
        const value = e.target.value.toLowerCase();
        let filterEstablishment = dataUnchangable.filter( ({title}) => {
            return title.toLowerCase().includes(value);
        });
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
}),{updateFilterEstablishment})(SearchBarTitle)
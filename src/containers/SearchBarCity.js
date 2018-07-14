import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateFilterEstablishment} from '../action'
import {stateSelector, currentSelector} from '../reducer/establishment'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// array Cities from json object

const getArrayCity = ( data ) => {
    let arrayCity = [];
    let resultArrayCity  = data.map( ( {location: {city}}) => {
        return city;
    });
    resultArrayCity.forEach( item => {
            (resultArrayCity.includes(item) && !arrayCity.includes(item)) ? arrayCity.push(item): null;
        }
    )
    return arrayCity
}

class SearchBarCity extends Component {

    state = {
        selectedOption: '',
    }

    PropTypes = {
        updateFilterEstablishment: PropTypes.func,
        establishmentSelect: PropTypes.array
    }

    handleChange = (selectedOption) => {
        const {establishment: {dataUnchangable, establishmentSelect}, updateFilterEstablishment} = this.props;
        this.setState({selectedOption});
        let joinEstablishment = [], filterEstablishment = [];
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            selectedOption.forEach((option) => {

                filterEstablishment = dataUnchangable.filter(({location: {city}}) => {
                    return city.toLowerCase().includes(option.value.toLowerCase());
                })

                Array.prototype.push.apply(joinEstablishment, filterEstablishment);

            })

            updateFilterEstablishment(joinEstablishment);
        }
    }

    render() {
        const { establishment: { dataUnchangable } } = this.props;
        const cities = getArrayCity(dataUnchangable);
        const { selectedOption } = this.state;
        const optionsValue = [];
        cities.forEach( item => optionsValue.push({ value: item, label: item }))
       // console.log(optionsValue)
        return (
            <div>
            <Select
                name="form-field-name"
                value={selectedOption}
                onChange={this.handleChange}
                multi={true}
                options={optionsValue}
                placeholder="Select your cities..."
            />
            </div>
        );
    }
};

export default connect((state) => ({
    establishment: stateSelector(state),
    establishmentSelect: currentSelector(state),
}),{updateFilterEstablishment})(SearchBarCity)
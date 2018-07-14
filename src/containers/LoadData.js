import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Loading} from '../components/Loading/Loading'
import {receiveQuery} from '../action/index'
import DATA_ESTABLISHMENT from '../data/establishment-data.json'
import DATA_EVENT from '../data/events-data.json'
import SearchBarTitle from './SearchBarTitle'
import SearchBarCity from './SearchBarCity'
import SortTable from './SortTable'
import {
    REQUEST, ESTABLISHMENT, EVENT
} from '../constants'
//import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


class LoadData extends React.Component {

    static propTypes = {
        establishment: PropTypes.object.isRequired,
        receiveQuery: PropTypes.func,
        error: PropTypes.string,
    }

    componentDidMount() {
        const { establishment: { establishmentSelect, eventSelect, isLoaded } = {}, receiveQuery} = this.props
        if (!establishmentSelect && !isLoaded) receiveQuery( REQUEST + ESTABLISHMENT , DATA_ESTABLISHMENT )
        if (!eventSelect) receiveQuery( REQUEST + EVENT , DATA_EVENT )
    }

    render() {

        const { establishment: {establishmentSelect, isLoaded} = {}} = this.props

        if (!isLoaded) {
            return <h2><Loading /></h2>
        }

        if (!establishmentSelect) {
            return null
        }

        return (
            <div>
                <SearchBarTitle />
                <SearchBarCity />
                <SortTable />
            </div>
        );
    }
}

export default connect(({establishment}) => ({
    establishment
}),{receiveQuery})(LoadData)


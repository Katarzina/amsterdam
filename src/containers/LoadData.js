import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
//import {Loading} from '../components/Loading/Loading'
import {receiveQuery} from '../action/index'
import DATA_ESTABLISHMENT from '../data/establishment-data.json'
import DATA_EVENT from '../data/events-data.json'
import SearchBarTitle from './SearchBarTitle'
import SearchBarCity from './SearchBarCity'
import SortTable from './SortTable'
import {
    REQUEST, ESTABLISHMENT, EVENT
} from '../constants'

class LoadData extends React.Component {

    static propTypes = {
        establishment: PropTypes.object.isRequired,
        receiveQuery: PropTypes.func,
        error: PropTypes.string,
    }

    componentDidMount() {
        const { establishment: { establishmentSelect } = {}, receiveQuery} = this.props
        if (!establishmentSelect) receiveQuery( REQUEST + ESTABLISHMENT , DATA_ESTABLISHMENT )
        receiveQuery( REQUEST + EVENT , DATA_EVENT )
    }

    render() {

        const { establishment: {establishmentSelect} = {}} = this.props

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


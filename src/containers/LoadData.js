import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SortTable from './SortTable'
import {Loading} from '../components/Loading/Loading'
import {receiveQuery} from '../action/index'
import SearchBarTitle from './SearchBarTitle'
import SearchBarCity from './SearchBarCity'
import DATA_ESTABLISHMENT from '../data/establishment-data.json'


class LoadData extends React.Component {

    static propTypes = {
        establishment: PropTypes.object.isRequired,
        receiveQuery: PropTypes.func,
        error: PropTypes.string,
    }

    componentDidMount() {
        const { establishment: { establishmentSelect, isLoaded } = {}, receiveQuery} = this.props
        if (!establishmentSelect && !isLoaded) receiveQuery( DATA_ESTABLISHMENT )
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
            <div className="col-md-8 table-sort">
                <SearchBarTitle />
                <SearchBarCity />
                <SortTable />
            </div>
            <div className="col-md-4">
                {/* <InfoEstablishment /> */}
            </div>
            </div>
        );

    }
}

export default connect(({establishment}) => ({
    establishment
}),{receiveQuery})(LoadData)


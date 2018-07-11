import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { updateArrayEstablishment } from '../action'
import {connect} from 'react-redux'
import {stateSelector, currentSelector} from '../reducer/establishment'
import InfoEstablishment from '../components/Info/InfoEstablishment'

const Rate = ({children}) => ( <td className="rate">{children}</td> )

class SortTable extends Component {
    /*static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    sorted = { title: true, city: true, zipcode: true, startdate: true  }

    sort(type) {
        const { establishmentSelect, updateArrayEstablishment } = this.props,
        // get sorting order
        isSorted = this.sorted[type];

        // set direction
        let direction = isSorted ? 1 : -1;

        // create new data array for update state
        // and make sorting
        const sorted = [].slice.call(establishmentSelect).sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        })
        this.sorted[type] = !isSorted;

        updateArrayEstablishment(sorted)
    }

    tableHandle = (...rest) => {
       // console.log(...rest)
        InfoEstablishment(...rest)

    }

    render() {

        const { establishment: {establishmentSelect} } = this.props
        console.log(establishmentSelect);
        return (

                <table className="currency-table">
                    <thead>
                    <tr>
                    <th onClick={() => this.sort('title')}><span className="title sort" title="Sorting">Title</span></th>
                    <th className="title">City</th>
                    <th onClick={() => this.sort('zipcode')}><span className="title sort" title="Sorting">Post Code</span></th>
                    <th className="title">Address</th>
                    <th onClick={() => this.sort('startdate')}><span className="title sort" title="Sorting">Start year</span></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        establishmentSelect.map( ({trcid, title, location: {city, zipcode, adress}, dates: { startdate }, media, urls },index) => {
                         return <tr key={index + trcid} onClick={this.tableHandle.bind(this, {title},{city},{adress},{zipcode},{media},{urls} )}>
                           {[title, city, zipcode, adress, startdate].map((item,index) => {
                               return <Rate key={index}>{item}</Rate>
                           })}

                           </tr>
                       })

                    }

                    </tbody>
                </table>

        )
    }
}
export default connect((state) => ({
   establishment: stateSelector(state),
   establishmentSelect: currentSelector(state)
}),{updateArrayEstablishment})(SortTable)


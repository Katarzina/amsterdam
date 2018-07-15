import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { updateArrayEstablishment, loadInfoEstablishment, loadCoordinate } from '../action'
import {connect} from 'react-redux'
import {stateSelector, currentSelector} from '../reducer/establishment'
import {restaurantDetailsSelector, coordinate} from '../reducer/details'
import InfoEstablishment from '../components/Info/InfoEstablishment'
import { selectedEventSelector } from "../reducer/events";

const Item = ({children}) => ( <td className="item">{children}</td> )

class SortTable extends Component {
    /*static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    sortedCondition = { location: { zipcode: true }, dates: { startdate: true }  }

    sort = (level1,level2) => {
        const { establishmentSelect, updateArrayEstablishment } = this.props

       // establishmentSelect.forEach( (item) => console.log(item.dates.startdate, typeof item.dates.startdate));
        // get sorting order

        let isSorted = this.sortedCondition[level1][level2];

        // set direction
        let direction = isSorted ? 1 : -1;

        // create new data array for update state
        // and make sorting
        const sorted = [].slice.call(establishmentSelect).sort((a, b) => {

            let aSort = a[level1][level2], bSort = b[level1][level2]

            /// if sort date - other method of sort
            if (level1 === 'dates' && level2 === 'startdate') {

                let aDate, bDate, valueArray

                const arraySplit = aString => aString.split('-')

                const checkType = value => (typeof value == 'undefined') ? new Date(1970, 0, 1) :
                                           (typeof value === 'string') ? ( ((value.includes('-'))) ?
                                           (valueArray = arraySplit(value), new Date(+valueArray[2], +valueArray[1], +valueArray[0]))
                                           : value ) : value;

                aDate = +checkType(aSort)

                bDate = +checkType(bSort)

                return (aDate === bDate) ? false : aDate > bDate ? direction : direction * -1

            }

            return (aSort === bSort) ? false : aSort > bSort ? direction : direction * -1;

        })

        this.sortedCondition[level1][level2] = !isSorted;

        updateArrayEstablishment(sorted)
    }

    tableHandle = ( coord, ...rest) => {

        const { loadInfoEstablishment, loadCoordinate } = this.props;
        loadInfoEstablishment(...rest);
        loadCoordinate(coord);

    }

    render() {

        const { restaurantDetails, establishment: {establishmentSelect } } = this.props
        //console.log("loadInfo",restaurantDetails);
        return (
                <div>
                    <h1>Establishments info</h1>
                <div>
                    <InfoEstablishment restaurantDetails={restaurantDetails} />
                </div>
                <table className="currency-table">
                    <thead>
                    <tr>
                    <th className="title">Title</th>
                    <th className="title">City</th>
                    <th onClick={() => this.sort('location','zipcode')}><span className="title sort" title="Sorting">Post Code</span></th>
                    <th className="title">Address</th>
                    <th onClick={() => this.sort('dates','startdate')}><span className="title sort" title="Sorting">Start year</span></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        establishmentSelect.map( ({trcid, title, location: {city, zipcode, adress, latitude, longitude}, dates: { startdate }, media, urls },index) => {
                         return <tr key={index + trcid} onClick={this.tableHandle.bind(this, Object.assign({latitude} , {longitude} ), Object.assign( {title}, {city}, {adress}, { zipcode }, { media }, { urls }) )}>
                           {[title, city, zipcode, adress, startdate].map((item,index) => {
                               return <Item key={index}>{item}</Item>
                           })}

                           </tr>
                       })

                    }

                    </tbody>
                </table>
                </div>
        )
    }
}
export default connect((state) => ({
   establishment: stateSelector(state),
   establishmentSelect: currentSelector(state),
   restaurantDetails: restaurantDetailsSelector(state),
   selectedEvent: selectedEventSelector(state)
}),{updateArrayEstablishment, loadInfoEstablishment, loadCoordinate})(SortTable)


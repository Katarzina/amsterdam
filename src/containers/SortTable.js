import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { updateArrayEstablishment, loadInfoEstablishment, loadCoordinate } from '../action'
import {connect} from 'react-redux'
import {stateSelector, currentSelector} from '../reducer/establishment'
import InfoEstablishment from '../components/Info/InfoEstablishment'

const Item = ({children}) => ( <td className="item">{children}</td> )

class SortTable extends Component {
    /*static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    sorted = { location: { zipcode: true }, dates: { startdate: true }  }

    sort(level1,level2) {
        const { establishmentSelect, updateArrayEstablishment } = this.props
        // get sorting order

        let isSorted = this.sorted[level1][level2];

        // set direction
        let direction = isSorted ? 1 : -1;

        // create new data array for update state
        // and make sorting
        const sorted = [].slice.call(establishmentSelect).sort((a, b) => {
           // let aSort = a, bSort = b;
           // console.log(a[level1][level2]);
           /* const arraySplit = (aString = '') => {
                if (isNaN(aString)) { aString = '' }
                console.log(aString.split('-'));
                return aString.split('-');
            };
            if (level1 === 'dates') {
                //console.log(a[level1][level2] )
                let aArray = arraySplit(a[level1][level2]);
                let bArray = arraySplit(b[level1][level2]);
                //console.log(aArray, bArray)
               // console.log(aArray[2],aArray[1],aArray[0])
                let aDate = new Date(+aArray[2],+aArray[1],+aArray[0])
                let bDate = new Date(+bArray[2],+bArray[1],+bArray[0])
               // console.log(aDate, bDate)
                a[level1][level2] = +aDate;
                b[level1][level2] = +bDate;
            }*/

            if (a[level1][level2] === b[level1][level2]) {
                return 0; }
            return a[level1][level2] > b[level1][level2] ? direction : direction * -1;
        })
        this.sorted[level1][level2] = !isSorted;

        updateArrayEstablishment(sorted)
    }

    tableHandle = ( coord, ...rest) => {

        const { loadInfoEstablishment, loadCoordinate } = this.props;
        loadInfoEstablishment(...rest);
        loadCoordinate(coord);

    }

    render() {

        const { establishment: {establishmentSelect, restaurantDetails = {} } } = this.props
        console.log(establishmentSelect);
        //console.log("loadInfo",restaurantDetails);
        return (
                <div>
                    <h1>Establishments info</h1>
                <div>
                  <InfoEstablishment restaurantDetails={restaurantDetails}/>
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
   establishmentSelect: currentSelector(state)
}),{updateArrayEstablishment, loadInfoEstablishment, loadCoordinate})(SortTable)


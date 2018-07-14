import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { calculateDistance, commaToPointReplace } from '../share/share'
import {coordinateSelection} from '../reducer/details'
import {eventsSelection} from '../reducer/events'

const Item = ({children}) => ( <td className="item">{children}</td> )

class EventsInfo extends Component {
    /*static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    render() {

        const { events: {eventsSelect}, details: {coordinate = {}} } = this.props
        let eventsSelectWithCoordinate = {};
        if (!eventsSelect || !eventsSelectWithCoordinate) {
            return null
        } else {
            const {latitude, longitude} = coordinate;
            eventsSelectWithCoordinate = eventsSelect.filter((event) => {
                return calculateDistance(+commaToPointReplace(event.location.latitude), +commaToPointReplace(event.location.longitude), +commaToPointReplace(latitude), +commaToPointReplace(longitude)) < 1
            })

            return (
                <div>
                <h1>Info events less 1 km</h1>
                <table>
                    <thead>
                    <tr>
                        <th className="title">Title</th>
                        <th className="title">Location</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        eventsSelectWithCoordinate.map(({trcid, title, location: {city, zipcode, adress}}, index) => {
                            return <tr key={index + trcid}>
                                {[title, city + ' ' + zipcode + ' ' + adress].map((item, index) => {
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
}

export default connect((state) => ({
   events: eventsSelection,
   details: coordinateSelection
}))(EventsInfo)


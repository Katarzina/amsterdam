import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { calculateDistance, commaToPointReplace } from '../share/share'
import {coordinateSelector} from '../reducer/details'
import {stateSelector as eventSelector} from '../reducer/events'

const Item = ({children}) => ( <td className="item">{children}</td> )

class EventsInfo extends Component {
    propTypes = {
        eventsSelect: PropTypes.object,
        latitude: PropTypes.string,
        longitude: PropTypes.string
    }

    render() {

        const { events: { eventsSelect = {}}, details: {latitude, longitude} } = this.props
        let eventsSelectWithCoordinate = {};
        if (eventsSelect.length > 0) {
            eventsSelectWithCoordinate = eventsSelect.filter((event) => {
                return calculateDistance(+commaToPointReplace(event.location.latitude), +commaToPointReplace(event.location.longitude), +commaToPointReplace(latitude), +commaToPointReplace(longitude)) < 1
            })
        } else {
                return null
        }

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
                                    return <Item key={index + item}>{item}</Item>
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
   events: eventSelector(state),
   details: coordinateSelector(state)
}))(EventsInfo)


import React from 'react'
import PropTypes from 'prop-types'

const InfoEstablishment = ({restaurantDetails}) => {

    let { title, city, adress, zipCode, urls } = restaurantDetails

    const mediaArray = restaurantDetails.media;

    if (!mediaArray) return null

		return <div className="row">
               <div className="col-md-3">
                   {title} {city}  {adress} {zipCode}
               </div>
               <ul className="col-md-6">
                {mediaArray.map((item, index) => <img src={item.url} alt={title} width='100' />)}
               </ul>
               <ul className="col-md-3">
                   {urls}
               </ul>
        </div>
}


/*InfoEstablishment.propTypes = {
    value: PropTypes.string,
    currency: PropTypes.string,
    rate: PropTypes.number
}*/

export default InfoEstablishment
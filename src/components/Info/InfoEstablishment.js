import React from 'react'
import PropTypes from 'prop-types'

const InfoEstablishment = ({restaurantDetails}) => {

    let { title, city, adress, zipCode, urls } = restaurantDetails

    const mediaArray = restaurantDetails.media;

    if (!mediaArray) return null

		return <div className="row">
               <div className="col-md-6">
                   {title} {city}  {adress} {zipCode} {urls}
               </div>
               <div className="col-md-6">
                {mediaArray.map((item, index) => <img key={item+index} src={item.url} alt={title} width='100' />)}
               </div>
        </div>
}


/*InfoEstablishment.propTypes = {
    value: PropTypes.string,
    currency: PropTypes.string,
    rate: PropTypes.number
}*/

export default InfoEstablishment
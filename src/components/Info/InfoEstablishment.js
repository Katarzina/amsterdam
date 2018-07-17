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


InfoEstablishment.propTypes = {
    restaurantDetails: PropTypes.object,
    title: PropTypes.string,
    city: PropTypes.string,
    adress: PropTypes.string,
    urls: PropTypes.string,
    media: PropTypes.array
}

export default InfoEstablishment
import React from 'react'
import PropTypes from 'prop-types'

const InfoEstablishment = (...rest) => {

    console.log(...rest)

    const TreeObject = (obj) => {

        if (typeof obj === "object") {
            for (let p in obj) {
                console.log("object", p, obj[p]);
                TreeObject(obj[p]);
            }
        } else {
            console.log(obj)
        }
    }

    /*establishment.map( (i, index) => { TreeObject(i) })*/

	/*const {value, currency, rate} = props*/
		return <div>

        </div>
}

InfoEstablishment.propTypes = {
    value: PropTypes.string,
    currency: PropTypes.string,
    rate: PropTypes.number
}

export default InfoEstablishment
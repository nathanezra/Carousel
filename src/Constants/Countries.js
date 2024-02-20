import USA from '../Images/icons8-usa-48.png'
import SWITZERLAND from '../Images/icons8-switzerland-48.png'
import AUSTRALIA from '../Images/icons8-australia-40.png'

const countries = {
    '1' : {
        name: `United States`,
        img: USA,
    },
    '2' : {
        name: `Switzerland`,
        img: SWITZERLAND,
    },
    '3' : {
        name: `Australia`,
        img: AUSTRALIA,
    },
}

const getCountry = (taxes, name) => {
    const selectedTax = taxes.find(tax => tax.taxRuleName === name)
    return countries[selectedTax.countryCode]
}

export default getCountry
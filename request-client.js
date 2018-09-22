const fetch = require("node-fetch")
const requestDolar = async () => {
    const resultDolar = await fetch(`http://free.currencyconverterapi.com/api/v3/convert?q=USD_BRL&compact=y`,{
        method:'GET'
    })
    const result = await resultDolar.json()
    return result.USD_BRL.val
}

module.exports = requestDolar

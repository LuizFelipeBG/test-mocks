requestDolar = require("./request-client")

const dolarConversion = async (dolar) => {
    const promise = await requestDolar() 
    const result = promise * dolar 
    return result
}
module.exports = dolarConversion
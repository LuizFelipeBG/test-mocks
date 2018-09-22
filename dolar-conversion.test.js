dolarConversion = require("./dolar-conversion")

test("Converte 10 dolares em 40.50804", async ()=>{
    expect( await dolarConversion(10)).toEqual(40.50804)
})
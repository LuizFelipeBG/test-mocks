requestDolar = require('./request-client')

test('test value in fetch require in dolar',async () =>{
    expect(await requestDolar()).toEqual(4.050804)
})
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e4c6a9b0d360e3329b0e14287a4b8b30&query='+latitude+','+longitude
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, {
                Weather: body.current.weather_descriptions[0],
                Temperature: body.current.temperature,
                Feels: body.current.feelslike 
            })
        }
    })
}

module.exports = forecast
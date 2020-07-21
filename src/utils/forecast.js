const request = require('request')
const forecast = ( cordinates , callback ) => {
    longitude = cordinates.longitude,
    latitude  =  cordinates.latitude
url = 'http://api.weatherstack.com/current?access_key=c48ab664df942a82ae4e514d3fce967e&query='+longitude+','+latitude;
request({ url , json:true}, (error, response) => {
    if(error){ 
        callback ('Cannot reach to the API server', undefined)
    }else if( response.body.error){
            callback('  Empty query , please change what you searching for !! ', undefined)
    }else{
        callback(undefined, 'It is currently '+response.body.current.temperature+' degrees and feels like '+response.body.current.feelslike+' degree centrigrate')
    }
})
}




// const url = 'http://api.weatherstack.com/current?access_key=c48ab664df942a82ae4e514d3fce967e&query=28.5562,77.1000';

// request({url:url ,  json:true},( error, response) => {

// //json: true already parses
// //console.log(response.body.'  Empty query , please change what you searching for !! 'current);
// //console.log(response.body)

// if(error)
// {
//     console.log(' error found'+error)

// }else if(response.body.error){

//     console.log(' Unable to find location ')
    
// }else{

//     console.log('It is currently '+response.body.current.temperature+' degrees and feels like '+response.body.current.feelslike+' degree centrigrate')
//     console.log('Also it feels like the weather today is '+response.body.current.weather_descriptions[0])
    
// }

// })

module.exports = forecast
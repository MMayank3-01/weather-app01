const request = require('request')
const geocode = (address , callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWF5YW5rbWF5YW5rIiwiYSI6ImNrY2djaWx5aDBpdTMzMWxwYnh3bzI4ZXQifQ.gWac_TjpLPOWQlgrti_O0Q'
  
    //setting up request
     request({url :url , json: true},  (error, response) => {
              if(error)
              {
                  callback('Cant reach the api at the moment',undefined  )
              }else if(response.body.features.length === 0)(
                  callback(' Cannot find the location, find some other location Please ',undefined)
              )
              else{
                data = {
                    latitude : response.body.features[0].center[0],
                    longitude : response.body.features[0].center[1],
                    placeName : response.body.features[0].place_name
                }
                callback(undefined,data)
              }
     })
    }


    module.exports = geocode 
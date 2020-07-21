const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// directories for setting the view templates and other assets
const pathname = path.join(__dirname, '../public') 
const pathViews = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
console.log(pathname)

// for doing the apt settings in express
app.set('view engine','hbs')
app.set('views',pathViews)
hbs.registerPartials(partialsPath)

// for mentioning the static resources  namely static img , js and css files
app.use(express.static(pathname))


app.get('/', (req,res) => {
res.render('index', {
name : 'mayank',
Course : ' THe complete developer course',
title : 'Weather'
})
})

app.get('/about', (req, res)  => {
res.render('about' , {  college : 'VIT' ,    branch : 'EEE' , title : 'About' , name : 'mayank'})
})

app.get('/help', (req, res) => {
res.render('help', {person : 'youreself' , title : 'Help' , name : 'mayank'})
})



app.get('/weather' , (req,res) => {
    if(!req.query.address)
{
return  res.send({ "Error" : " We need a valid address for the weather forecast"  })
}
console.log(req.query.address)
returnVal =  geocode(req.query.address , (error , {latitude , longitude , placeName } = {})=>{
  if(error){
    return res.send( {"Error":error} )
  }
const jsonlog = { "latitude" : latitude , "longitude" : longitude } 
forecast(jsonlog , (error, forecastdata) => {
if(error){
return res.send({"Error" : error})
}
res.send({
forcast : forecastdata,
location : placeName,
addressprovided :  req.query.address
})

})

});

})


app.get('/products',(req, res) => {

if(!req.query.search){

    return  res.send({"Error": "Please send a query as empty query recieved"})
}

console.log(req.query)
 res.send({
  
  products : []

 })
})

app.get('/help/*',(req,res) => {
res.render('404page',{ message : ' Sorry the article you were looking for was not found' , name: 'Mayank'})
})

app.get(('*'), (req, res) => {
res.render('404page',{ name : 'Mayank'})
})

app.listen(3000, () => {
console.log('Server set up at port 3000')
})
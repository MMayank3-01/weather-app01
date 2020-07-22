
console.log('This is a server side js script')
const search  = document.querySelector('input')
const weatherform = document.querySelector('form')

const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

message1.textContent = 'From Javascript';
message2.textContent = '';



weatherform.addEventListener('submit', (e) => {
    const location = search.value;
    e.preventDefault();
// console.log('testing !!!  '+location)

message2.textContent ='';
message1.textContent = ' Loading text';

    fetch('/weather?address='+location).then((response) =>{
        response.json().then((data)  => {
        if(data.Error){
        // console.log(data.Error)
        message2.textContent = data.Error;

        }
        else{
            // console.log(data.forcast)
            // console.log(data.location)
            // console.log(data.addressprovided)
            message1.textContent =   'Location '+data.location;
            message2.textContent =   ' Forecast '+data.forcast;

        }
        })
        })


})
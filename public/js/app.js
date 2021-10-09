const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
 
// messageOne.textContent = 'from Javascript'


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            
            if(data.error){
                console.log(data.error)
                messageOne.textContent = data.error
            }else{
                console.log(data.Location, data.Forecast)
                messageOne.textContent = data.Location
                messageTwo.textContent = 'Forecast: '+ data.Forecast.Weather
                messageThree.textContent = 'Temperature: '+ data.Forecast.Temperature + ' (in Celcius)'
                messageFour.textContent = 'Feels Like: '+ data.Forecast.FeelsLike + ' (in Celcius)'
                messageFive.textContent = 'Humidity: ' + data.Forecast.Humidity
                messageSix.textContent = 'Wind Speed: ' + data.Forecast.WindSpeed
            }
            // console.log(data.Location, data.Forecast)
            
        })
    })
})
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
 
// messageOne.textContent = 'from Javascript'


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            
            if(data.error){
                console.log(data.error)
                messageOne.textContent = data.error
            }else{
                console.log(data.Location, data.Forecast)
                messageOne.textContent = data.Location
                messageTwo.textContent = 'Forecast: '+ data.Forecast.Weather + ', Temperature: '+ data.Forecast.Temperature +', Feels: '+ data.Forecast.Feels
            }
            // console.log(data.Location, data.Forecast)
            
        })
    })
})
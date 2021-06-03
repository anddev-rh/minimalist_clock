const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondsDegrees = (90 + (seconds*6)) 
  const minutesDegrees = (90 + (minutes*6))
  const hoursDegrees = (90 + (hours*30))

  //console.log(`${seconds}  ${minutes}  ${hours}`)
  console.log(hours);
  console.log(secondsDegrees);
  
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}



setInterval(setDate, 1000)
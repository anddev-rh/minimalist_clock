const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  console.log(seconds);
  console.log(minutes)
  console.log(hours);
  


}

setInterval(setDate, 1000)
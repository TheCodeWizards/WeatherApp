
const NextFiveDaysWeather = (lat,lon,apiKey) => {
   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network call issue ");
          }
          return response.json();
        })
        .catch((error) => console.log(error))
    
}

export default NextFiveDaysWeather

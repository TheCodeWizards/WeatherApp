
const SearchCityWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${api_key}&q=${city}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network call issue ");
        }
        return response.json();
    })
    .catch((error) => console.log(error));
}

export default SearchCityWeather

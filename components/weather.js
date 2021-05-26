/**
 * Weather component configuration
 * It defines the template for the component, create the data, run 
 * the neccassry HTTP requests to get the data, and, export the object 
 * to be used in script.js in the assets directory
 */

// Weather API access info
const API_ENDPOINT = 'http://api.conxedge.com/weather/93000';
const API_KEY = 'vcj1ubsnlfuykft25arnqmnjz3sgdduo';
const API_SECRET = 'bi3pjtjxhgrqnjci6h1zjmdr9xjs59vm';

const FIVE_MINUTES = 300000;

export default {
    template: `
        <section id="weather-section">
            <div class="weather-detail">
                <span class="name">Temperature</span>
                <span class="icon mdi mdi-thermometer-lines"></span>
                <span class="data">{{ temperature }}</span>
            </div>
            <div class="weather-detail">
                <span class="name">Wind Direction</span>
                <span class="icon mdi mdi-weather-windy-variant"></span>
                <span class="data">{{ windDirection }}</span>
            </div>
            <div class="weather-detail">
                <span class="name">Wind Speed</span>
                <span class="icon mdi mdi-weather-windy"></span>
                <span class="data">{{ windSpeed }}</span>
            </div>
            <div class="weather-detail">
                <span class="name">Humidity</span>
                <span class="icon mdi mdi-water-percent"></span>
                <span class="data">{{ humidity }}</span>
            </div>
            <div class="weather-detail">
                <span class="name">Rain</span>
                <span class="icon mdi mdi-weather-windy-variant"></span>
                <span class="data">{{ rain }}</span>
            </div>
        </section>
    `, 
    data() { 
        return {
            temperature: 'loading', 
            windDirection: 'loading', 
            windSpeed: 'loading', 
            humidity: 'loading', 
            rain: 'loading'
        }
    },
    methods: {
        getWeatherData(){
            axios.get(API_ENDPOINT, {
                params: {
                    api_key: API_KEY, 
                    api_secret: API_SECRET
                }
            })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                this.temperature = `${data.temperature}℃`;
                this.windDirection = 'NW';
                this.windSpeed = `${data.windspeed}km/h`;
                this.humidity = `${data.humidity}%`;
                this.rain = '75mm';
            })
            .catch((_) => {
                // If an error occurs, alert the user
                alert('Error: Could not load data!');
            })
        }
    }, 
    mounted(){
        this.getWeatherData();
        setInterval(this.getWeatherData, FIVE_MINUTES);
    }
};
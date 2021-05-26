/**
 * script.js
 * imports all components configs and initializes the Vuejs app
 * The script uses ES6 imports to use other scripts
 */

import weather from '../../components/weather.js'

Vue.component('weather', weather);

var app = new Vue({
    el: '#app'
});

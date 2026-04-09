export default {
  name: 'WeatherWidget',
  template: `
    <div class="weather-widget" id="weather-widget">
      <div v-if="loading" class="weather-loading">Loading weather...</div>
      <div v-else-if="error" class="weather-error">{{ error }}</div>
      <div v-else class="weather-content">
        <div class="weather-emoji">{{ emoji }}</div>
        <div class="weather-info">
          <div class="weather-temp">{{ Math.round(temp) }}°F</div>
          <div class="weather-desc">{{ desc }}</div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      loading: true,
      error: null,
      temp: 0,
      weatherCode: 0,
    };
  },
  computed: {
    emoji() {
      const map = {
        0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️',
        51: '🌦️', 53: '🌦️', 55: '🌧️', 61: '🌧️', 63: '🌧️', 65: '🌧️',
        71: '🌨️', 73: '🌨️', 75: '🌨️', 80: '🌦️', 81: '🌧️', 82: '🌧️',
        85: '🌨️', 86: '🌨️', 95: '⛈️', 96: '⛈️', 99: '⛈️',
      };
      return map[this.weatherCode] || '🌡️';
    },
    desc() {
      const map = {
        0: 'Clear', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Cloudy',
        45: 'Foggy', 48: 'Foggy', 51: 'Light Drizzle', 53: 'Drizzle',
        55: 'Heavy Drizzle', 61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain',
        71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 80: 'Rain Showers',
        81: 'Rain Showers', 82: 'Heavy Rain', 85: 'Snow Showers',
        86: 'Heavy Snow', 95: 'Thunderstorm', 96: 'Thunderstorm',
        99: 'Severe Thunderstorm',
      };
      return map[this.weatherCode] || 'Unknown';
    },
  },
  methods: {
    fetchWeather(lat, lon) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.temp = data.current.temperature_2m;
          this.weatherCode = data.current.weather_code;
          this.loading = false;
        })
        .catch(() => {
          this.error = 'Weather unavailable';
          this.loading = false;
        });
    },
  },
  mounted() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => this.fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => this.fetchWeather(32.7767, -96.7970), // DFW fallback
      );
    } else {
      this.fetchWeather(32.7767, -96.7970);
    }
  },
};

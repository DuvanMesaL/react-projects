import Clear from '../../assets/Clear.png';
import Hail from '../../assets/Hail.png';
import Cloud from '../../assets/HeavyCloud.png';
import Rain from '../../assets/HeavyRain.png';
import Shower from '../../assets/Shower.png';
import Sleet from '../../assets/Sleet.png';
import Snow from '../../assets/Snow.png';
import Thunderstorm from '../../assets/Thunderstorm.png';

const weatherImages = {
    'Clear': Clear,
    'Hail': Hail,
    'Clouds': Cloud, // Cambiado de 'Heavy Cloud' a 'Clouds'
    'Rain': Rain, // Cambiado de 'Heavy Rain' a 'Rain'
    'Showers': Shower, // Asegúrate de que 'Showers' sea una respuesta válida de la API
    'Sleet': Sleet,
    'Snow': Snow,
    'Thunderstorm': Thunderstorm,
};

export default weatherImages;
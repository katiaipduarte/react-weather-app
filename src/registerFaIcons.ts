import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBolt,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faHeart,
  faSearchLocation,
  faSmog,
  faSnowflake,
  faSun,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(
    faSun,
    faCloudShowersHeavy,
    faCloud,
    faSmog,
    faCloudRain,
    faBolt,
    faSnowflake,
    faBars,
    faSearchLocation,
    faTimes,
    faHeart,
  );
}

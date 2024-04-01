import countries from './assets/countries.json';
import timezones from './assets/timezones.json';
export type Timezone = typeof timezones[number];
export type Country = typeof countries[number];
import { Weather} from "@heaveria/weatherapi-wrapper";
import {promptCity, promptForecastDays} from "./prompts";
import {APIKEY} from "../app";
import {asciiArt} from "../Enums/ascii-art";

export async function getWeather() {
    const city = await promptCity();
    const days = await promptForecastDays();
    console.log(`Weather for ${city} for ${days} days`);

    const weather = new Weather(APIKEY);
    const forecast = await weather.getForecast(city, days);

    console.log(asciiArt.RAIN)
}

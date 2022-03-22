import {IPromptReturn} from "../Interfaces/IPromptReturn";
import {cleanAndKill} from "./exit";
import {mainMenu, promptCity, promptForecastDays} from "./prompts";
import {getWeather} from "./get-weather";

/**
 * Responsible for handling all prompts and passing off execution to the correct function or deciding to return a value.
 * @param promptResult
 */
export async function promptHandler(promptResult: IPromptReturn) {

    switch (promptResult.promptName) {
        /**
         * The main menu. This is the first prompt that is shown to the user.
         * Check the choice and hand it off the appropriate function to handle the task.
         */
        case 'mainMenu':
            switch (promptResult.choiceIndex) {
                case 0:
                    cleanAndKill(0); break;
                case 1:
                    getWeather(); break;
            }
            break;
        /**
         * Prompts the user to the city they want to get the weather for.
         * Returns the city name as a string.
         * Handles errors by repeating the prompt until input is valid.
         */
        case 'city':
            if (promptResult.error && promptResult.choiceResult instanceof Error) { // Second conditional forces type assertion.
                console.log(promptResult.choiceResult.message);
                return await promptCity(); // Repeat the prompt
            }

            return promptResult.choiceResult; // Return the city name
        /**
         * Prompts the user to enter the number of days to forecast.
         * Returns the number of days to forecast.
         * Handles errors by repeating the prompt until input is correct.
         */
        case 'forecastDays':
            if (promptResult.error && promptResult.choiceResult instanceof Error) { // Second conditional forces type assertion.
                console.log(promptResult.choiceResult.message);
                return await promptForecastDays(); // Repeat the prompt
            }
            return promptResult.choiceResult; // Return the number of days to forecast
    }
}

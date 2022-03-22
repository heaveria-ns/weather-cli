import {IPromptReturn} from "../Interfaces/IPromptReturn";
import {promptHandler} from "./menu_handler";
const { Prompt, Select, Input, NumberPrompt } = require('enquirer');

export async function mainMenu(): Promise<void> {
    const choice = await new Select({
            name: 'introMenu',
            message: 'Main menu',
            choices: [
                '1. Get weather by city.',
                '2. Get astronomy by city.',
                '0. Exit' // 0 is always exit!
            ]
    }).run();

    promptHandler({
        promptName: 'mainMenu',
        choiceResult: choice,
        choiceIndex: parseInt(choice.substring(0,1)), // The number of the choice, as defined in choice.choices[].
        error: null
    });
}

export async function promptCity() {
    const city = await new Input({
        message: 'Enter city name:',
    }).run();

    return promptHandler({
        promptName: 'city',
        choiceResult: (city.length == 0 || false) ? new Error(`❌ A city name must be longer than ${city.length} characters. Please try again.`) : city,
        choiceIndex: null,
        error: (city.length == 0 || false)
    });
}

export async function promptForecastDays() {
    const days = await new NumberPrompt({
        message: 'Enter number of days to forecast (1-10):',
        initial: '5',
        format: 'integer',
        min: 1,
        max: 10
    }).run();

    return promptHandler({
        promptName: 'forecastDays',
        choiceResult: (days < 1 || days > 10) ? new Error('❌ Invalid number of days. Please try again.') : days,
        choiceIndex: null,
        error: (days < 1 || days > 10)
    });
}

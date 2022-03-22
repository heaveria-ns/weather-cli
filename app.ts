/**
 *
 *               U _____ u     _        _____     _   _   U _____ u    ____
 *  __        __ \| ___"|/ U  /"\  u   |_ " _|   |'| |'|  \| ___"|/ U |  _"\ u
 *  \"\      /"/  |  _|"    \/ _ \/      | |    /| |_| |\  |  _|"    \| |_) |/
 *  /\ \ /\ / /\  | |___    / ___ \     /| |\   U|  _  |u  | |___     |  _ <
 * U  \ V  V /  U |_____|  /_/   \_\   u |_|U    |_| |_|   |_____|    |_| \_\
 * .-,_\ /\ /_,-. <<   >>   \\    >>   _// \\_   //   \\   <<   >>    //   \\_
 *  \_)-'  '-(_/ (__) (__) (__)  (__) (__) (__) (_") ("_) (__) (__)  (__)  (__)
 * ------------------------------------------------------------------------------
 *                            WEATHER | Version 0.0.1
 * ------------------------------------------------------------------------------
 */

import { Weather } from "@heaveria/weatherapi-wrapper";
require("dotenv").config();
import {intro} from "./Commands/intro";
import { mainMenu, promptForecastDays } from "./Commands/prompts";

export const APIKEY = process.env.API_KEY;
async function main() {
    intro();
    await mainMenu()

}
main();

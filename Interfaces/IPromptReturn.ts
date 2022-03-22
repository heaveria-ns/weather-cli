export interface IPromptReturn {
    /**
     * Should be the name of the function.
     */
    promptName: string,
    /**
     * The text that the user chose.
     */
    choiceResult: string | number | boolean | Error,
    /**
     * The index of the choice that the user chose.
     */
    choiceIndex: number | undefined,
    /**
     * Tells us if the answer is incorrect.
     */
    error?: boolean
}

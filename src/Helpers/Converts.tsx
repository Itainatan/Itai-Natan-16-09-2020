//Funcs - to update from fahrenheit to celsius for the data of five days weather
export const convertToC = (fahrenheit: number) => {
    let celsius = (fahrenheit - 32) / (9 / 5)
    return Math.round(celsius)
}
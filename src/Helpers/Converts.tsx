export const convertToF = (celsius: number) => {
    let fahrenheit
    // Only change code below this line
    fahrenheit = (celsius * (9 / 5)) + 32 // fahenheit = celsius * 9/5 + 32 works too.
    return Math.round(fahrenheit);
}
export const convertToC = (fahrenheit: number) => {
    let celsius
    // Only change code below this line
    celsius = (fahrenheit - 32) / (9 / 5)
    return Math.round(celsius);
}
//Consts
export const convertToF = (celsius: number) => {
    let fahrenheit = (celsius * (9 / 5)) + 32
    return Math.round(fahrenheit)
}

export const convertToC = (fahrenheit: number) => {
    let celsius = (fahrenheit - 32) / (9 / 5)
    return Math.round(celsius)
}
const urlLink = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
// const options = {
//     method: 'GET',
//     // headers: {

//     // }
// };

// try {
//     const response = await fetch(url)
//     const data = await response.text
//     console.log("Data:---", data)
// } catch (error) {
//     console.error(error)
// }

export async function fetchCars() {
    const headers = {
        'X-RapidApi-Key': 'xxxxxxxxxx',
        'X-RapidApi-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(urlLink, {
        method: 'GET',
        headers: headers
    })

    const result = await response.json()
    return result
}
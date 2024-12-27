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
//     console.log(error)
// }

// async function apiFetch() {
//     try {
//     const response = await fetch(urlLink)
//     const data = await response.json()
//     console.log("Data:---", data)
// } catch (error) {
//     console.log(error)
// }
// }
// apiFetch()

fetch(urlLink)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log("DATA -- ", data)
  })
  .catch((error) => {
    console.log(error)
  })
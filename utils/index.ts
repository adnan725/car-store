export async function fetchAllCars() {
    const headers = {
		'X-RapidAPI-Key': 'b60b9e7b8emsh4c21b1956a14df3p1b2225jsn59b928818bd0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const response = await fetch(url, {
        headers: headers
    })

    const result = await response.json()

    return result
}
import { Resources } from './types'

const URL = 'https://www.dnd5eapi.co/'
export const getCategories = (): Promise<Resources[]> => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    }
    return fetch(`${URL}api`, requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            let resourceArray: Resources[] = []
            for (const [name, value] of Object.entries(result)) {
                resourceArray.push({
                    name: name.replaceAll('"', '').replaceAll('-', ' '),
                    url: value as string,
                })
            }
            return resourceArray as Resources[]
        })
        .catch((error) => {
            console.error(error)
            throw error
        })
}

export const getCategoryData = (endpoint: string[]) => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    }

    return fetch(`${URL}${endpoint.join('/')}`, requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            // console.log(result)
            return Object.hasOwn(result, 'results') ? result.results : result
        })
        .catch((error) => {
            console.error(error)
            throw error
        })
}

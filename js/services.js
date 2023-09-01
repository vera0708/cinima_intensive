const API_KEY = '66311af351f9b85308c83707e88593b2';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/movie/day?language=en-US
// trending/movie/day?api_key=<<api_key>>

const getData = url =>
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw `Что-то пошло не так. Ошибка ${response.status}`
        })
        .catch(err => console.error(err));


export const getTrends = async (type = 'movie', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
    /*  const data = await getData(url);
        const data = await getData('https://jsonplaceholder.typicode.com/todos/1');
        console.log('data: ', data); */
}
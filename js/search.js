import { search as getSearch } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');
const title = document.querySelector('.other-films__title');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const search = () => {
    searchForm.addEventListener('submit', eve => {
        eve.preventDefault();
        if (!searchInput.value) return;
        getSearch(searchInput.value)
            .then(data => {
                console.log('data: ', data);
                if (data.results.length) {
                    renderCards(data.results);
                } else {
                    throw 'К сожалению по вашему запросу ничего не найдено'
                }
            })
            .then(() => {
                filmWeek.remove();
                title.textContent = 'Результата поиска';
            })
            .catch(err => {
                title.textContent = err;
            })
    });
};

export default search;
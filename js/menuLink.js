import { getPopular, getTop } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');
const title = document.querySelector('.other-films__title');
const getNav = document.querySelectorAll('.get-nav');

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', eve => {

            const target = eve.target.closest('.get-nav__link');
            if (target) {
                eve.preventDefault();
                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie')
                        .then(data => renderCards(data.results, 'movie'));
                };

                if (target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv')
                        .then(data => renderCards(data.results, 'tv'));
                };

                if (target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie')
                        .then(data => renderCards(data.results, 'movie'));
                };

                if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv')
                        .then(data => renderCards(data.results, 'tv'));
                };
            }
        });
    });
};

export default menuLink;
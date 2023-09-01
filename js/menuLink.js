import { getPopular, getTop } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');
const title = document.querySelector('.other-films__title');
const getNav = document.querySelectorAll('.get-nav');
console.log('filmWeek: ', filmWeek);
console.log('title: ', title);
console.log('getNav: ', getNav);

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
                        .then(data => renderCards(data.results));
                };

                if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv')
                        .then(data => renderCards(data.results));
                };
            }
        });
    });
};

export default menuLink;
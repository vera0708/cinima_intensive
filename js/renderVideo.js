import { getTrends } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');

const firstRender = data => {
    filmWeek.innerHTML = `
        <div class="container film-week__container" data-rating="${data.vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster"
                    src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}"
                    alt="постер ${data.title}">
                <p class="film-week__title_origin">
                    ${data.original_title || data.original_name}</p>
            </div>
            <h2 class="film-week__title">${data.title || data.name}</h2>
            <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M"
                aria-label="смотреть трейлер"></a>
        </div>
    `
};

const renderVideo = async () => {
    const data = await getTrends();
    const [firstCard, ...otherCards] = data.results;
    otherCards.length = 12;
    firstRender(firstCard);
    renderCards(otherCards);
    console.log('otherCards: ', otherCards);
};

export default renderVideo;
/*
adult: false
backdrop_path: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
genre_ids: (3) [12, 28, 14]
id: 335977
media_type: "movie"
original_language: "en"
original_title: "Indiana Jones and the Dial of Destiny"
overview: "Неувядающий авантюрист и пытливый археолог-исследователь по-прежнему в седле. На этот раз ему придётся столкнуться с непростой задачей, которую решить на раз-два вряд ли получится. Но разве тот самый Индиана Джонс даст слабину и отступит при виде даже самой безнадёжной ситуации? Это вряд ли! Поэтому безумные приключения и нескончаемые интриги вновь возрождаются в искрометном продолжении всемирно известной саги о «простом герое» Индиане Джонсе."
popularity: 1300.705
poster_path: "/1dgvcZtfYHEDzCVGjt7RyezaKl3.jpg"
release_date: "2023-06-28"
title: "Индиана Джонс и колесо судьбы"
video: false
vote_average: 6.662
vote_count: 1143
*/

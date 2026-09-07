const portfolioWorks = [
    {
        title: 'Студійний портрет «Warm Tones»',
        year: 2025,
        category: 'Фотографія',
        image: 'assets/img/project1.jpg',
        description: 'Мінімалістична студійна фотозйомка з фокусом на природність та теплу гаму кольорів.'
    },
    {
        title: 'Брендинг для локальної кав’ярні',
        year: 2026,
        category: 'Дизайн',
        image: 'assets/img/project2.jpg',
        description: 'Створення логотипа, кольорової палітри та друкованої продукції в мінімалістичному стилі.'
    },
    {
        title: 'Пейзажна зйомка «Полісся»',
        year: 2024,
        category: 'Фотографія',
        image: 'assets/img/project3.jpg',
        description: 'Дослідження природних ландшафтів та глибини кольорів української природи.'
    },
    {
        title: 'Ретро-серія чорно-білих фотографій',
        year: 2021,
        category: 'Фотографія',
        image: 'assets/img/project4.jpg',
        description: 'Серія аналогових знімків на плівку з виразною грою світла й тіней.'
    }
];

const isRecent = year => (2026 - year) <= 2;

const placeholder = document.querySelector('.placeholder-card');
if (placeholder) {
    placeholder.remove();
}

const galleryContainer = document.querySelector('#gallery');

function renderPortfolio(works) {
    galleryContainer.innerHTML = '';

    works.forEach(work => {
        const card = document.createElement('article');
        card.classList.add('card');

        if (isRecent(work.year)) {
            card.classList.add('recent');
        }

        const title = document.createElement('h3');
        title.textContent = work.title;

        const img = document.createElement('img');
        img.src = work.image;
        img.alt = `${work.title} - ${work.description}`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');

        const yearParagraph = document.createElement('p');
        yearParagraph.textContent = `Рік: ${work.year} | ${work.category}`;
        yearParagraph.style.fontWeight = '500';

        const descParagraph = document.createElement('p');
        descParagraph.textContent = work.description;

        contentDiv.append(yearParagraph, descParagraph);
        card.append(title, img, contentDiv);

        galleryContainer.append(card);
    });
}

renderPortfolio(portfolioWorks);

const counterElement = document.querySelector('#projects-count');
if (counterElement) {
    counterElement.textContent = `Усього робіт: ${portfolioWorks.length}`;
}
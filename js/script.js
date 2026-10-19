// Оголошення структури даних: масив об'єктів робіт портфоліо
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

// Стрілкова функція: перевіряє, чи є проєкт свіжим (створеним за останні 2 роки)
const isRecent = year => (2026 - year) <= 2;

// Динамічне видалення статичної картки-заглушки з DOM
const placeholder = document.querySelector('.placeholder-card');
if (placeholder) {
    placeholder.remove();
}

// Вибір контейнера галереї за id
const galleryContainer = document.querySelector('#gallery');

// Функція динамічного рендерингу елементів портфоліо в DOM
function renderPortfolio(works) {
    // Очищення наявного вмісту контейнера
    galleryContainer.innerHTML = '';

    // Перебір елементів масиву та створення DOM-вузлів
    works.forEach(work => {
        // Створення основного контейнера картки <article>
        const card = document.createElement('article');
        card.classList.add('card');

        // Умовне додавання класу recent для свіжих робіт (активація бейджа NEW)
        if (isRecent(work.year)) {
            card.classList.add('recent');
        }

        // Створення заголовка <h3>
        const title = document.createElement('h3');
        title.textContent = work.title;

        // Створення та налаштування атрибутів зображення <img>
        const img = document.createElement('img');
        img.src = work.image;
        img.alt = `${work.title} - ${work.description}`;

        // Створення текстового контентного блоку <div>
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');

        // Створення абзацу з роком та категорією
        const yearParagraph = document.createElement('p');
        yearParagraph.textContent = `Рік: ${work.year} | ${work.category}`;
        yearParagraph.style.fontWeight = '500';

        // Створення абзацу з описом проєкту
        const descParagraph = document.createElement('p');
        descParagraph.textContent = work.description;

        // Збирання внутрішніх елементів у картку
        contentDiv.append(yearParagraph, descParagraph);
        card.append(title, img, contentDiv);

        // Додавання готової картки у загальний контейнер галереї
        galleryContainer.append(card);
    });
}

// Виклик функції рендерингу для виведення робіт
renderPortfolio(portfolioWorks);

// Оновлення підсумкового елемента лічильника робіт
const counterElement = document.querySelector('#projects-count');
if (counterElement) {
    counterElement.textContent = `Усього робіт: ${portfolioWorks.length}`;
}

import DataStore from './DataStore';

class DataStorePortfolio extends DataStore {
  constructor(url, options) {
    super(url, options);

    this._data = {
      title: 'Мои работы',

      menu: [
        {
          href: '#',
          text: 'Все',
        },
        {
          href: '#',
          text: 'Веб-сайты',
        },
        {
          href: '#',
          text: 'Плагины',
        },
        {
          href: '#',
          text: 'Моб. приложения',
        },
      ],

      works: [
        {
          id: 1,
          type: 1,
          thumbnail: 'swedish-bitter.jpg',
          title: 'Сбор трав «Шведская горечь»',
          content: `
            <p>Верстка + интеграция на WordPress.<br>
              БЭМ-именование, адаптив, flexbox, анимации, счетчик цифр, табы.</p>
          `,
          price: 150,
          daysAmount: 7,
          url: 'https://rsharpe-blog.ru/projects/swedish-bitter/',
        },
        {
          id: 2,
          type: 1,
          thumbnail: 'voronina.jpg',
          title: 'Voronina — Food фотограф',
          content: `
            <p>Верстка + интеграция на WordPress.<br>
              БЭМ-именование, анимации, адаптив. Плагины: fullpage, scrollpoint, anim-fx, parallax-fx.</p>
          `,
          price: 100,
          daysAmount: 5,
          url: 'https://rsharpe-blog.ru/projects/voronina/',
        },
        {
          id: 3,
          type: 1,
          thumbnail: 'odigo.jpg',
          title: 'Odigo — Лендинг',
          content: `
            <p>Верстка страницы, БЭМ, анимации, адаптив, scrollpoint, anim-fx, video-player.</p>
          `,
          price: 50,
          daysAmount: 3,
          url: 'https://rsharpe-blog.ru/projects/odigo/',
        },
        {
          id: 4,
          type: 1,
          thumbnail: 'rsharpe-blog.jpg',
          title: 'RSharpe — Блог',
          content: `
            <p>Верстка 4x страниц + интеграция на WordPress.<br>
              Адаптив, пользовательские виджеты, пагинация, кнопоки «поделиться в соц. сетях»<br>
              SEO-оптимизация через плагин Yoast SEO.</p>
          `,
          price: 200,
          daysAmount: 7,
          url: 'https://rsharpe-blog.ru/',
        },
        {
          id: 5,
          type: 2,
          thumbnail: 'javascript2.jpg',
          title: 'Fullpage - jQuery Plugin',
          content: `
            <p>Плагин для постраничной прокрутки разделов сайта. Альтернатива с лицензией MIT для 
              <a href="https://alvarotrigo.com/fullPage" target="_blank" rel="nofollow">https://alvarotrigo.com/fullPage</a></p>
          `,
          price: 0,
          daysAmount: 14,
          url: 'https://rsharpe-blog.ru/projects/fullpage/',
        },
        {
          id: 6,
          type: 2,
          thumbnail: 'javascript2.jpg',
          title: 'Scrollpoint - jQuery Plugin',
          content: `
            <p>Вызывает заданные функции при попадании необходимых DOM-элементов в область видимости экрана. 
              Легковесная альтернатива <a href="http://imakewebthings.com/waypoints" target="_blank" rel="nofollow">http://imakewebthings.com/waypoints</a><br>
              с уникальным функционалом.</p>
          `,
          price: 0,
          daysAmount: 10,
          url: 'https://rsharpe-blog.ru/projects/scrollpoint/',
        },
        {
          id: 7,
          type: 2,
          thumbnail: 'javascript2.jpg',
          title: 'ParallaxFx - jQuery Plugin',
          content: `
            <p>Плагин добавляет эффект «эхо» после прокрутки DOM-элементов на странице.
              Работает в связке со <a href="#" target="_blank" rel="nofollow">Scrollpoint</a></p>
          `,
          price: 0,
          daysAmount: 1,
          url: 'https://rsharpe-blog.ru/projects/parallax-fx/',
        },
        {
          id: 8,
          type: 2,
          thumbnail: 'javascript2.jpg',
          title: 'AnimFx - jQuery Plugin',
          content: `
            <p>Простой плагин, для выполнения оптимизированных анимационных эффектов на странице.</p>
          `,
          price: 0,
          daysAmount: 1,
          url: 'https://rsharpe-blog.ru/projects/anim-fx/',
        },
      ],

      link: {
        href: '#',
        text: 'Заказать работу ⟶',
      },
    };
  }
}

export default new DataStorePortfolio('', null);
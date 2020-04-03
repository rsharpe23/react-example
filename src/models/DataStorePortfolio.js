import DataStore from './DataStore';

class DataStorePortfolio extends DataStore {
  constructor() {
    super('', null);

    this._data = {
      page: {
        id: 2,
        slug: 'portfolio',
        title: 'Мои работы',
        content: '',
        thumbnail: '',
      },

      menu: [
        {
          id: 21,
          href: 7,
          text: 'Все',
          target: '_self',
        },
        {
          id: 22,
          href: 1,
          text: 'Веб-сайты',
          target: '_self',
        },
        {
          id: 23,
          href: 2,
          text: 'Плагины',
          target: '_self',
        },
        {
          id: 24,
          href: 4,
          text: 'Моб. приложения',
          target: '_self',
        },
      ],

      works: [
        {
          id: 1,
          type: 1,
          title: 'Сбор трав «Шведская горечь»',
          content: '<p>Верстка + интеграция на WordPress.<br>БЭМ-именование, адаптив, flexbox, анимации, счетчик цифр, табы.</p>',
          thumbnail: 'swedish-bitter.jpg',
          price: 100,
          daysPerDev: 7,
          link: {
            id: 0,
            text: 'Сбор трав «Шведская горечь»',
            href: 'https://rsharpe23.github.io/portfolio/swedish-bitter/',
            target: '_self',
          },
        },
        {
          id: 2,
          type: 1,
          title: 'Voronina — Food фотограф',
          content: '<p>Верстка + интеграция на WordPress.<br>БЭМ-именование, анимации, адаптив. Плагины: fullpage, scrollpoint, anim-fx, parallax-fx.</p>',
          thumbnail: 'voronina.jpg',
          price: 70,
          daysPerDev: 5,
          link: {
            id: 0,
            text: 'Voronina — Food фотограф',
            href: 'https://rsharpe23.github.io/portfolio/voronina/',
            target: '_self',
          },
        },
        {
          id: 3,
          type: 1,
          title: 'Симпатичный лендинг',
          content: '<p>Верстка страницы, БЭМ, анимации, адаптив, scrollpoint, anim-fx, video-player.</p>',
          thumbnail: 'odigo.jpg',
          price: 40,
          daysPerDev: 3,
          link: {
            id: 0,
            text: 'Симпатичный лендинг',
            href: 'https://rsharpe23.github.io/portfolio/odigo/',
            target: '_self',
          },
        },
        {
          id: 4,
          type: 1,
          title: 'RSharpe Blog',
          content: '<p>Верстка 4x страниц + интеграция на WordPress.<br>Адаптив, пользовательские виджеты, пагинация, кнопоки «поделиться в соц. сетях»<br>SEO-оптимизация через плагин Yoast SEO.</p>',
          thumbnail: 'rsharpe-blog.jpg',
          price: 120,
          daysPerDev: 7,
          link: {
            id: 0,
            text: 'RSharpe Blog',
            href: 'https://rsharpe-blog.ru/',
            target: '_self',
          },
        },
        {
          id: 5,
          type: 2,
          title: 'Landing Page на WordPress',
          content: '<p>Функционал Landing Page посредством WordPress Customizer, с возможностью удобного и быстрого наполнения контента в режиме рилтайм.</p>',
          thumbnail: 'wordpress.jpg',
          price: 40,
          daysPerDev: 2,
          link: {
            id: 0,
            text: 'Landing Page на WordPress',
            href: 'https://wp-example-site.000webhostapp.com/?autologin=1',
            target: '_self',
          },
        },
        {
          id: 6,
          type: 2,
          title: 'Fullpage - jQuery Plugin',
          content: '<p>Плагин для постраничной прокрутки разделов сайта. Альтернатива с лицензией MIT для <a href="https://alvarotrigo.com/fullPage" target="_blank" rel="nofollow">https://alvarotrigo.com/fullPage</a></p>',
          thumbnail: 'javascript.jpg',
          price: 0,
          daysPerDev: 14,
          link: {
            id: 0,
            text: 'Fullpage - jQuery Plugin',
            href: 'https://github.com/rsharpe23/fullpage/',
            target: '_blank',
          },
        },
        {
          id: 7,
          type: 2,
          title: 'Scrollpoint - jQuery Plugin',
          content: '<p>Вызывает заданные функции при попадании необходимых DOM-элементов в область видимости экрана. Легковесная альтернатива <a href="http://imakewebthings.com/waypoints" target="_blank" rel="nofollow">http://imakewebthings.com/waypoints</a><br>с уникальным функционалом.</p>',
          thumbnail: 'javascript.jpg',
          price: 0,
          daysPerDev: 10,
          link: {
            id: 0,
            text: 'Scrollpoint - jQuery Plugin',
            href: 'https://github.com/rsharpe23/scrollpoint',
            target: '_blank',
          },
        },
        {
          id: 8,
          type: 2,
          title: 'ParallaxFx - jQuery Plugin',
          content: '<p>Плагин добавляет эффект «эхо» после прокрутки DOM-элементов на странице. Работает в связке со <a href="#" target="_blank" rel="nofollow">Scrollpoint</a></p>',
          thumbnail: 'javascript.jpg',
          price: 0,
          daysPerDev: 1,
          link: {
            id: 0,
            text: 'ParallaxFx - jQuery Plugin',
            href: 'https://github.com/rsharpe23/parallax-fx',
            target: '_blank',
          },
        },
        {
          id: 9,
          type: 2,
          title: 'AnimFx - jQuery Plugin',
          content: '<p>Простой плагин, для выполнения оптимизированных анимационных эффектов на странице.</p>',
          thumbnail: 'javascript.jpg',
          price: 0,
          daysPerDev: 1,
          link: {
            id: 0,
            text: 'AnimFx - jQuery Plugin',
            href: 'https://github.com/rsharpe23/anim-fx',
            target: '_blank',
          },
        },
        {
          id: 10,
          type: 2,
          title: 'RSh-ThemeMods - WordPress Plugin',
          content: '<p>Плагин для импорта/экспорта настроек WordPress-темы. Позволяет сохранить и безопасно восстановить настройки темы, при потере данных.</p>',
          thumbnail: 'wordpress.jpg',
          price: 0,
          daysPerDev: 3,
          link: {
            id: 0,
            text: 'RSh-ThemeMods - WordPress Plugin',
            href: 'https://github.com/rsharpe23/rsh-theme-mods',
            target: '_blank',
          },
        },
      ],
    };
  }
}

export default new DataStorePortfolio();
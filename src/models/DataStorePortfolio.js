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
          price: 100,
          daysPerDev: 7,
          url: 'https://rsharpe23.github.io/portfolio/swedish-bitter/',
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
          price: 70,
          daysPerDev: 5,
          url: 'https://rsharpe23.github.io/portfolio/voronina/',
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
          daysPerDev: 3,
          url: 'https://rsharpe23.github.io/portfolio/odigo/',
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
          price: 150,
          daysPerDev: 7,
          url: 'https://rsharpe-blog.ru/',
        },
        {
          id: 5,
          type: 2,
          thumbnail: 'wordpress.jpg',
          title: 'Landing Page на WordPress',
          content: `
            <p>Функционал Landing Page посредством WordPress Customizer, с возможностью 
              удобного и быстрого наполнения контента в режиме рилтайм.</p>
          `,
          price: 50,
          daysPerDev: 2,
          url: 'https://wp-example-site.000webhostapp.com/?autologin=1',
        },
        {
          id: 6,
          type: 2,
          thumbnail: 'javascript.jpg',
          title: 'Fullpage - jQuery Plugin',
          content: `
            <p>Плагин для постраничной прокрутки разделов сайта. Альтернатива с лицензией MIT для 
              <a href="https://alvarotrigo.com/fullPage" target="_blank" rel="nofollow">https://alvarotrigo.com/fullPage</a></p>
          `,
          price: 0,
          daysPerDev: 14,
          url: 'https://github.com/rsharpe23/fullpage/',
          isExternal: true,
        },
        {
          id: 7,
          type: 2,
          thumbnail: 'javascript.jpg',
          title: 'Scrollpoint - jQuery Plugin',
          content: `
            <p>Вызывает заданные функции при попадании необходимых DOM-элементов в область видимости экрана. 
              Легковесная альтернатива <a href="http://imakewebthings.com/waypoints" target="_blank" rel="nofollow">http://imakewebthings.com/waypoints</a><br>
              с уникальным функционалом.</p>
          `,
          price: 0,
          daysPerDev: 10,
          url: 'https://github.com/rsharpe23/scrollpoint',
          isExternal: true,
        },
        {
          id: 8,
          type: 2,
          thumbnail: 'javascript.jpg',
          title: 'ParallaxFx - jQuery Plugin',
          content: `
            <p>Плагин добавляет эффект «эхо» после прокрутки DOM-элементов на странице.
              Работает в связке со <a href="#" target="_blank" rel="nofollow">Scrollpoint</a></p>
          `,
          price: 0,
          daysPerDev: 1,
          url: 'https://github.com/rsharpe23/parallax-fx',
          isExternal: true,
        },
        {
          id: 9,
          type: 2,
          thumbnail: 'javascript.jpg',
          title: 'AnimFx - jQuery Plugin',
          content: `
            <p>Простой плагин, для выполнения оптимизированных анимационных эффектов на странице.</p>
          `,
          price: 0,
          daysPerDev: 1,
          url: 'https://github.com/rsharpe23/anim-fx',
          isExternal: true,
        },
        {
          id: 10,
          type: 2,
          thumbnail: 'wordpress.jpg',
          title: 'RSh-ThemeMods - WordPress Plugin',
          content: `
            <p>Плагин для импорта/экспорта настроек WordPress-темы.
              Позволяет сохранить и безопасно восстановить настройки темы, при потере данных.</p>
          `,
          price: 0,
          daysPerDev: 3,
          url: 'https://github.com/rsharpe23/rsh-theme-mods',
          isExternal: true,
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
/* eslint-disable import/no-unresolved */
import DataStore from './DataStore';

class DataStoreNav extends DataStore {
  constructor(url, options) {
    super(url, options);

    this._data = {
      profile: {
        photoUrl: '',
        content: `
          <p>Приветствую Вас!<br>
            Меня зовут Роман, я front-end разработчик</p>
        `,

        link: {
          href: 'https://github.com/rsharpe23',
          text: '<i class="icon-github"></i> Профиль GitHub',
        },
      },

      menu: [
        {
          href: '#',
          text: 'Портфолио',
        },
        {
          href: '#',
          text: 'Контакты',
        },
        // {
        //   href: '#',
        //   text: 'CV',
        // },
      ],
    };
  }
}

export default new DataStoreNav('', null);
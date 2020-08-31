import DataStore from './DataStore';

class DataStoreHomeNav extends DataStore {
  constructor() {
    super('', null);

    this._data = {
      menu: [
        {
          id: 11,
          href: '#',
          text: 'Портфолио',
          target: '_self',
        },
        {
          id: 12,
          href: '#',
          text: 'Контакты',
          target: '_self',
        },
      ],
    };
  }
}

export default new DataStoreHomeNav();
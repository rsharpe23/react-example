import DataStore from './DataStore';

class DataStorePreviewNav extends DataStore {
  constructor() {
    super('', null);

    this._data = {
      menu: [
        {
          id: 41,
          href: '#',
          text: '<i class="icon-display"></i>',
          target: '_self',
        },
        {
          id: 42,
          href: '#',
          text: '<i class="icon-mobile"></i>',
          target: '_self',
        },
      ],
    };
  }
}

export default new DataStorePreviewNav();
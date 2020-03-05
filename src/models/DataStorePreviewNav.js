/* eslint-disable import/no-unresolved */
import DataStore from './DataStore';

class DataStorePreviewNav extends DataStore {
  constructor(url, options) {
    super(url, options);

    this._data = {
      label: 'Разработка от %sx дней',

      controls: [
        {
          href: '#',
          text: '⟵ Другие работы',
        },
        {
          href: '#',
          text: '<i class="icon-embed2 Icon"></i> Заказать $<strong>%s</strong>',
        },
      ],

      menu: [
        {
          href: '#',
          text: '<i class="icon-display"></i>',
        },
        {
          href: '#',
          text: '<i class="icon-mobile"></i>',
        },
      ],
    };
  }
}

export default new DataStorePreviewNav('', null);
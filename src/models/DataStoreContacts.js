import DataStore from './DataStore';

class DataStoreContacts extends DataStore {
  constructor() {
    super('', null);

    this._data = {
      page: {
        id: 3,
        slug: 'contacts',
        title: 'Контакты',
        content: '<p>Вы можете заказать у меня разработку проекта различной сложности;<br>для этого просто напишите мне на почту или в скайп.</p><p>Список моих основных контактов:</p>',
        thumbnail: '',
      },

      menu: [
        {
          id: 31,
          href: 'mailto:roman.sharpe23@gmail.com?subject=https://rsharpe.github.io%20|%20Вопрос%20от%20пользователя',
          text: '<i class="icon-envelop"></i> roman.sharpe23@gmail.com',
          target: '_self',
        },
        {
          id: 32,
          href: 'skype:live:c2c4fc2303dd2314?chat',
          text: '<i class="icon-skype"></i> Roman Sharpe',
          target: '_self',
        },
        {
          id: 33,
          href: 'https://vk.com/id540030329',
          text: '<i class="icon-vk"></i> Роман Шарп',
          target: '_blank',
        },
      ],
    };
  }
}

export default new DataStoreContacts();
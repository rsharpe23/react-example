import DataStore from './DataStore';

class DataStoreProfile extends DataStore {
  constructor() {
    super('', null);

    this._data = {
      photoUrl: '',
      content: '<p>Приветствую Вас!<br>Меня зовут Роман, я front-end разработчик</p>',
      link: {
        id: 0,
        href: 'https://github.com/rsharpe23',
        text: '<i class="icon-github Icon"></i> Профиль GitHub',
        target: '_blank',
      },
    };
  }
}

export default new DataStoreProfile();
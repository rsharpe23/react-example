// eslint-disable-next-line import/no-unresolved
import { isEmptyObj } from '@/utils';

class DataStore {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  request(force = false) {
    return new Promise(resolve => {
      if (!force && this._data && !isEmptyObj(this._data)) {
        resolve(this._data);
        return;
      }

      fetch(this.url)
        .then(response => resolve(
          this._data = response.json()
        ));
    });
  }
}

export default DataStore;
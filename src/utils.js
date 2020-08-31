export function createMarkup(rawHtml) {
  return { __html: rawHtml };
}

export function isEmptyObj(value) {
  return Object.keys(value).length === 0;
}

export function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}

export function merge(arr1, arr2, prop) {
  // Метод reduce вместо filter т.к. надо получить 
  // объект { n1: {...item}, n2: {...item}, ... }, 
  // а filter вернул бы [{ n1: {...item} }, { n2: {...item} }, ...]
  const x = arr1.reduce((acc, item, index) => {
    const value = arr2.find(i => i[prop] === item[prop]);
    
    if (!!value) {
      acc[index] = value;
    }
    
    return acc;
  }, {});
  
  const y = arr2.filter(item => (
    !Object.values(x).find(i => i[prop] === item[prop])
  ));
  
  const result = arr1.concat(y);
  Object.keys(x).forEach(key => (result[key] = x[key]));

  return result;
}

// С динамическими импортами в webpack есть проблемы, 
// поэтому лучше всего их использовать прямо в компоненте, 
// тогда все предупреждения сведутся к одному "DevTools failed to parse SourceMap"

// export function importFile(file, mimeTime = 'img') {
//   return new Promise((resolve, reject) => {
//     if (!file) {
//       reject(new Error('Invalid file'));
//       return;
//     }

//     import(`@public/${mimeTime}/${file}`)
//       .then(({ default: distFile }) => resolve(distFile));
//   });
// }
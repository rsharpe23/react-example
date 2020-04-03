function createMarkup(rawHtml) {
  return { __html: rawHtml };
}

function isEmptyObj(value) {
  return Object.keys(value).length === 0;
}

// С динамическими импортами в webpack есть проблемы, 
// поэтому лучше всего их использовать прямо в компоненте, 
// тогда все предупреждения сведутся к одному "DevTools failed to parse SourceMap"

// function importFile(file, mimeTime = 'img') {
//   return new Promise((resolve, reject) => {
//     if (!file) {
//       reject(new Error('Invalid file'));
//       return;
//     }

//     import(`@public/${mimeTime}/${file}`)
//       .then(({ default: distFile }) => resolve(distFile));
//   });
// }

export { 
  createMarkup, 
  isEmptyObj,
};
function camelize(str) {
  let newStr = str.split('-');
  newStr = newStr.map((item, index) => {
    if (index === 0) {
      return item;
    }
    return item[0].toUpperCase() + item.slice(1);
  });
  return newStr.join('');
}


camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';

  // console.log(upperStr);
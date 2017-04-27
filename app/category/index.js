// all css needed for this entry point
import '../../css/styles.css';
import './css/foo.css';

function category () {
  var element = document.createElement('div');
  element.innerHTML = 'Category Page';
  element.className = 'foo';
  return element;
}

document.body.appendChild(category());
// all css needed for this entry point
import '../../css/styles.css';
import './css/bar.css';

function article () {
  var element = document.createElement('div');
  element.innerHTML = 'Article Page';
  element.className = 'bar';
  return element;
}

document.body.appendChild(article());
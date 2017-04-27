// all css needed for this entry point
import '../../css/styles.css';
import './css/baz.css';

function homepage () {
  var element = document.createElement('div');
  element.innerHTML = 'Homepage Page page page redundancy... weee';
  element.className = 'baz';
  return element;
}

document.body.appendChild(homepage());
import { Controller } from 'stimulus';

export default class extends Controller {
  initialize(){
    // this.element.addEventListener('click', this.handleClickShow.bind(this));
    this.targetElement = document.querySelector(this.data.get('targetSelector'));
  }

  handleClick(){
    this.targetElement.classList.add('show');
    this.targetElement.style.display = 'block';
    this.targetElement.style.zIndex = '10000';
  }
}
import { Controller } from 'stimulus';

export default class extends Controller {
  initialize(){

    
  }

  handleClickClose(){
    this.element.classList.remove('show');
    this.element.style.display = 'none';
  }
}
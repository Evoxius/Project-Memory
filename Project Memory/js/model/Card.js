class Card extends Observable{

  construtor(){
    this.afbeelding;
    this.isClosed = true;
    this.isClickable = true;
  }

  omdraaien(){
    this.isClosed = !this.isClosed;
    this.notify();
  } 


}

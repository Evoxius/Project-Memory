class Player extends Observable{
  constructor(a,b,c){
    super();
    this.naam = a;
    this.win = b;
    this.lose = c;

  }

  changeVars(){

    this.notify();

  }

  

}

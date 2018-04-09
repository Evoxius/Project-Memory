class Player extends Observable{
  constructor(a,b){
    super();
    this.naam = a;
    this.id = b;
    this.score = 0;
    this.id

  }

  changeVars(){

    this.notify();

  }

  getScore(){
    return this.score;
  }



}

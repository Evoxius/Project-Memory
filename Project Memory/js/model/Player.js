class Player extends Observable{
  constructor(a,b,c){
    super();
    this.naam = a;
    this.win = b;
    this.lose = c;
    this.punten = 0;
  }

  changeVars(){

    this.notify();
  }

  verhoogPunten(){
    this.punten++;
  }

  getPunten(){
    return this.punten;
  }



}

class Player extends Observable{
  constructor(a){
    super();
    this.naam = a;
    this.punten = 0;
  }

  verhoogPunten(){
    this.punten++;
  }

  getPunten(){
    return this.punten;
  }



}

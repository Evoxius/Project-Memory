class Card extends Observable{

  constructor(afbeeldingId){
    super();
    this.afbeelding = afbeeldingId;
    this.isClosed = true;
    this.isClickable = true;
    this.transparent = false;
    switch (afbeeldingId) {
      case 0:this.afbeeldingsrc = "url(img/Groep4/Donald.jpg)";break;
      case 1:this.afbeeldingsrc = "url(img/Groep4/elsa.png)";break;
      case 2:this.afbeeldingsrc = "url(img/Groep4/mermaid.png)";break;
      case 3:this.afbeeldingsrc = "url(img/Groep4/Mickey.png)";break;
      case 4:this.afbeeldingsrc = "url(img/Groep4/pooh.jpg)";break;
      case 5:this.afbeeldingsrc = "url(img/Groep4/simba.png)";break;
      case 6:this.afbeeldingsrc = "url(img/Groep4/woody.png)";break;

      case 7:this.afbeeldingsrc = "url(img/Groep8/airballoon.jpg)";break;
      case 8:this.afbeeldingsrc = "url(img/Groep8/ambulance.jpg)";break;
      case 9:this.afbeeldingsrc = "url(img/Groep8/bigship.jpg)";break;
      case 10:this.afbeeldingsrc = "url(img/Groep8/bike.jpg)";break;
      case 11:this.afbeeldingsrc = "url(img/Groep8/bikething.jpg)";break;
      case 12:this.afbeeldingsrc = "url(img/Groep8/blimp.jpg)";break;
      case 13:this.afbeeldingsrc = "url(img/Groep8/boat.jpg)";break;
      case 14:this.afbeeldingsrc = "url(img/Groep8/canoe.png)";break;
      case 15:this.afbeeldingsrc = "url(img/Groep8/fbi.jpg)";break;
      case 16:this.afbeeldingsrc = "url(img/Groep8/firetruck.jpg)";break;
      case 17:this.afbeeldingsrc = "url(img/Groep8/helicopter.jpg)";break;
      case 18:this.afbeeldingsrc = "url(img/Groep8/hotwheels.jpg)";break;
      case 19:this.afbeeldingsrc = "url(img/Groep8/plane.png)";break;
      case 20:this.afbeeldingsrc = "url(img/Groep8/smallcar.jpg)";break;
      case 21:this.afbeeldingsrc = "url(img/Groep8/spaceship.png)";break;
      case 22:this.afbeeldingsrc = "url(img/Groep8/submarine.jpg)";break;
      case 23:this.afbeeldingsrc = "url(img/Groep8/train.jpg)";break;
      case 24:this.afbeeldingsrc = "url(img/Groep8/trash.jpg)";break;
    }
  }

  // Door deze code kan iets transparent worden.

  setTransparent(){
    this.transparent = true;
  }

  getTransparent(){
    return this.transparent;
  }

  omdraaien(){
    this.isClosed = !this.isClosed;
  }

  getClickable(){
    return this.isClickable;
  }

  setClickable(){
    this.isClickable = true;
  }

  setUnclickable(){
    this.isClickable = false;
  }

  // Door deze code blijven de kaarten disney of de roundabout als achtergrond foto. Tot de kaarten niet meer dicht zijn.

  getSrc(){
    if (!this.isClosed){
    return this.afbeeldingsrc;
    }
    else {
      if(this.afbeelding<7){
        return "url(img/disneylogo.png)";
      }
      else {
        return "url(img/roundabout.jpg)";
      }
    }
  }


}

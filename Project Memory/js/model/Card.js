class Card extends Observable{

  constructor(afbeeldingId){
    super();
    console.log("hij werkt");
    this.afbeelding = afbeeldingId;
    this.isClosed = true;
    this.isClickable = true;
    switch (afbeeldingId) {
      case 0:this.afbeeldingsrc = "url(../../img/Groep4/Donald.jpg)";break;
      case 1:this.afbeeldingsrc = "url(../../img/Groep4/elsa.png)";break;
      case 2:this.afbeeldingsrc = "url(../../img/Groep4/mermaid.png)";break;
      case 3:this.afbeeldingsrc = "url(../../img/Groep4/Mickey.png)";break;
      case 4:this.afbeeldingsrc = "url(../../img/Groep4/pooh.jpg)";break;
      case 5:this.afbeeldingsrc = "url(../../img/Groep4/simba.png)";break;
      case 6:this.afbeeldingsrc = "url(../../img/Groep4/woody.png)";break;

      case 7:this.afbeeldingsrc2 = "url(../../img/Groep8/airballoon.png)";break;
      case 8:this.afbeeldingsrc2 = "url(../../img/Groep8/ambulance.jpg)";break;
      case 9:this.afbeeldingsrc2 = "url(../../img/Groep8/bigship.jpg)";break;
      case 10:this.afbeeldingsrc2 = "url(../../img/Groep8/bike.jpg)";break;
      case 11:this.afbeeldingsrc2 = "url(../../img/Groep8/bikething.jpg)";break;
      case 12:this.afbeeldingsrc2 = "url(../../img/Groep8/blimp.jpg)";break;
      case 13:this.afbeeldingsrc2 = "url(../../img/Groep8/boat.jpg)";break;
      case 14:this.afbeeldingsrc2 = "url(../../img/Groep8/canoe.png)";break;
      case 15:this.afbeeldingsrc2 = "url(../../img/Groep8/fbi.jpg)";break;
      case 16:this.afbeeldingsrc2 = "url(../../img/Groep8/firetruck.jpg)";break;
      case 17:this.afbeeldingsrc2 = "url(../../img/Groep8/helicopter.jpg)";break;
      case 18:this.afbeeldingsrc2 = "url(../../img/Groep8/hotwheels.jpg)";break;
      case 19:this.afbeeldingsrc2 = "url(../../img/Groep8/plane.png)";break;
      case 20:this.afbeeldingsrc2 = "url(../../img/Groep8/smallcar.jpg)";break;
      case 21:this.afbeeldingsrc2 = "url(../../img/Groep8/spaceship.png)";break;
      case 22:this.afbeeldingsrc2 = "url(../../img/Groep8/submarine.jpg)";break;
      case 23:this.afbeeldingsrc2 = "url(../../img/Groep8/train.jpg)";break;
      case 24:this.afbeeldingsrc2 = "url(../../img/Groep8/trash.jpg)";break;
    }
    document.getElementById('cards'+(afbeeldingId+1)).style.backgroundImage = this.afbeeldingsrc2;


  }

  omdraaien(){
    this.isClosed = !this.isClosed;
    this.notify();
  }


}

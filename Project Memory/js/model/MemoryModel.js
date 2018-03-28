class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1 = new Player("a", "b", "c");
      this.player2 = new Player("a", "b", "c");
      this.aantalAfbeeldingen = 0;
    }

    setNames(n1,n2){
      this.player1 = n1; this.player2 = n2;
      this.notify();
    }

    maakSpeelveld(){
      new Card(1);
      console.log("model werkt");
      // document.getElementById('card1').style.backgroundImage = "url(img/Groep4/Donald.jpg)"
    }

    maakKaart(){

    }

    FlipKaart(kaartID){

    }


}

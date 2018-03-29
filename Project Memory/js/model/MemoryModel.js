class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1Naam;
      this.player2Naam;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.aantalAfbeeldingen = 0;
    }

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
      this.notify();
    }

    maakSpeelveld1(){
      new Card(0);
      new Card(1);
      new Card(2);
      new Card(3);
      new Card(4);
      new Card(5);
      new Card(6);

      console.log("model1 werkt");
      // document.getElementById('card1').style.backgroundImage = "url(img/Groep4/Donald.jpg)"
    }

    maakSpeelveld2(){
      new Card(7);
      new Card(8);
      new Card(9);
      new Card(10);
      new Card(11);
      new Card(12);
      new Card(13);
      new Card(14);
      new Card(15);
      new Card(16);
      new Card(17);
      new Card(18);
      new Card(19);
      new Card(20);
      new Card(21);
      new Card(22);
      new Card(23);
      new Card(24);



      console.log("model2 werkt");
      // document.getElementById('card1').style.backgroundImage = "url(img/Groep4/Donald.jpg)"
    }

    maakKaart(){

    }

    FlipKaart(kaartID){

    }


}

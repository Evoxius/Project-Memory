class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1Naam;
      this.player2Naam;
      this.cardArray;
      this.currentIndex;
      this.temporaryValue;
      this.randomIndex;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.aantalAfbeeldingen = 0;
    }

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
      this.notify();
    }

    maakSpeelveld(){
      var i = 1
      if(document.getElementById('groep8').checked)
      {

      }
      else{
        this.cardArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
        this.cardArray = this.shuffle(this.cardArray);
        console.log(this.cardArray);
        }
      // new Card(0);
      // new Card(1);
      // new Card(2);
      // new Card(3);
      // new Card(4);
      // new Card(5);
      // new Card(6);
    }

    shuffle(array){
      this.currentIndex = array.length;

      while(this.currentIndex !== 0){
        this.randomIndex = Math.floor(Math.random() * this.currentIndex);
        this.currentIndex -= 1;
        this.temporaryValue = array[this.currentIndex];
        array[this.currentIndex] = array[this.randomIndex];
        array[this.randomIndex] = this.temporaryValue;
      }
      return array;
    }

    maakKaart(){

    }

    FlipKaart(kaartID){

    }


}

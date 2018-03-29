class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1Naam;
      this.player2Naam;
      this.contentArray;
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
      if(document.getElementById('groep8').checked)
      {
        this.contentArray = [7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24]
        this.contentArray = this.shuffle(this.contentArray);
        console.log(this.contentArray);
        this.cardArray = []
        for (var i = 0; i < this.contentArray.length; i++) {
          this.cardArray.push(new Card(this.contentArray[i]));
        }
        console.log(this.cardArray)
        }
      else{
        this.contentArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
        this.contentArray = this.shuffle(this.contentArray);
        console.log(this.contentArray);
        this.cardArray = []
        for (var i = 0; i < this.contentArray.length; i++) {
          this.cardArray.push(new Card(this.contentArray[i]));
        }
        console.log(this.cardArray)
        }
        document.getElementById('card1').style.backgroundImage = this.cardArray[0].afbeeldingsrc;
        document.getElementById('card2').style.backgroundImage = this.cardArray[1].afbeeldingsrc;
        document.getElementById('card3').style.backgroundImage = this.cardArray[2].afbeeldingsrc;
        document.getElementById('card4').style.backgroundImage = this.cardArray[3].afbeeldingsrc;
        document.getElementById('card5').style.backgroundImage = this.cardArray[4].afbeeldingsrc;
        document.getElementById('card6').style.backgroundImage = this.cardArray[5].afbeeldingsrc;
        document.getElementById('card7').style.backgroundImage = this.cardArray[6].afbeeldingsrc;
        document.getElementById('card8').style.backgroundImage = this.cardArray[7].afbeeldingsrc;
        document.getElementById('card9').style.backgroundImage = this.cardArray[8].afbeeldingsrc;
        document.getElementById('card10').style.backgroundImage = this.cardArray[9].afbeeldingsrc;
        document.getElementById('card11').style.backgroundImage = this.cardArray[10].afbeeldingsrc;
        document.getElementById('card12').style.backgroundImage = this.cardArray[11].afbeeldingsrc;
        document.getElementById('card13').style.backgroundImage = this.cardArray[12].afbeeldingsrc;
        document.getElementById('card14').style.backgroundImage = this.cardArray[13].afbeeldingsrc;
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

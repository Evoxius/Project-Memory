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
      this.guess1Id;
      this.guess2Id;
      this.timeoutLock = false;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.aantalAfbeeldingen = 0;
    }

     // Hierdoor wordt de naam gezet.

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
    }

    // Door deze code wordt de speelveld van eerst groep 8 aangemaakt als groep8 aangeklikt is. Anders wordt de speelveld van groep 4 aangemaakt met 14 kaarten.

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
        this.notify();
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

    flipKaart(kaartID){
      if(Number.isInteger(this.guess1Id))
      {
<<<<<<< HEAD
        if(this.cardArray[kaartID].getClickable()){
          if(this.contentArray[kaartID] == this.contentArray[this.guess1Id])
          {
            console.log("SCORE");
            this.guess1Id = "";
            this.cardArray[kaartID].omdraaien();
            this.cardArray[kaartID].setUnclickable();
            var audio = new Audio('right.mp3');
            audio.play();
          }
          else
          {
            console.log("Nope");
            this.cardArray[this.guess1Id].omdraaien();
            this.cardArray[this.guess1Id].setClickable()
            this.guess1Id = "";
            var audio = new Audio('wrong.mp3');
            audio.play();
          }
=======
        if(this.cardArray[kaartID].getClickable() && this.timeoutLock == false){
          this.guess2Id = kaartID;
          this.timeoutLock = true;
          this.cardArray[kaartID].omdraaien();
          window.setTimeout(this.eindTimeout.bind(this),2000);
>>>>>>> 4e9e1a8038e2c108fff1ec43f69fa1202baae292
        }
      }
      else if(this.cardArray[kaartID].getClickable()){
        this.cardArray[kaartID].omdraaien();
        this.cardArray[kaartID].setUnclickable();
        this.guess1Id = kaartID;
<<<<<<< HEAD
      }
    this.notify();
=======
        }
      this.notify();
    }

    eindTimeout(){
      if(this.contentArray[this.guess2Id] == this.contentArray[this.guess1Id])
      {
        console.log("SCORE");
        this.guess1Id = "";
        this.cardArray[this.guess2Id].setUnclickable();
      }
      else
      {
        console.log("Nope");
        this.cardArray[this.guess1Id].omdraaien();
        this.cardArray[this.guess2Id].omdraaien();
        this.cardArray[this.guess1Id].setClickable()
        this.guess1Id = "";
      }
      this.timeoutLock = false;
      this.notify();
>>>>>>> 4e9e1a8038e2c108fff1ec43f69fa1202baae292
    }
}

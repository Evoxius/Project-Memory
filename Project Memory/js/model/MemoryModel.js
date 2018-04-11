class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1Naam;
      this.player2Naam;
      this.player3Naam;
      this.contentArray;
      this.cardArray;
      this.currentIndex;
      this.temporaryValue;
      this.randomIndex;
      this.guess1Id;
      this.guess2Id;
      this.gameDone = false;
      this.timeoutLock = false;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.player3 = new Player(document.getElementById("usr1").value, "b", "c");
      this.playerTurn;
      this.highscoreArray = [];

      this.aantalAfbeeldingen = 0;
    }

     // Hierdoor wordt de stopwatch gemaakt.

    callStopwatch(){
      this.Stopwatch = new Stopwatch();
    }

     // Hierdoor wordt de naam gezet.

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
      this.player3Naam = document.getElementById("usr1").value;
      this.playerTurn = this.player1Naam;
      console.log(this.playerTurn);

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

     // Hierdoor wordt de shuffle array aangemaakt.

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

    // Hierdoor worden de kaarten geflipt.

    flipKaart(kaartID){
      if(Number.isInteger(this.guess1Id))
      {
        if(this.cardArray[kaartID].getClickable() && this.timeoutLock == false){
          this.guess2Id = kaartID;
          var audio = new Audio('flip.mp3');
          audio.play();
          this.timeoutLock = true;
          this.cardArray[kaartID].omdraaien();
          window.setTimeout(this.eindTimeout.bind(this),2000);
        }
      }
      else if(this.cardArray[kaartID].getClickable()){
        this.cardArray[kaartID].omdraaien();
        var audio = new Audio('flip.mp3');
        audio.play();
        this.cardArray[kaartID].setUnclickable();
        this.guess1Id = kaartID;
      }
      this.notify();
    }

    // Hier wordt de highscores aangemaakt.

    formHighscores(){
      for (var i = 0; localStorage.getItem("Memory-TimedSpeler" + i) != null; i++) {
        let speler = JSON.parse(localStorage.getItem("Memory-TimedSpeler" + i));
        this.highscoreArray[i] = speler;
      }
      this.highscoreArray.sort(this.compareNumbers);
      this.notify();
    }

    // Hier worden de 2 nummers van a en b vergelijkt

    compareNumbers(a, b) {
      if (a.total < b.total){
        return -1;}
      if (a.total > b.total){
        return 1;}
      return 0;
}

    // Hierdoor worden de punten van de multiplayer verhoogt en als het spel klaar is in timed mode wordt de stopwatch gestopt.

    eindTimeout(){
      if(this.contentArray[this.guess2Id] == this.contentArray[this.guess1Id])
      {
        console.log("SCORE");
        this.cardArray[this.guess2Id].setUnclickable();
        this.cardArray[this.guess1Id].setTransparent();
        this.cardArray[this.guess2Id].setTransparent();
        if (this.playerTurn == this.player1Naam) {
          this.player1.verhoogPunten();
        }
        else {
          this.player2.verhoogPunten();
        }
        this.guess1Id = "";
      }
      else
      {
        console.log("Nope");
        this.cardArray[this.guess1Id].omdraaien();
        this.cardArray[this.guess2Id].omdraaien();
        this.cardArray[this.guess1Id].setClickable()
        this.guess1Id = "";
        this.changeTurn();
      }
      this.gameDone = true;
      for (var i = 0; i < this.cardArray.length; i++) {
        if(this.cardArray[i].getClickable()){
          this.gameDone = false;
        }
      }
      if (this.gameDone && document.getElementById("option2").checked) {
        this.Stopwatch.clear();
        this.Stopwatch.sendToStorage(this.player1Naam);
      }
      this.timeoutLock = false;
      this.notify();
    }

    // Hier worden de beurten van de spelers in multiplayer aangemaakt

    changeTurn(){
      if (this.playerTurn == this.player1Naam) {
        this.playerTurn = this.player2Naam;
      }
      else {
        this.playerTurn = this.player1Naam;
      }
    }

    // Hierdoor wordt het spel beeindigt als het nodig is.


    beeindigSpel(){
      if (this.Stopwatch) {
          this.Stopwatch.clear();
      }
      this.contentArray = [];
      this.cardArray = [];
      this.guess1Id = "";
      this.timeoutLock = false;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.aantalAfbeeldingen = 0;
      this.gameDone = false;
    }

}

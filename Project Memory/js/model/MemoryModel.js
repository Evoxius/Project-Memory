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
      this.gameDone = false;
      this.timeoutLock = false;
      this.player1 = new Player(document.getElementById("usr1").value);
      this.player2 = new Player(document.getElementById("usr2").value);
      this.playerTurn;
      this.timeout;
      this.highscoreArrayGroep4 = [];
      this.highscoreArrayGroep8 = [];
    }

    // Door deze code wordt een nieuwe stopwatch aangemaakt

    callStopwatch(){
      this.Stopwatch = new Stopwatch();
    }

     // Hierdoor wordt de naam gezet.

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
      this.playerTurn = this.player1Naam;
    }

    // Door deze code wordt de speelveld van eerst groep 8 aangemaakt als groep8 aangeklikt is. Anders wordt de speelveld van groep 4 aangemaakt met 14 kaarten.

    maakSpeelveld(){
      if(document.getElementById('groep8').checked)
      {
        this.contentArray = [7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24]
        this.contentArray = this.shuffle(this.contentArray);
        this.cardArray = []
        for (var i = 0; i < this.contentArray.length; i++) {
          this.cardArray.push(new Card(this.contentArray[i]));
        }
        }
      else{
        this.contentArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
        this.contentArray = this.shuffle(this.contentArray);
        this.cardArray = []
        for (var i = 0; i < this.contentArray.length; i++) {
          this.cardArray.push(new Card(this.contentArray[i]));
        }
        }
        this.notify();
      }

      // Door deze code worden de kaarten geshuffeld

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

    // Door deze code kan de kaart geflipt worden

    flipKaart(kaartID){
      if(Number.isInteger(this.guess1Id))
      {
        if(this.cardArray[kaartID].getClickable() && this.timeoutLock == false){
          this.guess2Id = kaartID;
          var audio = new Audio('audio/flip.mp3');
          audio.play();
          this.timeoutLock = true;
          this.cardArray[kaartID].omdraaien();
          window.clearTimeout(this.timeout);
          window.setTimeout(this.eindTimeout.bind(this),2000);
        }
      }
      else if(this.cardArray[kaartID].getClickable()){
        this.cardArray[kaartID].omdraaien();
        var audio = new Audio('audio/flip.mp3');
        audio.play();
        this.cardArray[kaartID].setUnclickable();
        this.guess1Id = kaartID;
        this.timeout = window.setTimeout(this.timeOut.bind(this),5000)
      }
      this.notify();
    }

    // Door deze code is het mogelijk om meerdere beurten te hebben

    timeOut(){
      this.changeTurn();
      this.cardArray[this.guess1Id].omdraaien();
      this.cardArray[this.guess1Id].setClickable();
      this.guess1Id = "";
      this.notify();
    }

    // Door deze code wordt de highscore aangemaakt

    formHighscores(){
      if (document.getElementById("groep4").checked) {
        this.highscoreArrayGroep4 = [];
        for (var i = 0; localStorage.getItem("Memory-TimedSpeler-Groep4" + i) != null; i++) {
          let speler = JSON.parse(localStorage.getItem("Memory-TimedSpeler-Groep4" + i));
          this.highscoreArrayGroep4[i] = speler;
          this.highscoreArrayGroep4.sort(this.compareNumbers);
        }
      }
      else {
        this.highscoreArrayGroep8 = [];
        for (var i = 0; localStorage.getItem("Memory-TimedSpeler-Groep8" + i) != null; i++) {
          let speler = JSON.parse(localStorage.getItem("Memory-TimedSpeler-Groep8" + i));
          this.highscoreArrayGroep8[i] = speler;
          this.highscoreArrayGroep8.sort(this.compareNumbers);
        }
      }
      this.notify();
    }

    // Door deze code wordt de nummers bekeken en als het voldoet aan de twee if-statements, returnt het -1 of 1.

    compareNumbers(a, b) {
      if (a.total < b.total){
        return -1;}
      if (a.total > b.total){
        return 1;}
      return 0;
    }

    // Door deze code wordt de timeout beeindigt

    eindTimeout(){
      if(this.contentArray[this.guess2Id] == this.contentArray[this.guess1Id])
      {
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
        this.guess2Id = "";
      }
      else
      {
        this.cardArray[this.guess1Id].omdraaien();
        this.cardArray[this.guess2Id].omdraaien();
        this.cardArray[this.guess1Id].setClickable()
        this.guess1Id = "";
        this.guess2Id = "";
        this.changeTurn();
      }
      this.gameDone = true;
      for (var i = 0; i < this.cardArray.length; i++) {
        if(this.cardArray[i].getClickable()){
          this.gameDone = false;
        }
      }
      if (this.gameDone && document.getElementById("option1").checked) {
        var audio = new Audio('audio/winsound.mp3');
        audio.play();
      }
      if (this.gameDone && document.getElementById("option2").checked) {
        var audio = new Audio('audio/winsound.mp3');
        audio.play();
        this.Stopwatch.clear();
        this.Stopwatch.sendToStorage(this.player1Naam);
        this.formHighscores();
      }
      this.timeoutLock = false;
      this.notify();
    }

    // Door deze code is het mogelijk om van beurt te veranderen

    changeTurn(){
      if (this.playerTurn == this.player1Naam) {
        this.playerTurn = this.player2Naam;
      }
      else {
        this.playerTurn = this.player1Naam;
      }
    }

    // Door deze code kan het spel beindigt worden

    beeindigSpel(){
      if (this.Stopwatch) {
          this.Stopwatch.clear();
      }
      this.contentArray = [];
      this.cardArray = [];
      this.guess1Id = "";
      this.timeoutLock = false;
      this.player1 = new Player(document.getElementById("usr1").value);
      this.player2 = new Player(document.getElementById("usr2").value);
      this.gameDone = false;
    }

}

class MemoryModel extends Observable {
  constructor() {
    super();
    this.player1Naam;
    this.player2Naam;
    this.player3Naam;
    this.contentArray = [];
    this.cardArray = [];
    this.currentIndex;
    this.temporaryValue;
    this.randomIndex;
    this.guess1Id;
    this.guess2Id;
    this.timeoutLock = false;
    this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
    this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
    this.player3 = new Player(document.getElementById("usr1").value, "b", "c");
    this.aantalAfbeeldingen = 0;
    this.gameDone = false;
  }

  // Hierdoor wordt de naam gezet.

  setNames() {
    this.player1Naam = document.getElementById("usr1").value;
    this.player2Naam = document.getElementById("usr2").value;
    this.player3Naam = document.getElementById("usr1").value;


  }

  // Door deze code wordt de speelveld van eerst groep 8 aangemaakt als groep8 aangeklikt is. Anders wordt de speelveld van groep 4 aangemaakt met 14 kaarten.

  maakSpeelveld() {
    if (document.getElementById('groep8').checked) {
      this.contentArray = [7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24]
      this.contentArray = this.shuffle(this.contentArray);
      this.cardArray = []
      for (var i = 0; i < this.contentArray.length; i++) {
        this.cardArray.push(new Card(this.contentArray[i]));
      }
    } else {
      this.contentArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
      this.contentArray = this.shuffle(this.contentArray);
      this.cardArray = []
      for (var i = 0; i < this.contentArray.length; i++) {
        this.cardArray.push(new Card(this.contentArray[i]));
      }
    }
    this.notify();
  }

  shuffle(array) {
    this.currentIndex = array.length;

    while (this.currentIndex !== 0) {
      this.randomIndex = Math.floor(Math.random() * this.currentIndex);
      this.currentIndex--;
      this.temporaryValue = array[this.currentIndex];
      array[this.currentIndex] = array[this.randomIndex];
      array[this.randomIndex] = this.temporaryValue;
    }
    return array;
  }

  flipKaart(kaartID) {
    if (Number.isInteger(this.guess1Id)) {
      if (this.cardArray[kaartID].getClickable() && this.timeoutLock == false) {
        this.guess2Id = kaartID;
        var audio = new Audio('flip.mp3');
        audio.play();
        this.timeoutLock = true;
        this.cardArray[kaartID].omdraaien();
        window.setTimeout(this.eindTimeout.bind(this), 2000);
      }
    } else if (this.cardArray[kaartID].getClickable()) {
      this.cardArray[kaartID].omdraaien();
      var audio = new Audio('flip.mp3');
      audio.play();
      this.cardArray[kaartID].setUnclickable();
      this.guess1Id = kaartID;
    }
    this.notify();
  }


  eindTimeout() {
    if (this.contentArray[this.guess2Id] == this.contentArray[this.guess1Id]) {
      console.log("SCORE");
      this.cardArray[this.guess2Id].setUnclickable();
      this.cardArray[this.guess2Id].setTransparent();
      this.cardArray[this.guess1Id].setTransparent();
      this.guess1Id = "";
    } else {
      console.log("Nope");
      this.cardArray[this.guess1Id].omdraaien();
      this.cardArray[this.guess2Id].omdraaien();
      this.cardArray[this.guess1Id].setClickable()
      this.guess1Id = "";
    }
    this.timeoutLock = false;
    this.gameDone = true;
    for (var i = 0; i < this.cardArray.length; i++) {
      if (this.cardArray[i].getClickable()) {
        this.gameDone = false;
      }
    }
    this.notify();
  }

  timedWatch() {
    this.klokid;
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let interval;

    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
      this.klokid = window.setTimeout(this.timedWatch.bind(this), 1000);
    }
    this.notify();
  }


  beeindigSpel() {
    this.contentArray = [];
    this.cardArray = [];
    this.guess1Id = "";
    this.timeoutLock = false;
    this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
    this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
    this.aantalAfbeeldingen = 0;
    this.gamedone = false;
  }

}

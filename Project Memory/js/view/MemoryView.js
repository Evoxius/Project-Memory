class MemoryView  extends Observer{

  constructor(model){
    super(model);
    this.model = model;
    this.model.addObserver(this);
  }

  addObserver(m){
    m.addObserver(this);
  }

  // Door deze code worden de namen van speler 1 en speler 2 in real-time geplaatst op de goede plek.

  update(){
    super.update();
    document.getElementById('chat1').innerHTML = this.model.player1Naam;
    document.getElementById('chat2').innerHTML = this.model.player2Naam;
    document.getElementById('chat3').innerHTML = this.model.player1Naam;
    document.getElementById('result1').getElementsByTagName("p")[0].innerHTML ="Score: " + this.model.player1.getPunten();
    document.getElementById('result2').getElementsByTagName("p")[0].innerHTML ="Score: " + this.model.player2.getPunten();
    if (this.model.gameDone) {
      this.showHighscore();
    }
    this.showMessage(this.model.playerTurn + " is aan de beurt.");
    if (this.model.gameDone) {
      if (this.model.player1.getPunten() > this.model.player2.getPunten()) {
        this.showMessage(this.model.player1Naam + " heeft gewonnen.")
      } else if (this.model.player1.getPunten() < this.model.player2.getPunten()) {
        this.showMessage(this.model.player2Naam + " heeft gewonnen.")
      } else {
        this.showMessage("Het is gelijkspel.")
      }
    }
    if(this.model.Stopwatch){this.model.Stopwatch.h2.textContent = (this.model.Stopwatch.hours ? (this.model.Stopwatch.hours > 9 ? this.model.Stopwatch.hours : "0" + this.model.Stopwatch.hours) : "00") + ":" + (this.model.Stopwatch.minutes ? (this.model.Stopwatch.minutes > 9 ? this.model.Stopwatch.minutes : "0" + this.model.Stopwatch.minutes) : "00") + ":" + (this.model.Stopwatch.seconds > 9 ? this.model.Stopwatch.seconds : "0" + this.model.Stopwatch.seconds);}
    if(document.getElementById('groep8').checked){
      for (var i = 0; i < this.model.cardArray.length; i++) {
        document.getElementById('cards'+(i+1)).style.backgroundImage = this.model.cardArray[i].getSrc()
        if(this.model.cardArray[i].getTransparent()){
          this.setTransparent("cards"+(i+1));
        }
        else{
          this.setOpaque("cards"+(i+1));
        }
      }
    }
    else{
      for (var i = 0; i < this.model.cardArray.length; i++) {
        document.getElementById('card'+(i+1)).style.backgroundImage = this.model.cardArray[i].getSrc()
        if(this.model.cardArray[i].getTransparent()){
          this.setTransparent("card"+(i+1));
        }
        else{
          this.setOpaque("card"+(i+1))
        }
      }
    }
  }

  // Door deze code kan de speler groep 4 kiezen en met 14 kaarten spelen.

  showDivGroep4(){
    for (let i = 1; i < 37; i++) {
      document.getElementById('cards' + i).style.display = "none";
    }
    for (let i = 1; i < 15; i++) {
      document.getElementById('card' + i).style.display = "block";
    }
    for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
      document.getElementsByClassName('card')[i].style.width = "10%";
      document.getElementsByClassName('card')[i].style.height = "150px";
      document.getElementsByClassName('card')[i].style.margin = "60px 50px 0px 10px";
    }
  }

  // Door deze code kan de speler groep 8 kiezen en met 36 kaarten spelen.

  showDivGroep8() {
     document.getElementById('startPagina').style.display = "none";
     for (let i = 1; i < 37; i++) {
       document.getElementById('cards' + i).style.display = "block";
     }
     for (let i = 1; i < 15; i++) {
       document.getElementById('card' + i).style.display = "none";
     }
     for (let i = 0; i < document.getElementsByClassName('card2').length; i++) {
       document.getElementsByClassName('card2')[i].style.width = "7%";
       document.getElementsByClassName('card2')[i].style.height = "105px";
       document.getElementsByClassName('card2')[i].style.margin = "20px 50px 0px 10px";
     }
  }

  // Door deze code kan je multiplayer zien

  showMulti(){
    document.getElementById('singlePlayer').style.display = "none";
    document.getElementById('startPagina').style.display = "none";
    document.getElementById('cardContainer').style.display = "block";
    document.getElementById('speler2').style.display = "block";
    document.getElementById('speler1').style.display = "block";
    document.getElementById('veld').style.display = "block";
    document.getElementById('backAndTime2').style.display = "none";
    document.getElementById('backToStart2').style.display = "none"
    document.getElementById('backAndTime').style.display = "block";
    document.getElementById('backToStart').style.display = "block"

  }

  // Door deze code kan je timed mode zien

  showTimed(){
    document.getElementById('singlePlayer').style.display = "block";
    document.getElementById('cardContainer').style.display = "block";
    document.getElementById('intro').style.display = "block";
    document.getElementById('game').style.display = "block";
    document.getElementById('singlePlayerVeld').style.display = "block";
    document.getElementById('veld').style.display = "none";
    document.getElementById('backAndTime2').style.display = "block";
    document.getElementById('backToStart2').style.display = "block";
    document.getElementById('backAndTime').style.display = "none";
    document.getElementById('backToStart').style.display = "none";
    document.getElementById('startPagina').style.display = "none";
  }

  // Door deze code kan je de highscore zien

  showHighscore(){
    if (document.getElementById("groep4").checked) {
      for (var i = 0; i < 5; i++) {
        if (this.model.highscoreArrayGroep4[i]) {
          document.getElementById("highscore").getElementsByTagName("p")[i].innerHTML =+i+1 + ". "+"Naam: " + this.model.highscoreArrayGroep4[i].naam +   " | "+
          " tijd: "+ this.model.highscoreArrayGroep4[i].hours + " : "
          + this.model.highscoreArrayGroep4[i].minutes + " : "
          + this.model.highscoreArrayGroep4[i].seconds;
        }
        else {
          document.getElementById("highscore").getElementsByTagName("p")[i].innerHTML =+i+1 + '. "Niemand"'
        }
      }
    }
    if (document.getElementById("groep8").checked) {
      for (var i = 0; i < 5; i++) {
        if (this.model.highscoreArrayGroep8[i]) {
          document.getElementById("highscore").getElementsByTagName("p")[i].innerHTML =+i+1+". "+"Naam: " + this.model.highscoreArrayGroep8[i].naam +  " | " +
          " tijd: "+ this.model.highscoreArrayGroep8[i].hours + " : "
          + this.model.highscoreArrayGroep8[i].minutes + " : "
          + this.model.highscoreArrayGroep8[i].seconds;
        }
        else {
          document.getElementById("highscore").getElementsByTagName("p")[i].innerHTML =+i+1 + '. "Niemand"'
        }
      }
    }
  }

  // Door deze code kan de speler het spel starten.

  showStart() {
     document.getElementById('cardContainer').style.display = "none";
     document.getElementById('singlePlayer').style.display = "none";
     document.getElementById('startPagina').style.display = "block";
  }

  // Door deze code kan de speler (als de speler multiplayer kiest) twee naamvelden zien.

   showName() {
     document.getElementById('form-group2').style.display = "block";
  }

  // Door deze code kan de speler (als de speler Timed Mode kiest) maar een naamveld zien.
   hideName() {
     document.getElementById('form-group2').style.display = "none";
  }

  // Door deze code wordt de scherm van speler1 gemaakt waar speler1 zijn/haar profielfoto kan veranderen.

  showModal1(){
          // Get the modal
      let modal = document.getElementById('fotoVeld');
      var audio = new Audio('audio/click.mp3');
      audio.play();

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('speler1');
      let modalImg = document.getElementById("speler1");
      let captionText = document.getElementById("caption");
      document.getElementById('profile1').style.display = "block"
      document.getElementById('profile2').style.display = "block"
      document.getElementById('profile3').style.display = "block"
      document.getElementById('profile4').style.display = "block"
      document.getElementById('profile5').style.display = "none"
      document.getElementById('profile6').style.display = "none"
      document.getElementById('profile7').style.display = "none"
      document.getElementById('profile8').style.display = "none"
      document.getElementById('profile9').style.display = "none"
      document.getElementById('profile10').style.display = "none"
      document.getElementById('profile11').style.display = "none"
      document.getElementById('profile12').style.display = "none"
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = document.getElementById("caption").innerHTML;
      }

      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }
  }

  // Door deze code wordt de scherm van speler2 gemaakt waar speler2 zijn/haar profielfoto kan veranderen.

  showModal2(){
          // Get the modal
      let modal = document.getElementById('fotoVeld');
      var audio = new Audio('audio/click.mp3');
      audio.play();

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('speler2');
      let modalImg = document.getElementById("speler2");
      let captionText = document.getElementById("caption");
      document.getElementById('profile1').style.display = "none"
      document.getElementById('profile2').style.display = "none"
      document.getElementById('profile3').style.display = "none"
      document.getElementById('profile4').style.display = "none"
      document.getElementById('profile5').style.display = "block"
      document.getElementById('profile6').style.display = "block"
      document.getElementById('profile7').style.display = "block"
      document.getElementById('profile8').style.display = "block"
      document.getElementById('profile9').style.display = "none"
      document.getElementById('profile10').style.display = "none"
      document.getElementById('profile11').style.display = "none"
      document.getElementById('profile12').style.display = "none"
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = document.getElementById("caption").innerHTML;
      }

      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }
  }

  // Door deze code wordt de scherm van speler3 gemaakt waar speler3 zijn/haar profielfoto kan veranderen.

  showModal3(){
          // Get the modal
      let modal = document.getElementById('fotoVeld');
      var audio = new Audio('audio/click.mp3');
      audio.play();

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('speler3');
      let modalImg = document.getElementById("speler3");
      let captionText = document.getElementById("caption");
      document.getElementById('profile1').style.display = "none"
      document.getElementById('profile2').style.display = "none"
      document.getElementById('profile3').style.display = "none"
      document.getElementById('profile4').style.display = "none"
      document.getElementById('profile5').style.display = "none"
      document.getElementById('profile6').style.display = "none"
      document.getElementById('profile7').style.display = "none"
      document.getElementById('profile8').style.display = "none"
      document.getElementById('profile9').style.display = "block"
      document.getElementById('profile10').style.display = "block"
      document.getElementById('profile11').style.display = "block"
      document.getElementById('profile12').style.display = "block"
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = document.getElementById("caption").innerHTML;
      }

      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }
  }

  // Door deze code kan speler1 klikken op verschillende afbeeldingen en de profielfoto wordt veranderdt

  changeImage(change){
        var audio = new Audio('audio/click.mp3');
        audio.play();
        if (change < 4) {
        this.pic = document.getElementById('speler1');
        }
        else if (change < 8) {
        this.pic = document.getElementById('speler2');
        }
        else {
        this.pic = document.getElementById('speler3');
        }
        let modal = document.getElementById('fotoVeld');

        switch (change){
        case 0: this.pic.src = "img/profiel1.jpg"; break;
        case 1: this.pic.src = "img/profiel2.jpg"; break;
        case 2: this.pic.src = "img/profiel3.png"; break;
        case 3: this.pic.src = "img/profiel4.jpg"; break;
        case 4: this.pic.src = "img/profiel1.jpg"; break;
        case 5: this.pic.src = "img/profiel2.jpg"; break;
        case 6: this.pic.src = "img/profiel3.png"; break;
        case 7: this.pic.src = "img/profiel4.jpg"; break;
        case 8: this.pic.src = "img/profiel1.jpg"; break;
        case 9: this.pic.src = "img/profiel2.jpg"; break;
        case 10: this.pic.src = "img/profiel3.png"; break;
        case 11: this.pic.src = "img/profiel4.jpg"; break;
      }
        modal.style.display = "none";
  }
  // Door deze code kan iets transparent worden.

  setTransparent(id){
    document.getElementById(id).style.opacity = "0.0";
    document.getElementById(id).style.cursor = "default";
  }

  // Door deze code kan iets ondoorzichtbaar worden.

  setOpaque(id){
    document.getElementById(id).style.opacity = "1";
    document.getElementById(id).style.cursor = "pointer";
  }

  // Door deze code kunnen de spelers zien wie aan de beurt is en meer.

  showMessage(message) {
    document.getElementById('backAndTime').getElementsByTagName("p")[0].innerHTML = message;
  }

}

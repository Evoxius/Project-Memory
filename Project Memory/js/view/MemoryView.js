class MemoryView  extends Observer{

    constructor(model){
      super(model);
      this.model = model;

      this.model.addObserver(this);
  }

  update(){
    super.update();
<<<<<<< HEAD

=======
  document.getElementById('chat1').innerHTML = this.model.player1Naam;
  document.getElementById('chat2').innerHTML = this.model.player2Naam;
>>>>>>> a20173100e123d272492148e08749effda290204

  }

  // Door deze code kan de speler groep 4 kiezen en met 14 kaarten spelen.

  showDivGroep4(){
    document.getElementById('container').style.display = "block";
    document.getElementById('container2').style.display = "none";
    for (var i = 1; i < 37; i++) {
      document.getElementById('cards' + i).style.display = "none";
    }
    for (var i = 1; i < 15; i++) {
      document.getElementById('card' + i).style.display = "block";
    }
    for (var i = 0; i < document.getElementsByClassName('card').length; i++) {
      document.getElementsByClassName('card')[i].style.width = "10%";
      document.getElementsByClassName('card')[i].style.height = "150px";
      document.getElementsByClassName('card')[i].style.margin = "60px 50px 0px 10px";
    }
  }

  // Door deze code kan de speler groep 8 kiezen en met 36 kaarten spelen.

  showDivGroep8() {
     document.getElementById('container').style.display = "block";
     document.getElementById('container2').style.display = "none";
     for (var i = 1; i < 37; i++) {
       document.getElementById('cards' + i).style.display = "block";
     }
     for (var i = 1; i < 15; i++) {
       document.getElementById('card' + i).style.display = "none";
     }
     for (var i = 0; i < document.getElementsByClassName('card2').length; i++) {
       document.getElementsByClassName('card2')[i].style.width = "7%";
       document.getElementsByClassName('card2')[i].style.height = "105px";
       document.getElementsByClassName('card2')[i].style.margin = "20px 50px 0px 10px";
     }
  }

  // Door deze code kan de speler het spel starten.

  showStart() {
     document.getElementById('container').style.display = "none";
     document.getElementById('container2').style.display = "block";
  }

  // Door deze code kan de speler (als de speler multiplayer kiest) twee naamvelden zien.

   showName() {
     document.getElementById('form-group2').style.display = "block";
  }

  // Door deze code kan de speler (als de speler Timed Mode kiest) maar een naamveld zien.
   hideName() {
     document.getElementById('form-group2').style.display = "none";
  }

<<<<<<< HEAD
  setTransparent(){
    document.getElementById('').style.opacity = "0.0";
  }

  showMessage(msg){

    document.getElementById('backAndTime').innerHTML = "Je hebt gewonnen"

  }


=======
  showMessage(message) {
    document.querySelector('div>p').innerHTML = message;
  }

>>>>>>> a20173100e123d272492148e08749effda290204

}

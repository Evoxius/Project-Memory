class MemoryController {
    constructor() {
        this.model = new MemoryModel();
        this.view = new MemoryView(this.model);
        document.getElementById('spelStart').addEventListener("click", (e) => {this.reageerOpStartSpel();});
        document.getElementById("backToStart").addEventListener("click", (e)=> {this.view.showStart();});
        document.getElementById("backToStart2").addEventListener("click", (e)=> {this.reageerOpBack();});
        document.getElementById("backToStart").addEventListener("click", (e)=> {this.reageerOpBack();});
        document.getElementById("multiplayer").addEventListener("click", (e)=> {this.view.showName();});
        document.getElementById("timedButton").addEventListener("click", (e)=> {this.view.hideName();});
        document.getElementById("speler1").addEventListener("click", (e)=> {this.view.showModal1();});
        document.getElementById("speler2").addEventListener("click", (e)=> {this.view.showModal2();});
        document.getElementById("speler3").addEventListener("click", (e)=> {this.view.showModal3();});
        document.getElementById('profile1').addEventListener('click', (e)=> {this.view.changeImage(0);});
        document.getElementById('profile2').addEventListener('click', (e)=> {this.view.changeImage(1);});
        document.getElementById('profile3').addEventListener('click', (e)=> {this.view.changeImage(2);});
        document.getElementById('profile4').addEventListener('click', (e)=> {this.view.changeImage(3);});
        document.getElementById('profile5').addEventListener('click', (e)=> {this.view.changeImage2(0);});
        document.getElementById('profile6').addEventListener('click', (e)=> {this.view.changeImage2(1);});
        document.getElementById('profile7').addEventListener('click', (e)=> {this.view.changeImage2(2);});
        document.getElementById('profile8').addEventListener('click', (e)=> {this.view.changeImage2(3);});
        document.getElementById('profile9').addEventListener('click', (e)=> {this.view.changeImage3(0);});
        document.getElementById('profile10').addEventListener('click', (e)=> {this.view.changeImage3(1);});
        document.getElementById('profile11').addEventListener('click', (e)=> {this.view.changeImage3(2);});
        document.getElementById('profile12').addEventListener('click', (e)=> {this.view.changeImage3(3);});
        document.getElementsByClassName('btn btn-primary')[0].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[1].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[2].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[3].addEventListener('click', (e)=> {this.reageerOpGroepClick();});

        for (var i = 0; i < 14; i++) {
          document.getElementById('card'+(1+i)).addEventListener('click', (e)=> {this.reageerOpKlikKaart();});
        }
        for (var i = 0; i < 36; i++) {
          document.getElementById('cards'+(1+i)).addEventListener('click', (e)=> {this.reageerOpKlikKaart();});
        }

    }

    // Door deze code wordt bevestigd welke groep jij als de speler hebt gekozen, de groep 4 of 8 wordt dan uitgevoerd als een spel.

    reageerOpStartSpel(e){
      e = window.event;
      this.model.setNames();
      this.model.maakSpeelveld();

      if (document.getElementById('groep8').checked) {
        this.view.showDivGroep8();
      }
      else {
        this.view.showDivGroep4();
      }

      if (document.getElementById('option2').checked) {
        this.view.showTimed();
        this.model.callStopwatch();
        this.model.formHighscores();
        this.view.showHighscore();
        this.view.addObserver(this.model.Stopwatch);
      }
      else {
        this.view.showMulti();
      }

      this.view.showMessage(this.model.player1Naam + " is aan de beurt.");
      console.log(e.srcElement.id);
      var audio = new Audio('audio/start.mp3');
      audio.play();
      }

      reageerOpGroepClick(){
        var audio = new Audio('audio/click.mp3');
        audio.play();
      }

    // Door deze code wordt er gereageerd op het klikken op een kaart.

    reageerOpKlikKaart(e){
      e = window.event;
      this.model.flipKaart(Number(e.path[0].id.match(/\d/g).join("")) - 1);
    }

    // Door deze code wordt het spel beeindigt als je op de 'Back' knop drukt.

    reageerOpBack(){
      this.view.showStart();
      this.model.beeindigSpel();
    }


}

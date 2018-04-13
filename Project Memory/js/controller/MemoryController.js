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
        document.getElementsByClassName('btn btn-primary')[0].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[1].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[2].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementsByClassName('btn btn-primary')[3].addEventListener('click', (e)=> {this.reageerOpGroepClick();});
        document.getElementById("profile" + 1).addEventListener('click', (e)=> {this.view.changeImage(0);});
        document.getElementById("profile" + 2).addEventListener('click', (e)=> {this.view.changeImage(1);});
        document.getElementById("profile" + 3).addEventListener('click', (e)=> {this.view.changeImage(2);});
        document.getElementById("profile" + 4).addEventListener('click', (e)=> {this.view.changeImage(3);});
        document.getElementById("profile" + 5).addEventListener('click', (e)=> {this.view.changeImage(4);});
        document.getElementById("profile" + 6).addEventListener('click', (e)=> {this.view.changeImage(5);});
        document.getElementById("profile" + 7).addEventListener('click', (e)=> {this.view.changeImage(6);});
        document.getElementById("profile" + 8).addEventListener('click', (e)=> {this.view.changeImage(7);});
        document.getElementById("profile" + 9).addEventListener('click', (e)=> {this.view.changeImage(8);});
        document.getElementById("profile" + 10).addEventListener('click', (e)=> {this.view.changeImage(9);});
        document.getElementById("profile" + 11).addEventListener('click', (e)=> {this.view.changeImage(10);});
        document.getElementById("profile" + 12).addEventListener('click', (e)=> {this.view.changeImage(11);});

        // for (var j = 0; j < 12; j++) {
        //   debugger;
        //   document.getElementById("profile" + (j+1)).addEventListener('click', (e)=> {this.view.changeImage(j);});
        //   console.log(j);
        // }

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

      // Door deze code komt er een geluidje als iemand op groep 4 of groep 8 klikt

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

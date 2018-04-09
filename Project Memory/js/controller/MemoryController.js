class MemoryController {
    constructor() {
        this.model = new MemoryModel();
        this.view = new MemoryView(this.model);
        document.getElementById('spelStart').addEventListener("click", (e) => {this.reageerOpStartSpel();});
        document.getElementById("backToStart").addEventListener("click", (e)=> {this.view.showStart();});
        document.getElementById("backToStart2").addEventListener("click", (e)=> {this.view.showStart();});
        document.getElementById("backToStart").addEventListener("click", (e)=> {this.reageerOpBack();});
        document.getElementById("multiplayer").addEventListener("click", (e)=> {this.view.showName();});
        document.getElementById("timed").addEventListener("click", (e)=> {this.view.hideName();});
        document.getElementById("speler1").addEventListener("click", (e)=> {this.view.showModal1();});
        document.getElementById("speler2").addEventListener("click", (e)=> {this.view.showModal2();});
        document.getElementById('profile1').addEventListener('click', (e)=> {this.view.changeImage(0);});
        document.getElementById('profile2').addEventListener('click', (e)=> {this.view.changeImage(1);});
        document.getElementById('profile3').addEventListener('click', (e)=> {this.view.changeImage(2);});
        document.getElementById('profile4').addEventListener('click', (e)=> {this.view.changeImage(3);});
        document.getElementById('profile5').addEventListener('click', (e)=> {this.view.changeImage2(0);});
        document.getElementById('profile6').addEventListener('click', (e)=> {this.view.changeImage2(1);});
        document.getElementById('profile7').addEventListener('click', (e)=> {this.view.changeImage2(2);});
        document.getElementById('profile8').addEventListener('click', (e)=> {this.view.changeImage2(3);});

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

      if (document.getElementById('groep8').checked) {
        this.view.showDivGroep8();
      }
      else {
        this.view.showDivGroep4();
      }

      if (document.getElementById('option2').checked) {
        this.view.showTimed();
        this.model.callStopwatch();
        this.view.addObserver(this.model.Stopwatch);
      }
      else {
        this.view.showMulti();
      }

      this.model.maakSpeelveld();
      this.view.showMessage(this.model.player1Naam + " is aan de beurt.");
      console.log(e.srcElement.id);
      var audio = new Audio('start.mp3');
      audio.play();
      }

    reageerOpKlikKaart(e){
      e = window.event;
      this.model.flipKaart(Number(e.path[0].id.match(/\d/g).join("")) - 1);

    }

    reageerOpBack(){
      this.view.showStart();
      this.model.beeindigSpel();
    }


}

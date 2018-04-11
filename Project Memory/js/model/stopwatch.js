class Stopwatch extends Observable{

  constructor(){
    super();
    this.seconds = -1;
    this.minutes = 0;
    this.hours = 0;
    this.h2 = document.getElementsByTagName('h2')[0];
    this.add();
    this.object;
    }

    add() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
      }
          this.timer();
          this.notify();
    }

     timer() {
        this.time = setTimeout(this.add.bind(this), 1000);
      }

      clear(){
        clearTimeout(this.time);
      }

      sendToStorage(naam){
        if (document.getElementById("groep4").checked) {
          var groep = "-Groep4"
        }
        else {
          var groep = "-Groep8"
        }
        for (var i = 0; localStorage.getItem("Memory-TimedSpeler"+groep+i)!==null; i++) {
      }
      var total = (this.hours*3600)+(this.minutes*60)+(this.seconds);
      this.object = JSON.stringify({
        naam : naam,
        seconds : this.seconds,
        minutes : this.minutes,
        hours : this.hours,
        total : total
      });
      localStorage.setItem("Memory-TimedSpeler"+groep+i, this.object);
      console.log(localStorage.getItem("Memory-TimedSpeler"+groep+i));
      }

  }

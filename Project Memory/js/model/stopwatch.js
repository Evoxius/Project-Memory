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
      if (this.seconds < 10) {
        var seconds = "0" + this.seconds;
      }
      else {
        var seconds = this.seconds
      }
      if (this.minutes < 10) {
        var minutes = "0" + this.minutes;
      }
      else {
        var minutes = this.minutes;
      }
      if (this.hours < 10) {
        var hours = "0" + this.hours;
      }
      else {
        var hours = this.hours;
      }
      this.object = JSON.stringify({
        naam : naam,
        seconds : seconds,
        minutes : minutes,
        hours : hours,
        total : total
      });
      localStorage.setItem("Memory-TimedSpeler"+groep+i, this.object);
      }

  }

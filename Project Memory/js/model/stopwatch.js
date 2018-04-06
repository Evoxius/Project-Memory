class Stopwatch extends Observable{

  constructor(){
    super();
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.h2 = document.getElementsByTagName('h2')[0];
    this.add();
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
        setTimeout(this.add.bind(this), 1000);
      }

  }

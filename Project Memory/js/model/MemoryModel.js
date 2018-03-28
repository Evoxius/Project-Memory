class MemoryModel extends Observable {
    constructor(){
      super();
      this.player1Naam;
      this.player2Naam;
      this.player1 = new Player(document.getElementById("usr1").value, "b", "c");
      this.player2 = new Player(document.getElementById("usr2").value, "b", "c");
      this.aantalAfbeeldingen = 0;
    }

    setNames(){
      this.player1Naam = document.getElementById("usr1").value;
      this.player2Naam = document.getElementById("usr2").value;
      this.notify();
    }
}

class MemoryView  extends Observer{

  constructor(model){
    super(model);
    this.model = model;
    this.model.addObserver(this);
  }

  update(){
    super.update();
    document.getElementById('chat1').innerHTML = this.model.player1Naam;
    document.getElementById('chat2').innerHTML = this.model.player2Naam;
    if(document.getElementById('groep8').checked){
      for (var i = 0; i < this.model.cardArray.length; i++) {
        document.getElementById('cards'+(i+1)).style.backgroundImage = this.model.cardArray[i].getSrc()
      }
    }
    else{
      for (var i = 0; i < this.model.cardArray.length; i++) {
        document.getElementById('card'+(i+1)).style.backgroundImage = this.model.cardArray[i].getSrc()
      }
    }
  }

  // Door deze code kan de speler groep 4 kiezen en met 14 kaarten spelen.

  showDivGroep4(){
    document.getElementById('container').style.display = "block";
    document.getElementById('container2').style.display = "none";
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
     document.getElementById('container').style.display = "block";
     document.getElementById('container2').style.display = "none";
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

  showModal1(){
          // Get the modal
      let modal = document.getElementById('myModal');

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('speler1');
      let modalImg = document.getElementById("speler1");
      let captionText = document.getElementById("caption");
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

  showModal2(){
          // Get the modal
      let modal = document.getElementById('myModal');

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('speler2');
      let modalImg = document.getElementById("speler2");
      let captionText = document.getElementById("caption");
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

  changeImage(change){
        let pic = document.getElementById('speler1');
        let modal = document.getElementById('myModal');

        switch (change){
        case 0: pic.src = "img/profiel1.jpg"; break;
        case 1: pic.src = "img/profiel2.jpg"; break;
        case 2: pic.src = "img/profiel3.png"; break;
        case 3: pic.src = "img/profiel4.jpg"; break;
      }
        modal.style.display = "none";

  }

  changeImage2(change){
        let pic = document.getElementById('speler2');
        let modal = document.getElementById('myModal');

        switch (change){
        case 0: pic.src = "img/profiel1.jpg"; break;
        case 1: pic.src = "img/profiel2.jpg"; break;
        case 2: pic.src = "img/profiel3.png"; break;
        case 3: pic.src = "img/profiel4.jpg"; break;
      }

        modal.style.display = "none";
  }


  setTransparent(){
    document.getElementById('').style.opacity = "0.0";
  }

  showMessage(message) {
    document.querySelector('div>p').innerHTML = message;
  }

}

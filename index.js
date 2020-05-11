/*
 * Add your JavaScript to this file to complete the assignment.
 */


function createTwit(tweet, name){
  /*
  <article class="twit">
    <div class="twit-icon">
      <i class="fa fa-bullhorn"></i>
    </div>
    <div class="twit-content">
      <p class="twit-text">
        <--! Put the twit text entered by the user here. -->
      </p>
      <p class="twit-author">
        <a href="#"><--! Put the twit author entered by the user here. --></a>
      </p>
    </div>
  </article>
  */
  var tw = document.createElement('article');
  tw.classList.add("twit");

  var icon = document.createElement('div');
  icon.classList.add("twit-icon");
  tw.appendChild(icon);

  var bull = document.createElement('i');
  bull.classList.add("fa");
  bull.classList.add("fa-bullhorn");
  icon.appendChild(bull);

  var cont = document.createElement('div');
  cont.classList.add("twit-content")
  tw.appendChild(cont);

  var text = document.createElement('p');
  text.classList.add("twit-text");
    text.textContent = tweet;
  cont.appendChild(text);

  var author = document.createElement('p');
  author.classList.add("twit-author");
  cont.appendChild(author);

  var n = document.createElement('a');
  n.textContent = name;
  author.appendChild(n);

  var container = document.getElementsByClassName("twit-container")[0];
  container.appendChild(tw);
}

var conte;
var nam;

var horn = document.getElementById("create-twit-button");
horn.addEventListener('click', function(){
  var hid = document.getElementsByClassName("hidden");
  for(var i=0; i<hid.length; i++){
    hid[i].style.display = "block";
  }
});

function close(){
  document.getElementById("twit-text-input").value = "";
  document.getElementById("twit-attribution-input").value = "";
  var hid = document.getElementsByClassName("hidden");
  for(var i=0; i<hid.length; i++){
    hid[i].style.display = "none";
  }
}

var end = document.getElementsByClassName("modal-cancel-button")[0];
end.addEventListener("click", close);

var end1 = document.getElementsByClassName("modal-close-button")[0];
end1.addEventListener("click", close);


var create = document.getElementsByClassName("modal-accept-button")[0];
create.addEventListener("click", function(){
    conte=document.getElementById("twit-text-input").value;
    nam=document.getElementById("twit-attribution-input").value;
    if(conte==""){
      window.alert("Your message is blank! Redo it.");
    }
    if(nam==""){
      window.alert("Enter your name!");
    }
    else if(nam!==""&&conte!==""){
      createTwit(conte,nam);
      document.getElementById("twit-text-input").value = "";
      document.getElementById("twit-attribution-input").value = "";
      var hid = document.getElementsByClassName("hidden");
      for(var i=0; i<hid.length; i++){
        hid[i].style.display = "none";
      }
    }
});

function search(event){
    var txt=document.getElementById("navbar-search-input").value;
    txt.toLowerCase();
    var twit=document.getElementsByClassName("twit-text");
    var auth=document.getElementsByClassName("twit-author");
    var tweet=document.getElementsByClassName("twit");
    var cont= document.getElementsByClassName("twit-container")[0];

    for(var i=twit.length-1;i>-1;i--){
      if(twit[i].textContent.toLowerCase().indexOf(txt)==-1&&auth[i].textContent.toLowerCase().indexOf(txt)==-1){
        tweet[i].remove();
      }
    }
}

 var searchBar=document.getElementById("navbar-search-button");
 searchBar.addEventListener('click', search);

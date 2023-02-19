
var firebaseConfig = {
      apiKey: "AIzaSyDymxCGg29s5SBKTT9Ly7QLP3K-mtSjF8s",
      authDomain: "kwitter-c1d2b.firebaseapp.com",
      databaseURL: "https://kwitter-c1d2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1d2b",
      storageBucket: "kwitter-c1d2b.appspot.com",
      messagingSenderId: "897849079615",
      appId: "1:897849079615:web:f3028591847f9da5a7c58a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").tnnerHTML = "Welcome  " + user_name +"!" ;

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding user name"
      });
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names)
      row = "<div class = 'room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}
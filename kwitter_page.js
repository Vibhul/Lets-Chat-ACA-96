var firebaseConfig = {
      apiKey: "AIzaSyDymxCGg29s5SBKTT9Ly7QLP3K-mtSjF8s",
      authDomain: "kwitter-c1d2b.firebaseapp.com",
      databaseURL: "https://kwitter-c1d2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1d2b",
      storageBucket: "kwitter-c1d2b.appspot.com",
      messagingSenderId: "897849079615",
      appId: "1:897849079615:web:f3028591847f9da5a7c58a"
    };
    
 
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
 }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

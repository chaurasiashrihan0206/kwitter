
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAR32mG-d-FvWSQJ4kmJmux-ftPisJ5i1w",
      authDomain: "kwitter-cce34.firebaseapp.com",
      databaseURL: "https://kwitter-cce34-default-rtdb.firebaseio.com",
      projectId: "kwitter-cce34",
      storageBucket: "kwitter-cce34.appspot.com",
      messagingSenderId: "126872329596",
      appId: "1:126872329596:web:be70672059fd0d134c58f9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingRoomname"
          });
          localStorage.setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
      getData();

      function redirectToRoomName(name){
            localStorage.setItem("room_name" , name);
            window.location="kwitter_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }
//YOUR FIREBASE LINKS

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

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    
    function send(){
          msg=document.getElementById("msg").value;
          
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
var1= "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
var2= "<h4 class= 'message_h4'>"+ message+"</h4>";
var3= "<button class= 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var4= "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row= var1 + var2 + var3 + var4;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
      
function updateLike(message_id){
      button_id= message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}



      function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
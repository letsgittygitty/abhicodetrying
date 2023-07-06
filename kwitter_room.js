//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
   
  apiKey: "AIzaSyBRCj_F_NChaR6mXLLm9f7W8nglE8_yE3U",
  authDomain: "kwittertry-c7145.firebaseapp.com",
  databaseURL: "https://kwittertry-c7145-default-rtdb.firebaseio.com",
  projectId: "kwittertry-c7145",
  storageBucket: "kwittertry-c7145.appspot.com",
  messagingSenderId: "263918712928",
  appId: "1:263918712928:web:4fa417007c400f4fc12b05"
};


  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    pupose:"adding room name"
});

localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}






function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot)
 { childKey = childSnapshot.key; 
   
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
 });
});
}
getData();

function logout() {    
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}



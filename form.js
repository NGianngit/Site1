
    "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {getDatabase, ref, child, get, set, onValue, orderByChild} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


 var firebaseConfig = {
  apiKey: "AIzaSyB4wtT_QMSbR2ld8GZ1vUDZuuhfHjyrmjY",
  authDomain: "dda-itd-asg2-7af51.firebaseapp.com",
  databaseURL: "https://dda-itd-asg2-7af51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dda-itd-asg2-7af51",
  storageBucket: "dda-itd-asg2-7af51.appspot.com",
  messagingSenderId: "684813493760",
  appId: "1:684813493760:web:4f4e3e0eeb9d7147aedae5"
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const database = getDatabase();

 //auth user
  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;


   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
/////////////////////////////////////////////////////////////////////////////////
//database
let player ={
  "userName" : userName,
  "recentTimeTaken" : recentTimeTaken,
  "xp": xp, 
  "shortestTimeTaken" :shortestTimeTaken,
  "lvl" : lvl,
  "numberOfTries" : numberOfTries,
  "numberOfThingsShot" : numberOfThingsShot,
  "totalTimeSpent" : totalTimeSpent,
  "updatedOn" : updatedOn,
  "createdOn" : createdOn
}


var dbPlayer  = firebase.datebase().ref().child("playerStats");

dbPlayer.on("value",function(player){
  if(player.exists()){
     var playerHTML = "";
     player.forEach(function(singlePlayer){

     })
  }
})


/////////////////////////////////////////////////////////////////////////////////



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth,setPersistence,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyB4wtT_QMSbR2ld8GZ1vUDZuuhfHjyrmjY",
  authDomain: "dda-itd-asg2-7af51.firebaseapp.com",
  databaseURL: "https://dda-itd-asg2-7af51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dda-itd-asg2-7af51",
  storageBucket: "dda-itd-asg2-7af51.appspot.com",
  messagingSenderId: "684813493760",
  appId: "1:684813493760:web:4f4e3e0eeb9d7147aedae5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//[STEP 1] Get our database reference


/////////////////////////////////////////////////////////////////////////////////

 //auth user
 const auth = getAuth(app);
 //firebase.auth.Auth.Persistence.SESSION;

 
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


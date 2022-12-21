import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase, ref, child, get, set, onValue, orderByChild} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyB4wtT_QMSbR2ld8GZ1vUDZuuhfHjyrmjY",
  authDomain: "dda-itd-asg2-7af51.firebaseapp.com",
  databaseURL: "https://dda-itd-asg2-7af51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dda-itd-asg2-7af51",
  storageBucket: "dda-itd-asg2-7af51.appspot.com",
  messagingSenderId: "684813493760",
  appId: "1:684813493760:web:4f4e3e0eeb9d7147aedae5"
};

//database

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//[STEP 1] Get our database reference
const db = getDatabase();
//[STEP 2] Setup our node/path reference
const playerRef = ref(db, "playerStats");
//[STEP 3] Setup our event listener
window.onload(getPlayerData());

//[STEP 4] Setup our player function to display info
function getPlayerData() { 
    console.log("enter")
    //playerRef is declared at the top using a constant
    //const playerRef = ref(db, "players");
    //get(child(db,`players/`))
    get(playerRef).then((snapshot) => { //retrieve a snapshot of the data using a callback
       
        if (snapshot.exists() ) {
            //if the data exist
            try {
                //let's do something about it
                var playerName = document.getElementById("player-Name");
                var playerShortest = document.getElementById("player-Short");
                var playerRecent = document.getElementById("player-Recent");
                var playerShots = document.getElementById("player-Shots");
                var playerTries = document.getElementById("player-Tries");
                var playerPlayed= document.getElementById("player-Played");
                var playerUpdate = document.getElementById("player-Update");
                var playerLevel = document.getElementById("player-Level");
            
                var UserName = "";
                var Shortest = "";
                var Recent = "";
                var Shots = "";
                var Tries = "";
                var Played = "";
                var Updated = "";
                var Level = "";
               
                const userkey = localStorage.getItem("key");
                // var dbCurrentPlayer = firebase.database().ref().child("players").orderByChild("uid").equalTo(user);
                snapshot.forEach((childSnapshot) => {
                    //looping through each snapshot
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
                    console.log("User key: " + childSnapshot.key);
                    if (childSnapshot.key == userkey){
                        UserName += `<tr>
                        <td>UserName: ${childSnapshot.child("userName").val()}</td>
                        </tr>`;
                        Shortest += `<tr>
                        <td>Shortest Time Taken: ${childSnapshot.child("shortestTimeTaken").val()}</td>
                        </tr>`;
                        Recent += `<tr>
                        <td>Recent Time Taken: ${childSnapshot.child("recentTimeTaken").val()}</td>
                        </tr>`;
                        Shots += `<tr>
                        <td>Number of Things destroyed: ${childSnapshot.child("numberOfThingsShot").val()}</td>
                        </tr>`;
                        Tries += `<tr>
                        <td>Number of tries: ${childSnapshot.child("numberOfTries").val()}</td>
                        </tr>`;
                        Played += `<tr>
                        <td>Total Time Played: ${childSnapshot.child("totalTimeSpent").val()} secs</td>
                        </tr>`;
                        Updated += `<tr>
                        <td>Last played On: ${ new Date(childSnapshot.child("updatedOn").val() * 1000)}</td>
                        </tr>`;
                        Level += `<tr>
                        <td>level: ${childSnapshot.child("lvl").val()}</td>
                        </tr>`;
                    }
                });
                //update our table content
                playerName.innerHTML = UserName;
                playerShortest.innerHTML = Shortest;
                playerRecent.innerHTML = Recent;
                playerShots.innerHTML = Shots;
                playerTries.innerHTML = Tries;
                playerPlayed.innerHTML = Played;
                playerUpdate.innerHTML = Updated;
                playerLevel.innerHTML = Level;

            } catch (error) {
                console.log("Error getPlayerData" + error);
            }
        } else {
            console.log("No data" + error);
        }
    });
} //end getPlayerData



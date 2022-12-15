import { getDatabase, ref, child, get, set, onValue, orderByChild } from
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//[STEP 1] Get our database reference
const db = getDatabase();
//[STEP 2] Setup our node/path reference
const playerRef = ref(db, "players");
//[STEP 3] Setup our event listener
var readBtn = document
    .getElementById("btn-read")
    .addEventListener("click", getPlayerData);
//[STEP 4] Setup our player function to display info
function getPlayerData(e) {
    e.preventDefault();
    console.log("enter")
    //playerRef is declared at the top using a constant
    //const playerRef = ref(db, "players");
    //get(child(db,`players/`))
    get(playerRef).then((snapshot) => { //retrieve a snapshot of the data using a callback
        if (snapshot.exists()) {
            //if the data exist
            try {
                //let's do something about it
                var playerContent = document.getElementById("player-content");
                var content = "";
                snapshot.forEach((childSnapshot) => {
                    //looping through each snapshot
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
                    console.log("User key: " + childSnapshot.key);
                    console.log("Username: " + childSnapshot.child("userName").val());
                    console.log("Email: " + childSnapshot.child("email").val());
                    content += `<tr>
<td>${childSnapshot.child("userName").val()}</td>
<td>${childSnapshot.child("email").val()}</td>
</tr>`;
                });
                //update our table content
                playerContent.innerHTML = content;
            } catch (error) {
                console.log("Error getPlayerData" + error);
            }
        } else {
            //@TODO what if no data ?
        }
    });
} //end getPlayerData
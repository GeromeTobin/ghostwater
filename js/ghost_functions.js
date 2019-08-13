function doAction() {
 	  var answerTxt = document.getElementById("response").value.toLowerCase();

    var verbNoun = answerTxt.split(" ")
    // ["pickup", "wolfpelt"]
    // verb = verbNoun[0]
      var verb = verbNoun[0]
      var noun = verbNoun[1]

      switch(verb){
        case "pickup":
          pickUp(noun);
          break;

        case "drop":
          drop(noun);
          break;
              
        case "stats":
          stats();
          break;

        case "attack":
          attack(noun);
          break;

        case "inventory":
          showInventory();
          break;

        case "where":
          where();
          break;

        case "go":
          go(noun);
          break;
              
        case "equipt":
          equipt(noun);
          break;
      }
} //doAction

function drop(noun) {

            //loop through all obects in room
            response_label.innerHTML = " "
if (noun = all) {
            if (inventory.length >0) { 
                     for (var i = inventory.length-1; i>= 0; i--) {                 
                        console.log(     objects[inventory[i]].name    )                     
                        response_label.innerHTML += "You dropped "+objects[inventory[i]].name + "<br>"                       
                        //add the obect to room
                        rooms[currentRoom].roomObjects.push(inventory[i])
                        //remove that obect from inventory
                        inventory.splice(i, 1)
                      }
            } else {

                      response_label.innerHTML = " You dont have anything! <br>"

            }}
            else {
              if (inventory.length >0) {}
                else {
                  response.innerHTML = " You don't have anything! <br>"

                }

            }
} //drop
             

    
function pickUp(noun) {

       		  //loop through all obects in room
            response_label.innerHTML = " "
       		  for (var i = rooms[currentRoom].roomObjects.length-1; i>= 0; i--) {

                 			console.log(     objects[rooms[currentRoom].roomObjects[i]].name    )                     
                 			response_label.innerHTML += "You picked up a "+objects[rooms[currentRoom].roomObjects[i]].name + "<br>"
                      
                      //add the obect to inventory
                 			inventory.push(rooms[currentRoom].roomObjects[i])
                      //remove that obect from the room's obect array	
                 			rooms[currentRoom].roomObjects.splice(i, 1)
       		 }  

} //pickup


function attack(noun) {

            //loop through all obects in room
            response_label.innerHTML = " "
            
   if (rooms[currentRoom].roomCreatures.length > 0) {
            for (var i = rooms[currentRoom].roomCreatures.length-1; i>= 0; i--) {

                      var currentDmg = Math.floor((Math.random() * player.attackMax) + player.attackMin)
                      var thisCreatureNum = rooms[currentRoom].roomCreatures[i]
                      var thisCreature = creatures[thisCreatureNum]

                      thisCreature.health = thisCreature.health - currentDmg  

                      response_label.innerHTML += "You hit the <font color='red'>" + thisCreature.name + "</font>" + " for " + currentDmg + " damage, they have " + thisCreature.health + " health left <br>"
                     
                    
                      if (thisCreature.health > 1) {
                           var creatureDmg = Math.floor((Math.random() * thisCreature.attackMax) + thisCreature.attackMin)
                           
                      player.health = player.health - creatureDmg
                           
                        response_label.innerHTML += "you were hit by the <font color='red'>" + thisCreature.name + "</font> for " + creatureDmg + " damage <br>"
                         
                      }
                      
                
                        //creature dies
                      if (thisCreature.health < 1) {

                          rooms[currentRoom].roomObjects.push(thisCreature.loot)

                          response_label.innerHTML += "<br>You have defeated the " + thisCreature.name +"!<br>"

                          rooms[currentRoom].roomCreatures.splice(i, 1)
                      }
                                            
           } 
    } else {
       response_label.innerHTML += "There is no one here to attack<br>"

    } 

} //attack

 		



function showInventory() {

            response_label.innerHTML = " "
       		  if (inventory.length >0) { 

                 		  for (var i = inventory.length-1; i>= 0; i--) {       		  				
                 		  				var objectID = inventory[i]     			                  
                              response_label.innerHTML += "You have a "+ objects[objectID].name + "<br>"                   
                      }  

            } else {

                 	 response_label.innerHTML = " You dont have anything! <br>"
            }
              
} //inventory



function where() {
 			showRoom()
		
		}
		

function go(direction){
		if (direction === "west"||direction === "east"|| direction === "north"||direction === "south"){

 						if (rooms[currentRoom][direction] != null){
 						         currentRoom = rooms[currentRoom][direction];
 						         showRoom()

 						} else {

 						         response_label.innerHTML =  "You can't go " + direction;
 			      }
    }
} //movement

function equipt(item){
        player.attackMax = 8;
        player.attackMin = 2;  
    //loop through all obects in inventory
            response_label.innerHTML = " "
            if (inventory.length >0) {
                
       		 for (var i = inventory.length-1; i>= 0; i--) {   
                
                    if (item === objects[inventory[i]].name){
                      var activeItem = objects[inventory[i]].name;
                      player.attackMax = player.attackMax + objects[inventory[i]].attack;
                      player.attackMin = player.attackMin + objects[inventory[i]].attack;  
                        response_label.innerHTML = "you have selected the " + activeItem + " as your active item";
                            console.log( player.attackMax );
                                                            }       
                                                            }
                                        } else {
                  response.innerHTML = " You don't have anything! <br>";

                                                }
                        }

    



function showRoom() {

          var roomObjectNum
          response_label.innerHTML = " "

          //check the objects array in the room
          //if the objects array has length  meaning there ARE ONJECTS
           response_label.innerHTML = currentRoom + ". <b>" + rooms[currentRoom].name + "</b>  <br>" + rooms[currentRoom].description;

          if (rooms[currentRoom].roomObjects.length > 0) {
                
         		 for (var i = rooms[currentRoom].roomObjects.length-1; i>= 0; i--) {
          	       	 		var objectNum = rooms[currentRoom].roomObjects[i]                 
              					response_label.innerHTML += "<br> You see a " + objects[objectNum].name
        	}
            }
             if (rooms[currentRoom].roomCreatures.length > 0) {
                
             for (var i = rooms[currentRoom].roomCreatures.length-1; i>= 0; i--) {
                        var creatureNum = rooms[currentRoom].roomCreatures[i]                 
                        response_label.innerHTML += "<br> There is a <font color='red'>" + creatures[creatureNum].name + "</font> nearby"
            }
            }
          	
    }//show room


function stats() {
       		  if(activeItem != 0){
response_label.innerHTML = "your active item is " + activeItem + ", which puts your maximum attack power at " + player.attackMax
              }else{ response_label.innerHTML = "you do not have any equipted item, so your maximum attack value is " + player.attackMax}

}



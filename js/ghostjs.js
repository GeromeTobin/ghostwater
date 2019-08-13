


var rooms = []
var objects = []

room1 = {
  id: 1,
  name :  "Green Meadow",
  description: "You are standing in a Green Meadow. There is a road leading north and path to the east.",
   roomObjects: [3],
   roomCreatures: [],
   east: 3,
   south: null,
   north: 2,
   west: null,
}

room2 = {
  id: 2,
  name :  "Dark Road",
  description: "You are standing on a dark road that trails off to the south... ",
   roomObjects: [1],
   roomCreatures: [3],
   east: null,
   south: 1,
   north: null,
   west: null,
}

room3 = {
  id: 3,
  name :  "Outside Red House",
  description: "You are standing near a Red House. There is a well trodden path to the west.",
   roomObjects: [4],
   roomCreatures: [],
   east: null,
   south: null,
   north: 4,
   west: 1,
}

rooms[1] = room1
rooms[2] = room2
rooms[3] = room3




object1 = {
name: "sword",
id: 1,
description: "a rusted, one handed sword",
attack: 3
}

object2 = {
name: "lantern",
id: 2,
description: "an unlit lantern, with a rusted handle"
}

object3 = {
name: "hat",
id: 3,
description: "a wizards hat, smells kinda funky"
}

object4 = {
name: "rat",
id: 4,
description: "rat!"
}

object5 = {
name: "apple",
id: 5,
description: "a red apple"
}

object6 = {
name: "pelt",
id: 6,
description: "the fur of a wolf"
}

objects[1] = object1
objects[2] = object2
objects[3] = object3
objects[4] = object4
objects[5] = object5
objects[6] = object6

var creatures = []




creature3 = {
name: "orc",
id: 3,
health: 40,
attackMax: 12,
attackMin: 5,
loot: [],
}

creatures[1] = {
  name: "wolf",
  id: 1,
  health: 10,
  attackMax: 5,
  attackMin: 1,
  loot: [6]
}

creatures[2] = {
  name: "skeleton",
  id: 2,
  health: 20,
  attackMax: 8,
  attackMin: 2,
  loot: [1]
}

creatures[3] = creature3



// SETTING UP THE GAME
var currentRoom = 1
var inventory = [2, 5]
rooms[1].roomCreatures = [1, 2]
var activeItem = 0

player = {
  name: "elysium",
  health: 80,
  attackMax: 8,
  attackMin: 2,
}


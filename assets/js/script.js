// Direction Buttons
let narrator = document.getElementById('narrator');
let north = document.getElementById('north');
let south = document.getElementById('south');
let west = document.getElementById('west');
let east = document.getElementById('east');


// Direction questions (these are new)
let northQuestion = document.getElementById('north-question');
let southQuestion = document.getElementById('south-question');
let eastQuestion = document.getElementById('east-question');
let westQuestion = document.getElementById('west-question');


// what we need is a array of areas/room
// each room has a id, a name, a description, exits,
const rooms = [
    {
        id: 0,
        name: "cell",
        description: "You wake up in a dim prison cell. There's a small cot and a bucket in the corner. Exits are visible to the east, north and west.",
        west: 2,
        east: 1,
        north: 6,
        south: 0,
        
    },
    {
        id: 1,
        name: "kitchen",
        description: "The prison kitchen is filled with the smell of stale bread. A large pot sits over a cold hearth. The only exit is back west.",
        west: 0,
        east: -1,
        north: -1,
        south: -1,
       
    },
    {
        id: 2,
        name: "cell",
        description: "You're in a bathtub holding a glass of juice ....",
        west: 3,
        east: 0,
        north: 4,
        south: -1,
        
    },
    {
      id: 3,
      name: "hallway",
      description: "You're in a long hallway with torches on the walls.",
      west: -1,
      east: 2,
      north: -1,
      south: 5,
      
  },
  {
      id: 4,
      name: "guard room",
      description: "This appears to be a guard room. There's a table with some playing cards.",
      west: -1,
      east: -1,
      north: -1,
      south: 2,
     
  },
  {
      id: 5,
      name: "storage",
      description: "A small storage area with some barrels and crates.",
      west: -1,
      east: -1,
      north: 3,
      south: -1,
     
  },
  {
      id: 6,
      name: "courtyard",
      description: "You've entered a small courtyard. Fresh air at last!",
      west: -1, 
      east: -1,
      north: -1,
      south: 5,
    
  },
]
let currentRoom = 0;
/**
 * This function handles the game flow
 */
function gameMaster() {
    readDescrption(currentRoom);
    handleExits(currentRoom);
}
function readDescrption(currentRoom) {
    narrator.innerText = rooms[currentRoom].description;
}
function handleExits(currentRoom) {


    // First, remove all previous event listeners by cloning and replacing buttons
    north = replaceButton(north);
    south = replaceButton(south);
    east = replaceButton(east);
    west = replaceButton(west);


    // Set up the exits

    if (rooms[currentRoom].north != -1) {
        north.style.display = "block";
        north.innerText = "Go North";
        north.addEventListener('click', () => move(rooms[currentRoom].north));

    } else {
        north.style.display = "none";
    }
    if (rooms[currentRoom].south != -1) {
        south.style.display = "block";
        south.innerText = "Go South";
        south.addEventListener('click', () => move(rooms[currentRoom].south));

      } else {
        south.style.display = "none";
    }
    if (rooms[currentRoom].west != -1) {
        west.style.display = "block";
        west.innerText = "Go West";
        west.addEventListener('click', () => move(rooms[currentRoom].west));

    } else {
        west.style.display = "none";
    }
    if (rooms[currentRoom].east != -1) {
        east.style.display = "block";
        east.innerText = "Go East";
        east.addEventListener('click', () => move(rooms[currentRoom].east));

    } else {
        east.style.display = "none";
    }
}

// Helper function to replace a button with a clone (removes all event listeners)
function replaceButton(button) {
  const newButton = button.cloneNode(true);
  button.parentNode.replaceChild(newButton, button);
  return newButton;
}

function move(destination) {
  // Update the current room
  currentRoom = destination;
  
  // Update the UI to reflect the new room
  gameMaster();
  
  console.log("You are now in room:", destination, rooms[destination].name);
}
gameMaster();
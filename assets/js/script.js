
// Direction Buttons
let narrator = document.getElementById('narrator');
let north = document.getElementById('north');
let south = document.getElementById('south');
let west = document.getElementById('west');
let east = document.getElementById('east');


// Get the parent containers for each button
let northContainer = north.closest('.direction-container');
let southContainer = south.closest('.direction-container');
let eastContainer = east.closest('.direction-container');
let westContainer = west.closest('.direction-container');



// First we need an array of areas/room
// Each room has an id, a name, a description, exits, button text
const rooms = [
  {
    id: 0,
    name: "cell",
    description: "You wake up in a dim prison cell. There's a small cot and a bucket in the corner. Exits are visible to the east, north and west.",
    west: 2,
    east: 1,
    north: 6,
    south: 0,
    buttonText: {
      north: "Investigate the faint light up north?",
      east: "Check the door that's slightly ajar",
      west: "Peek into the adjacent cell",
      south: "Examine your own cell more carefully"
    },
    // Adding the visual for this room
    media: {
      type: "image", 
      src: "assets/images/test.jpg", 
      alt: "A dim prison cell" 
    }
},
    {
        id: 1,
        name: "kitchen",
        description: "The prison kitchen is filled with the smell of stale bread. A large pot sits over a cold hearth. The only exit is back west.",
        west: 0,
        east: -1,
        north: -1,
        south: -1,
        buttonText: {
          west: "Return to your cell"
      },
      // Adding the visual for this room
      media: {
        type: "image", // can be "image" or "video"
        src: "assets/images/test.jpg", // path to media file
        alt: "A dim prison cell" // for accessibility
      }
       
    },
    {
        id: 2,
        name: "cell",
        description: "You're in a bathtub holding a glass of juice ....",
        west: 3,
        east: 0,
        north: 4,
        south: -1,
        buttonText: {
          west: "Enter the long hallway",
          east: "Return to your original cell",
          north: "Sneak into the guard room"
      }
        
    },
    {
      id: 3,
      name: "hallway",
      description: "You're in a long hallway with torches on the walls.",
      west: -1,
      east: 2,
      north: -1,
      south: 5,
      buttonText: {
        east: "Go back to the cell area",
        south: "Check out the storage room"
    }
      
  },
  {
      id: 4,
      name: "guard room",
      description: "This appears to be a guard room. There's a table with some playing cards.",
      west: -1,
      east: -1,
      north: -1,
      south: 2,
      buttonText: {
        south: "Hurry back to the empty cell"
    }
     
  },
  {
      id: 5,
      name: "storage",
      description: "A small storage area with some barrels and crates.",
      west: -1,
      east: -1,
      north: 3,
      south: -1,
      buttonText: {
        north: "Return to the hallway"
    }
     
  },
  {
      id: 6,
      name: "courtyard",
      description: "You've entered a small courtyard. Fresh air at last!",
      west: -1, 
      east: -1,
      north: -1,
      south: 5,
      buttonText: {
        south: "Go back inside through the door"
    }
    
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

        // Get custom button text or use default
        const buttonText = rooms[currentRoom].buttonText?.north || "Go North";
        
        // Show the button and set its text
        north.style.display = "block";
        north.innerText = buttonText;
        north.addEventListener('click', () => move(rooms[currentRoom].north));

        // Show the container
        northContainer.style.display = "block";

    } else {
        // Hide both the button and its container
        north.style.display = "none";
        northContainer.style.display = "none";
    }
    if (rooms[currentRoom].south != -1) {
        // Get custom button text or use default
        const buttonText = rooms[currentRoom].buttonText?.south || "Go South";
        
        // Show the button and set its text
        south.style.display = "block";
        south.innerText = buttonText;
        south.addEventListener('click', () => move(rooms[currentRoom].south));

        // Show the container
        southContainer.style.display = "block";

      } else {
        // Hide both the button and its container
        south.style.display = "none";
        southContainer.style.display = "none";
    }
    if (rooms[currentRoom].west != -1) {
        // Get custom button text or use default
        const buttonText = rooms[currentRoom].buttonText?.west || "Go West";
        
        // Show the button and set its text
        west.style.display = "block";
        west.innerText = buttonText;
        west.addEventListener('click', () => move(rooms[currentRoom].west));

        // Show the container
        westContainer.style.display = "block";

    } else {
      // Hide both the button and its container
        west.style.display = "none";
        westContainer.style.display = "none";
    }
    if (rooms[currentRoom].east != -1) {
        // Get custom button text or use default
        const buttonText = rooms[currentRoom].buttonText?.east || "Go East";

        // Show the button and set its text
        east.style.display = "block";
        east.innerText = buttonText;
        east.addEventListener('click', () => move(rooms[currentRoom].east));

        // Show the container
        eastContainer.style.display = "block";

    } else {
        // Hide both the button and its container
        east.style.display = "none";
        eastContainer.style.display = "none";
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
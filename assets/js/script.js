// DOM element references to connect the JS to the HTML elements
const narrator = document.getElementById('narrator'); // The text description area
const north = document.getElementById('north');
const south = document.getElementById('south');
const west = document.getElementById('west');
const east = document.getElementById('east');

// We need an array of areas/rooms
// Room data - each one has an id, a name, a description, exits, media/visuals
// If an exit has -1, then that means that it's inactive
const rooms = [
    {
        id: 0, // Unique ID for this room
        name: "cell", // Name of the room
        description: "you wake in a cell there is a ....way out are east, north and west",
        north: 6,
        south: -1,
        east: 1,
        west: 2,
        
    },
    {
        id: 1, // Unique ID for this room
        name: "kitchen", // Name of the room
        description: "you wake in a kitchen there is a ....",
        north: -1,
        south: -1,
        east: -1,
        west: 0,
        
    },
    {
        id: 2, // Unique ID for this room
        name: "car", // Name of the room
        description: "you wake in a cell there is a ....",
        north: 4,
        south: -1,
        east: 0,
        west: 3,
        
    },
    {
      id: 2, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      
    },
    {
      id: 3, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      
    },
    {
      id: 4, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      
    },
    {
      id: 5, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      
    },
    {
      id: 6, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      
    },
]

// We'll start in the first room (ID 0)
let currentRoom = 0;


/**
 * This function handles the game flow
 */
function gameMaster() {
    // Display the current room description
    readDescrption(currentRoom);

    // Set up the available exits/buttons
    handleExits(currentRoom);
}

/**
 * This function updates the narrator text
 *  */ 
function readDescrption(currentRoom) {
    narrator.innerText = rooms[currentRoom].description;
}

/**
 * This function controls which direction buttons are visible
 * and attaches event listeners to them
 */
function handleExits(currentRoom) {
    // NORTH direction
    if (rooms[currentRoom].north != -1) {
        // There is an exit to the north
        north.style.display = "block"; // Make button visible
        north.innerText = "Go North"; // Set button text

        // When clicked, move to the room in that direction
        north.addEventListener('click', () => move(rooms[currentRoom].north));
    } else {
        north.style.visibility = "none";
    }

    // SOUTH direction
    if (rooms[currentRoom].south != -1) {
        // There is an exit to the south
        south.style.display = "block"; // Make button visible
        south.innerText = "Go South"; // Set button text

        // When clicked, move to the room in that direction
        south.addEventListener('click', () => move(rooms[currentRoom].south));
    } else {
        south.style.display = "none";
    }

    // EAST Direction
    if (rooms[currentRoom].east != -1) {
      // There is an exit to the east
      east.style.display = "block"; // Make button visible
      east.innerText = "Go East"; // Set button text

      // When clicked, move to the room in that direction
      east.addEventListener('click', () => move(rooms[currentRoom].east));
    } else {
        east.style.display = "none";
    }

    // WEST Direction
    if (rooms[currentRoom].west != -1) {
        // There is an exit to the west
        west.style.display = "block"; // Make button visible
        west.innerText = "Go West"; // Set button text

        // When clicked, move to the room in that direction
        west.addEventListener('click', () => move(rooms[currentRoom].west));
    } else {
        west.style.display = "none";
    }

    
}


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
    if (rooms[currentRoom].north != -1) {
        north.style.display = "block";
        north.innerText = "Go North";
        north.addEventListener('click', () => move(rooms[currentRoom].north));
    } else {
        north.style.visibility = "none";
    }
    if (rooms[currentRoom].south != -1) {
        south.style.display = "block";
        south.innerText = "Go South";
        south.addEventListener('click', () => move(rooms[currentRoom].south));
    } else {
        south.style.display = "none";
    }
    if (rooms[currentRoom].west != -1) {
        west.style.visibility = "visible";
        west.innerText = "Go West";
        west.addEventListener('click', () => move(rooms[currentRoom].west));
    } else {
        west.style.display = "none";
    }
    if (rooms[currentRoom].east != -1) {
        east.style.visibility = "visible";
        east.innerText = "Go East";
        east.addEventListener('click', () => move(rooms[currentRoom].east));
    } else {
        east.style.display = "none";
    }
}

/**
 * Move to a new room when a direction button is clicked
 */
function move(destination) {
    // Update the current room
    currentRoom = destination;

    // Update the game display for the new room
    gameMaster();

    // What room are we currently in
    console.log("You're in room: ", destination, rooms[destination].name);
}
gameMaster();
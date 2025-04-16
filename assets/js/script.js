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

// This function updates the narrator text
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
function move(destination) {
    console.log("you in room: ", destination);
}
gameMaster();
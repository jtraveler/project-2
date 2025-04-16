// getters
const narrator = document.getElementById('narrator');
const north = document.getElementById('north');
const south = document.getElementById('south');
const west = document.getElementById('west');
const east = document.getElementById('east');
// what we need is a array of areas/room
// each room has a id, a name, a description, exits,
const rooms = [
    {
        id: 0,
        name: "cell",
        description: "you wake in a cell there is a ....way out are east, north and west",
        west: 2,
        east: 1,
        north: 6,
        south: -1,
    },
    {
        id: 1,
        name: "kitchen",
        description: "you wake in a kitchen there is a ....",
        west: 0,
        east: -1,
        north: -1,
        south: -1,
    },
    {
        id: 2,
        name: "cell",
        description: "you wake in a cell there is a ....",
        west: 3,
        east: 0,
        north: 4,
        south: -1,
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
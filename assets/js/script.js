

// DOM element references to connect the JS to the HTML elements
let narrator = document.getElementById('narrator'); // The text description area
let north = document.getElementById('north');
let south = document.getElementById('south');
let west = document.getElementById('west');
let east = document.getElementById('east');
const roomMedia = document.getElementById('room-media')

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
        media: {
          type: "image", 
          src: "assets/images/test.jpg", 
          alt: "A dim prison cell" 
      }
        
    },
    {
        id: 1, // Unique ID for this room
        name: "kitchen", // Name of the room
        description: "you wake in a kitchen there is a ....",
        north: -1,
        south: -1,
        east: -1,
        west: 0,
        media: {
          type: "image",
          src: "assets/images/test.jpg",
          alt: "a dim prison cell"
        }
        
    },
    {
        id: 2, // Unique ID for this room
        name: "car", // Name of the room
        description: "you wake in a cell there is a ....",
        north: 4,
        south: -1,
        east: 0,
        west: 3,
        media: {
          type: "image",
          src: "assets/images/test.jpg",
          alt: "a dim prison cell"
        }
        
    },
    {
      id: 3, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 4, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 5, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 6, // Unique ID for this room
      name: "cell", // Name of the room
      description: "you wake in a cell there is a ....",
      north: 4,
      south: -1,
      east: 0,
      west: 3,
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
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

    // Update the media for the current room
    updateRoomMedia(currentRoom); 

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

    // Replace each button with a clone and update our reference
    north = replaceButton(north);
    south = replaceButton(south);
    east = replaceButton(east);
    west = replaceButton(west);

    // NORTH direction
    if (rooms[currentRoom].north != -1) {
        // There is an exit to the north
        north.style.display = "block"; // Make button visible
        north.innerText = "Go North"; // Set button text
        console.log("North button text:", north.textContent)

        // When clicked, move to the room in that direction
        north.addEventListener('click', () => move(rooms[currentRoom].north));
    } else {
        north.style.display = "none";
    }

    // SOUTH direction
    if (rooms[currentRoom].south != -1) {
        // There is an exit to the south
        south.style.display = "block"; // Make button visible
        south.innerText = "Go South"; // Set button text
        console.log("South button text:", south.textContent)

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
      console.log("East button text:", east.textContent)

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
        console.log("West button text:", north.textContent)

        // When clicked, move to the room in that direction
        west.addEventListener('click', () => move(rooms[currentRoom].west));
    } else {
        west.style.display = "none";
    }

    
}

/**
 * Update the visual media for the current room
 */
function updateRoomMedia(roomId) {

  // Get the current room
  const room = rooms[roomId];
  
  // Get the current image if there is one
  const currentImage = roomMedia.querySelector('img');

  if (currentImage) {

    currentImage.classList.add('fade-out');

    setTimeout(() => {

      // Clear the media container
      roomMedia.innerHTML = '';
    
      if (room.media && room.media.type === "image") {
    
        // Create an image elment
        const img = document.createElement('img');
    
        // Set the attributes for the image
        img.src = room.media.src;
        img.alt = room.media.alt || 'Room image';
    
        // Add it to the container
        roomMedia.appendChild(img);
    
        console.log("Adding image to:", room.media.src)
      }
    }, 500); // .5 sec transition time
  } else {

      roomMedia.innerHTML = '';

      if (room.media && room.media.type === "image") {
    
        // Create an image elment
        const img = document.createElement('img');
    
        // Set the attributes for the image
        img.src = room.media.src;
        img.alt = room.media.alt || 'Room image';
    
        // Add it to the container
        roomMedia.appendChild(img);
    
       
      }
  }
}



/**
 * Helper function to replace a button with a clone
 * This removes all event listeners
 */
function replaceButton(button) {

  const newButton = button.cloneNode(true); // Create an exact copy of thr button
  button.parentNode.replaceChild(newButton, button); // Replace the old button with the new
  return newButton; // Return the new button to use
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
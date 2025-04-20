

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
        description: "Leo’s parents hand him a dusty book. “It belonged to your grandmother,” his mom says. It glows faintly. Leo clutches it with curiosity.",
        north: 1,
        south: 2,
        east: -1,
        west: -1,
        buttonText: {
          north: "Investigate the faint light up north?",
          south: "Check the door that's slightly ajar",
          east: "Peek into the adjacent cell",
          west: "Examine your own cell more carefully"
        },
        media: {
          type: "image", 
          src: "assets/images/story-route-0.jpg", 
          alt: "A dim prison cell" 
      }
        
    },
    {
        id: 1, // Unique ID for this room
        name: "kitchen", // Name of the room
        description: "Leo snuggles into the couch and opens the book. The pages glow. The room blurs. He now sits on the couch, but it’s in a magical forest.",
        north: 3,
        south: 4,
        east: 5,
        west: 6,
        buttonText: {
          north: "Investigate the faint light up north?",
          south: "Check the door that's slightly ajar",
          east: "Peek into the adjacent cell",
          west: "Examine your own cell more carefully"
        },
        media: {
          type: "image",
          src: "assets/images/story-route-1.jpg",
          alt: "a dim prison cell"
        }
        
    },
    {
        id: 2, // Unique ID for this room
        name: "car", // Name of the room
        description: "Leo starts a video game but keeps eyeing the book. He finally powers down and picks it up, opening to the first page.",
        north: 1,
        south: 6,
        east: -1,
        west: -1,
        buttonText: {
          north: "Investigate the faint light up north?",
          south: "Check the door that's slightly ajar",
          east: "Peek into the adjacent cell",
          west: "Examine your own cell more carefully"
        },
        media: {
          type: "image",
          src: "assets/images/story-route-2.jpg",
          alt: "a dim prison cell"
        }
        
    },
    {
      id: 3, // Unique ID for this room
      name: "cell", // Name of the room
      description: "Leo steps off the couch with the book in his left hand. Two paths lie ahead—one leads to a glowing tree, the other to musical chimes.",
      north: 7,
      south: 8,
      east: 6,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 4, // Unique ID for this room
      name: "cell", // Name of the room
      description: "A blue-and-gold bird chirps Leo’s name. A glowing silver feather floats down. Leo clutches the book tighter and watches the bird land by a tree.",
      north: 8,
      south: 5,
      east: 6,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 5, // Unique ID for this room
      name: "cell", // Name of the room
      description: `“Leo…” a voice floats in the wind. A glowing silhouette appears — a gentle older woman with curly hair and a cloak, standing beside a small owl shape.`,
      north: 7,
      south: 9,
      east: 6,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "a dim prison cell"
      }
      
    },
    {
      id: 6, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `Leo opens the book. Golden letters appear:
      “The Queen of Light waits beneath the oldest tree.”
      A soft owl hoot echoes above.`,
      north: 7,
      south: 8,
      east: 6,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 7, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `Leo reaches a glowing tree. His grandmother stands beside it with Oona, a silver owl with amber eyes.“You’ve made it,” she smiles.`,
      north: 9,
      south: 10,
      east: 11,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 8, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `The bird leads Leo to a glowing hollow tree. Music hums inside. The book glows in sync. Oona watches silently from a branch above.`,
      north: 12,
      south: 13,
      east: 6,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 9, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `“This book listens,” Oona says. “It shows what you’re ready to see.” The forest hums around them. Leo nods slowly.`,
      north: 14,
      south: 11,
      east: 13,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 10, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `Leo opens the book. Golden letters appear:
      “The Queen of Light waits beneath the oldest tree.”
      A soft owl hoot echoes above.`,
      north: 14,
      south: 11,
      east: 13,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 11, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `“Yes,” Grandma says softly. “I was the Queen of this land. The book is your bridge to everything I once protected.”`,
      north: 14,
      south: 12,
      east: 13,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 12, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `“You must choose,” says Oona. “Adventure, Wisdom… or Home.” Leo looks at the book. It pulses with golden light.`,
      north: 13,
      south: 14,
      east: 15,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 13, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `A jester appears. “Trade the book for a wish!” Leo frowns. “No thanks.” He clutches the book tighter.`,
      north: 14,
      south: 12,
      east: 7,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 14, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `Leo walks into a quiet, cool forest. The silence is comforting. He feels at peace, though the path ahead is uncertain.`,
      north: 6,
      south: 9,
      east: 12,
      west: 15,
      buttonText: {
        north: "Investigate the faint light up north?",
        south: "Check the door that's slightly ajar",
        east: "Peek into the adjacent cell",
        west: "Examine your own cell more carefully"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
      }
      
    },
    {
      id: 15, // Unique ID for this room
      name: "Name of this snippt is...", // Name of the room
      description: `Leo finds himself back on the couch. The book rests in his lap. He’s home. But the glow hasn’t gone. His eyes sparkle...the story continues.`,
      north: 0,
      south: -1,
      east: -1,
      west: -1,
      buttonText: {
        north: "The End. Would you like to start over?"
      },
      media: {
        type: "image",
        src: "assets/images/test.jpg",
        alt: "An image of Leo on his adventure"
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
        north_shell.style.display = "block"; // Make button visible
        north.innerText = "Go North"; // Set button text
        console.log("North button text:", north.textContent)

        // Update the north button with the custom text
        north.innerText = rooms[currentRoom].buttonText.north;

        // When clicked, move to the room in that direction
        north.addEventListener('click', () => move(rooms[currentRoom].north));
    } else {
        north_shell.style.display = "none";
    }

    // SOUTH direction
    if (rooms[currentRoom].south != -1) {
        // There is an exit to the south
        south_shell.style.display = "block"; // Make button visible
        south.innerText = "Go South"; // Set button text
        console.log("South button text:", south.textContent)

        // Update the south button with the custom text
        south.innerText = rooms[currentRoom].buttonText.south;

        // When clicked, move to the room in that direction
        south.addEventListener('click', () => move(rooms[currentRoom].south));
    } else {
        south_shell.style.display = "none";
    }

    // EAST Direction
    if (rooms[currentRoom].east != -1) {
      // There is an exit to the east
      east_shell.style.display = "block"; // Make button visible
      east.innerText = "Go East"; // Set button text
      console.log("East button text:", east.textContent)

      // Update the east button with the custom text
      east.innerText = rooms[currentRoom].buttonText.east;

      // When clicked, move to the room in that direction
      east.addEventListener('click', () => move(rooms[currentRoom].east));
    } else {
        east_shell.style.display = "none";
    }

    // WEST Direction
    if (rooms[currentRoom].west != -1) {
        // There is an exit to the west
        west_shell.style.display = "block"; // Make button visible
        west.innerText = "Go West"; // Set button text
        console.log("West button text:", north.textContent)

        // Update the east button with the custom text
        east.innerText = rooms[currentRoom].buttonText.east;

        // When clicked, move to the room in that direction
        west.addEventListener('click', () => move(rooms[currentRoom].west));
    } else {
        west_shell.style.display = "none";
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

        img.classList.add('fade-out');
    
        // Add it to the container
        roomMedia.appendChild(img);

        // Force browser to recognize the initial state
        void img.offsetWidth;
        
        // Remove fade-out to trigger transition to visible
        img.classList.remove('fade-out');
    
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

        // Start with fade-out applied (invisible)
        img.classList.add('fade-out');
    
        // Add it to the container
        roomMedia.appendChild(img);
    
       // Force browser to recognize the initial state
        void img.offsetWidth;
        
        // Remove fade-out to trigger transition to visible
        img.classList.remove('fade-out');
      
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
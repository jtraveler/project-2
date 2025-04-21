

// DOM element references to connect the JS to the HTML elements
let narrator = document.getElementById('narrator'); // The text description area
let north = document.getElementById('north');
let south = document.getElementById('south');
let west = document.getElementById('west');
let east = document.getElementById('east');
const roomMedia = document.getElementById('room-media')
let north_shell = document.getElementById('north_shell');
let south_shell = document.getElementById('south_shell');
let east_shell = document.getElementById('east_shell');
let west_shell = document.getElementById('west_shell');

// We need an array of areas/rooms
// Room data - each one has an id, a name, a description, exits, media/visuals
// If an exit has -1, then that means that it's inactive
const rooms = [
  {
    id: 0,
    name: "The Book",
    description: `Leo's parents hand him a dusty book. "It belonged to your grandmother," his mom says. Leo clutches it with curiosity.`,
    north: 1,
    south: 3,
    east: -1,
    west: -1,
    buttonText: {
      north: "Read the book",
      south: "Go play video games"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-0.jpg",
      alt: "Leo receives his grandmother's glowing book from his parents on the living room couch"
    }
  },
  {
    id: 1,
    name: "Into the Book",
    description: `Leo snuggles against the couch and opens the book. The pages begin to glow. He reads the book for hours and hours but begins to get drowsy.`,
    north: 2,
    south: 17,
    east: -1,
    west: -1,
    buttonText: {
      north: "Lay down, take a nap \nfor a pleasant dream",
      south: "Ask mom and dad about the book"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-1.jpg",
      alt: "Leo sits on a couch in a glowing magical forest, holding the book"
    }
  },
  {
    id: 2,
    name: "The Magic Nap",
    description: "Leo gets comfortable on the couch with the book resting on his lap. As he dozes off, golden light swirls around him. When he opens his eyes, the couch is in the middle of a magical forest.",
    north: 4,
    south: 5,
    east: 16,
    west: -1,
    buttonText: {
      north: "Step off the couch and go straight",
      south: `Go to the forest and shout "Hello?"`,
      east: "Go back to sleep",
      
    },
    media: {
      type: "image",
      src: "assets/images/story-route-2-magical-nap.jpg",
      alt: "Leo asleep on the couch surrounded by magical trees and light"
    }
  },
  {
    id: 3,
    name: "The Distraction",
    description: "Leo starts a video game but keeps eyeing the book. He finally powers down and picks it up, opening to the first page.",
    north: 1,
    south: 16,
    east: -1,
    west: -1,
    buttonText: {
      north: "Open the book",
      south: "Flip through it randomly"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-2.jpg",
      alt: "Leo glancing at the glowing book while holding a video game controller"
    }
  },
  
  {
    id: 4,
    name: "First Steps",
    description: "Leo steps off the couch with the book in his left hand. Two paths lie ahead—one leads to a glowing tree, the other to musical chimes.",
    north: 8,
    south: 6,
    east: 15,
    west: -1,
    buttonText: {
      north: "Go to the glowing tree",
      south: "Follow the musical sound",
      east: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-4-two-paths.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 5,
    name: "Shouting Hello!",
    description: `Leo runs to the forest an shouts "Hello?". To his surprise, he hears a voice shouting back saying "Over here, my friend!". But at the same time Leo notices the most peculiar owl up above in the trees and the owl says "Hello, Leo!" and then music starts playing.`,
    north: 9,
    south: 11,
    east: 6,
    west: 15,
    buttonText: {
      north: "Go towards the first voice you heard",
      south: "Have a closer look at the talking owl",
      east: "See where the music is comig from",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-5-shouting-hello.jpg",
      alt: "Leo looking at a glowing bird in the forest"
    }
  },
  {
    id: 6,
    name: "The Mushroom Circle",
    description: "Leo follows the music and nearly steps on thumb-sized houses! The tiny partygoers greet Leo and ask him to help their friends down from the tree to so they can come to their party",
    north: 10,
    south: 5,
    east: 11,
    west: 16,
    buttonText: {
      north: "Answer a riddle",
      south: "Step out of the circle",
      east: `Shout "Help!"`,
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-6-tiny-village.jpg",
      alt: "Leo surrounded by glowing mushrooms"
    }
  },
  {
    id: 7,
    name: "The Tiny Village",
    description: `Leo follows the music and nearly steps on thumb-sized houses! The tiny partygoers greet Leo and ask him to help their friends down from the tree to so they can come to their party`,
    north: 10,
    south: 5,
    east: 11,
    west: 16,
    buttonText: {
      north: "Answer a riddle",
      south: "Step out of the circle",
      east: `Shout "Help!"`,
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-6-tiny-village.jpg",
      alt: "Leo surrounded by glowing mushrooms"
    }
  },
  {
    id: 8,
    name: "Queen of Light",
    description: "Leo stands before a glowing tree. His grandmother appears in a warm light, regal yet gentle. Oona the owl rests beside her.",
    north: 12,
    south: 11,
    east: 13,
    west: 16,
    buttonText: {
      north: "Hug grandma",
      south: "Ask about the tree",
      east: "Ask Oona what to do next",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-8-grandma-and-the-glowing-tree.jpg",
      alt: "A musical tree with Oona watching nearby"
    }
  },
  {
    id: 9,
    name: "The Trickster",
    description: `Leo meets a sketchy looking dude who interrupts him repeatedly, offering to trade for a better book. Though tempting, the deal seems risky. An owl swoops in and says "Don't listen to him, Leo!"`,
    north: 11,
    south: 13,
    east: -1,
    west: -1,
    buttonText: {
      north: `Say "No, I’ll keep mine"`,
      south: `Ask "What’s in yours?"`,
    },
    media: {
      type: "image",
      src: "assets/images/story-route-9-trickster.jpg",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 10,
    name: "The Forgotten Path",
    description: `Leo follows winding vines into a quiet glade. Fog swirls. Paths vanish. A wooden sign asks, “Where is your heart?” The book glows blue.`,
    north: 8,
    south: 13,
    east: 11,
    west: 16,
    buttonText: {
      north: `Say "With my family"`,
      south: "In this world",
      east: "Stay silent and wait",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-10.jpg",
      alt: "Oona speaking to Leo near glowing trees"
    }
  },
  {
    id: 11,
    name: "Oona’s Return",
    description: `Oona swoops down. "I am Oona, we've been expecting you, Leo. Hold on to the book, every page you turn writes your story,” she says. “But only your heart can choose the end.” She winks.`,
    north: 12,
    south: 15,
    east: 13,
    west: 16,
    buttonText: {
      north: "Ask what happens next",
      south: `Say "I'm not ready"`,
      east: "Ask about the book",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-11-oonas-intro.jpg",
      alt: "Leo reunited with his grandmother under the glowing tree"
    }
  },
  {
    id: 12,
    name: "Truth of the Queen",
    description: "“Yes,” Grandma says softly. “I was the Queen of this land. The book is your bridge to everything I once protected.”",
    north: 14,
    south: 13,
    east: 9,
    west: 16,
    buttonText: {
      north: "Ask how she lost the land",
      south: "Ask if he’s the next Guardian",
      east: "Ask why Oona stayed",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-11.jpg",
      alt: "Leo reunited with his grandmother under the glowing tree"
    }
  },
  {
    id: 13,
    name: "The Choice",
    description: "'Adventure, Wisdom, or Home?' Oona asks. The book pulses gently. Leo knows this is his moment.",
    north: 6,
    south: 10,
    east: 16,
    west: 11,
    buttonText: {
      north: "Say 'Adventure'",
      south: "Say 'Wisdom'",
      east: "Say 'Home'",
      west: `Ask "Can I return again?`
    },
    media: {
      type: "image",
      src: "assets/images/story-route-12.jpg",
      alt: "Leo stands with the glowing book at a forest fork"
    }
  },
  {
    id: 14,
    name: "The Trickster's Test",
    description: "A jester appears: 'Trade the book for a wish!' Leo holds the book tighter and shakes his head.",
    north: 11,
    south: 7,
    east: 8,
    west: 16,
    buttonText: {
      north: "Challenge with a riddle",
      south: "Trick him with a fake book",
      east: "Run toward the tree",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-13.jpg",
      alt: "Leo encounters a mischievous jester in the forest"
    }
  },
  {
    id: 15,
    name: "The Forgotten Forest",
    description: "Leo walks into a quiet, cool forest. The silence is comforting. He feels at peace, though the path ahead is uncertain.",
    north: 6,
    south: 9,
    east: 12,
    west: 16,
    buttonText: {
      north: "Sit and reflect",
      south: "Call for Oona",
      east: "Head toward a soft light ",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-14.jpg",
      alt: "Leo in a glade of glowing whispers"
    }
  },
  {
    id: 16,
    name: "Return Home",
    description: "Leo finds himself back on the couch. The book rests in his lap. He's home... and the glow within the book hasn't faded.",
    north: 0,
    south: 17,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End. Would you like to start over?",
      south: "Go tell mom and dad about the book.",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-15.jpg",
      alt: "Leo waking up back on the couch, still holding the glowing book"
    }
  },
  {
    id: 17,
    name: "Talk with the parents",
    description: "Leo instantly jumps up and tells his parents about the book. He's talking so fast from excitement, they can barely make out what he is trying to say. They both smile at each other and Leo's dad says 'slow down now', we take it that you're enjoying the book. Leo shouts instantly, 'yes, I want to continue reading it! But first I need to take a nap.'",
    north: 0,
    south: 2,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End. Would you like to start over?",
      south: "Lay down on the couch and take a nap"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-15.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  }
];


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
        north_shell.style.display = "flex"; // Make button visible
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
        south_shell.style.display = "flex"; // Make button visible
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
      east_shell.style.display = "flex"; // Make button visible
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
        west_shell.style.display = "flex"; // Make button visible
        west.innerText = "Go West"; // Set button text
        console.log("West button text:", north.textContent)

        // Update the east button with the custom text
        west.innerText = rooms[currentRoom].buttonText.west;

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
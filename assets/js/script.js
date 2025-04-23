

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
    east: 27,
    west: -1,
    buttonText: {
      north: "Read the book",
      south: "Go play video games",
      east: "shortcut to 27"
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
    description: `Leo snuggles against the couch and opens the book and starts to flip through it. He is intrigued and the pages begin to glow. He reads the book for hours and hours but begins to get drowsy.`,
    north: 2,
    south: 17,
    east: -1,
    west: -1,
    buttonText: {
      north: "Lay down, take a nap \nfor a pleasant dream",
      south: "Tell mom and dad about the book"
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
    south: 1,
    east: -1,
    west: -1,
    buttonText: {
      north: "Open the book",
      south: "Flip through the book randomly"
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
    east: 16,
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
    west: 16,
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
    name: "Finding Grandma",
    description: "Leo stands before the glowing tree, its golden leaves shimmering like stars. His grandmother appears in a warm light, regal yet gentle. Oona the owl rests beside her.",
    north: 14,
    south: 18,
    east: 12,
    west: 16,
    buttonText: {
      north: "Hug grandma and \nlearn more about Oona",
      south: "Ask about the tree",
      east: "I thought you died, but how...",
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
    south: 23,
    east: -1,
    west: -1,
    buttonText: {
      north: `No, I’ll keep mine, \n(keeping a firm grip on the book)`,
      south: `I can show you mine. \nWhat’s in yours?`,
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
    name: "I Though You Died",
    description: "“Yes, I did” Grandma says softly. “I was the Queen of this land but since my passing, I'm able to come back to be an advisor. The book is your bridge to everything I once protected.”",
    north: 22,
    south: 14,
    east: 18,
    west: 16,
    buttonText: {
      north: "Show me what I have to do next",
      south: "Hug grandma and \nlearn more about Oona",
      east: "Ask about the tree",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.jpg",
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
    name: "Hugging Grandma",
    description: `Leo hugs grandma with a tight embrace. Grandma says "Oh how I missed you, Leo!". She then says "I see that you already met Oona, she is my most trusted friend and she will help guide you".`,
    north: 18,
    south: 12,
    east: 22,
    west: 16,
    buttonText: {
      north: "Ask about the tree",
      south: "I thought you died, but how...",
      east: "Show me what I have to do next",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-14-hugging-grandma.jpg",
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
      src: "assets/images/story-route-2-magical-nap-at-home.jpg",
      alt: "Leo waking up back on the couch, still holding the glowing book"
    }
  },
  {
    id: 17,
    name: "Talk with the parents",
    description: `Leo excitedly tells his parents about the book, speaking so rapidly they can barely understand. They smile at each other. "Slow down," his dad says. "I see you're enjoying it." Leo shouts, "Yes! I want to keep reading, but first I need a nap!"`,
    north: 0,
    south: 2,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End. Would you like to start over?",
      south: "Lay down to take a nap"
    },
    media: {
      type: "image",
      src: "assets/images/parents-and-Leo-in-the-kitchen.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 18,
    name: "About the Glowing Tree",
    description: "“Why is this tree glowing?” Leo asks. She smiles gently. “Because this is where stories are remembered. It’s where I first held the book, just like you.”",
    north: 19,
    south: 21,
    east: 16,
    west: 22,
    buttonText: {
      north: "Can I see your memories in the book?",
      south: "Why do I feel a such a \nstrong connection to the tree",
      east: "Return to the couch",
      west: "Show me what I have to do next"
    },
    media: {
      type: "image",
      src: "assets/images/general-grandmother-talking.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 19,
    name: "The Memory Pages",
    description: "Leo opens the book. Its pages shimmer, then swirl into glowing images. He sees his grandmother as a young girl — laughing, discovering the book, and meeting Oona. “These are my memories,” she whispers. “They’re yours to keep.”",
    north: 20,
    south: 2,
    east: 16,
    west: 22,
    buttonText: {
      north: "Ask Grandma why she \nstopped using the book",
      south: "Close the book and look around",
      east: "Return to the couch",
      west: "Show me what I have to do next"
    },
    media: {
      type: "image",
      src: "assets/images/book-open.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 20,
    name: "The Closed Chapter",
    description: "Grandma’s eyes shimmer. “I didn’t stop using it… it stopped showing me new pages. The land grew quiet. I knew it was waiting—for you.” She gently places her hand on Leo’s. “The story needed your heart now, not mine.”",
    north: 22,
    south: 2,
    east: 21,
    west: 16,
    buttonText: {
      north: "Show me what I have to do next",
      south: "Close the book and look around",
      east: "Why do I feel a such a \nstrong connection to the tree",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 21,
    name: "Strong Connection With the Tree",
    description: `Leo asks softly: "Why do I sense such a strong connection with the tree?" Grandma touches the book. "It remembers you. It waited for someone with curiosity and courage—just like I once had."`,
    north: 20,
    south: 22,
    east: 16,
    west: 21,
    buttonText: {
      north: "Ask Grandma why she \nstopped using the book",
      south: "Show me what I have to do next",
      east: "Return to the couch",
      west: "Why do I feel a such a \nstrong connection to the tree",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 22,
    name: "The Next Step",
    description: `Leo asks "What now?" Grandma smiles. "That's up to you, brave boy." Oona nods. "The book guides you but it's your heart decides which page comes next." `,
    north: 27,
    south: 2,
    east: 16,
    west: 16,
    buttonText: {
      north: "Then I want to explore more",
      south: "Can I go home and come back?",
      east: "Will I see you again?",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/General-Leo-Grandmother-Oona.jpg",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 23,
    name: "The Trickster Runs",
    description: `Just as Leo kindly shares his book with the dude, he snatches it out of Leo's hands and throws down his fake book. Then he bolts off with Leo's book. Leo begins to chase the dude saying "Hey, give it back!"`,
    north: 24,
    south: 16,
    east: -1,
    west: -1,
    buttonText: {
      north: `Continue running after him`,
      south: `Give up, go home and wake \nup from this bad dream`,
    },
    media: {
      type: "image",
      src: "assets/images/The-Trickster---Running.jpg",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 24,
    name: "The Trickster In Trouble",
    description: `Suddenly out of no where a deep cliff appears ahead. The dude is running too fast and Leo watches him fall over the cliff! Leo arrives to find the dude hanging off of the cliff screaming "Help me, I'm scared of heights!"`,
    north: 25,
    south: 26,
    east: -1,
    west: -1,
    buttonText: {
      north: `Reach out your hand \nand save the dude`,
      south: `Let him be, he looks like \nhe can easily save himself`,
    },
    media: {
      type: "image",
      src: "assets/images/The-Trickster---Off-the-Cliff.jpg",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 25,
    name: "Leo Saves the Trickster",
    description: `Leo helps the dude off the cliff to safety. Grateful, the dude apologizes and explains he only wanted the book to read the famous stories to his younger siblings. Leo offers to read to them himself sometime. The dude is delighted and Leo goes on his way.  `,
    north: 11,
    south: 13,
    east: -1,
    west: -1,
    buttonText: {
      north: `Keep running after him`,
      south: `Give up and turn around`,
    },
    media: {
      type: "image",
      src: "assets/images/The-Trickster---And-Leo-Talking.jpg",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 26,
    name: "Leaving the dude behind (clone of ID 4)",
    description: "Leo leaves the dude behind and he gets far away from him as possible. Then suddenly, he sees two paths lie ahead—one leads to a glowing tree, the other to musical chimes.",
    north: 8,
    south: 6,
    east: 16,
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
    id: 27,
    name: "Leaving Grandma and Oona",
    description: "Leo says goodbye to his grandmother and Oona and continues on his way. Up ahead he sees what looks like a sign. He also hears a faint voice in the distance.",
    north: 28,
    south: 29,
    east: 16,
    west: -1,
    buttonText: {
      north: "Go see what the sign says",
      south: "Follow the sound of the faint voice",
      east: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/leo-walking-general-poses-and-settings-happy.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 28,
    name: "Where Is Your Heart",
    description: `Leo walks further down the path to a sign that reads "Where Is Your Heart". He thinks to himself "what could this mean". Ahh, he thinks he knows! He continues onwards.`,
    north: 16,
    south: 31,
    east: 32,
    west: -1,
    buttonText: {
      north: "With my family",
      south: "In this magical place",
      east: "Wherever the story takes me"
    },
    media: {
      type: "image",
      src: "assets/images/where-is-your-heart-sign.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 29,
    name: "Unicorn and Girl Stuck In Mud",
    description: `Leo walks quite some distance as the landscape changes and he comes across a girl with her unicorn stuck in the mud. She yells "Can you help get us out?!"`,
    north: 28,
    south: 30,
    east: -1,
    west: -1,
    buttonText: {
      north: "I don't think I can help, \nsorry but I must be on my way",
      south: "Hold on, I'll get \nyou both out of there!",
    },
    media: {
      type: "image",
      src: "assets/images/unicorl-girl-stuck.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 30,
    name: "Unicorn and Girl Freed",
    description: `Leo looked around for a rescue tool, then remembered reading about this place. He found rope hidden in the bushes, using it to pull them out. "Oh thank you, my hero!" the girl exclaimed.`,
    north: 28,
    south: 16,
    east: -1,
    west: -1,
    buttonText: {
      north: "No problem! I wish I \ncould chat but I'm on a mission",
      south: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/unicorl-girl-freed.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 31,
    name: "In this Magical Kingdom",
    description: `Leo reaches a forest clearing and approaches a cliff, gazing at the most pristine land he's ever seen. It was love at first sight—in his heart, he knew this place was home. The adventure is just beginning...`,
    north: 0,
    south: -1,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End (for now). Go back to the \nbeginning to explore another adventure",
    
    },
    media: {
      type: "image",
      src: "assets/images/leo-overlooking-magical-kingdom.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 32,
    name: "Wherever the Story Takes Me",
    description: `Leo finds a comfy spot to sit down to read the book and let the stories inspire his journey. And what a pleasant surprise, Oona has swooped in to offer any guidance. Her and Leo have a very long conversation about the stories in the book and now Leo knows where he wants to go.`,
    north: 0,
    south: -1,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End (for now). Go back to the \nbeginning to explore another adventure",
    
    },
    media: {
      type: "image",
      src: "assets/images/leo-sitting-with-oona-reading-the-book.jpg",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
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




// Add this function anywhere in your JavaScript file
function implementBackButton() {
  // Self-contained back button implementation
  let roomHistory = [];
  const back = document.getElementById('back');
  const back_shell = document.getElementById('back_shell');
  const roomNumber = document.getElementById('room-number');

  // Override the move function to track history
  const originalMove = move;
  move = function(destination) {
      roomHistory.push(currentRoom);
      originalMove(destination);
  };

  // Add back button handler in gameMaster
  const originalGameMaster = gameMaster;
  gameMaster = function() {
      originalGameMaster();
      
      // Update room number display
      roomNumber.textContent = `Room: ${currentRoom}`;
      
      // Handle back button
      if (roomHistory.length > 0) {
          back_shell.style.display = "block";
          const backClone = replaceButton(back);
          backClone.addEventListener('click', () => {
              const previousRoom = roomHistory.pop();
              currentRoom = previousRoom;
              gameMaster();
          });
      } else {
          back_shell.style.display = "none";
      }
  };
}

// Call this function to activate the back button
implementBackButton();
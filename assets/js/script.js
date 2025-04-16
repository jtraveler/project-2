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

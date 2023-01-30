let playerTiles = document.querySelectorAll(".player-tile");


let undrawn = [
    {
        url: "./tile-images/Backside.png",
        amount: 144,
        type: "hidden"
    }
]

let directions = [
    {
        url: "./tile-images/East.png",
        amount: 1,
        type: "Direction"
    },
    {
        url: "./tile-images/South.png",
        amount: 1
    },
    {
        url: "./tile-images/West.png",
        amount: 1
    },
    {
        url: "./tile-images/North.png",
        amount: 1
    },
]

let Tiles = [
    {
        url: "./tile-images/Bamboos-1.png",
        amount: 4,
        type: "Normal"
    },
    {
        url: "./tile-images/Bamboos-2.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-3.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-4.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-5.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-6.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-7.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-8.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboos-9.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-1.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-2.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-3.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-4.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-5.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-6.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-7.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-8.png",
        amount: 4
    },
    {
        url: "./tile-images/Characters-9.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-1.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-2.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-3.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-4.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-5.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-6.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-7.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-8.png",
        amount: 4
    },
    {
        url: "./tile-images/Dots-9.png",
        amount: 4
    },
];

let specialTiles = [
    {
        url: "./tile-images/Autumn.png",
        amount: 4
    },
    {
        url: "./tile-images/Spring.png",
        amount: 4
    },
    {
        url: "./tile-images/Summer.png",
        amount: 4
    },
    {
        url: "./tile-images/Winter.png",
        amount: 4
    },
    {
        url: "./tile-images/Chrysanthemum.png",
        amount: 4
    },
    {
        url: "./tile-images/Lily.png",
        amount: 4
    },
    {
        url: "./tile-images/Plum.png",
        amount: 4
    },
    {
        url: "./tile-images/Bamboo.png",
        amount: 4
    },
    {
        url: "./tile-images/Green-Dragon.png",
        amount: 4
    },
    {
        url: "./tile-images/Red-Dragon.png",
        amount: 4
    },
    {
        url: "./tile-images/White-Dragon",
        amount: 4
    },
];

function directionalButtons() {
    for(let index = 0; index < powerButtons.length; index++) {
        let newButton = document.childElement("button");
        newButton.innerHTML = powerButtons[index].name;
        newButton.addEventListener("click", () => {
            buyItem(powerButtons[index].name,
                powerButtons[index].cost,
                powerButtons[index].power)
    });
  }
}

var arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * 4);
    if (arr.indexOf(r) === -1) arr.push(r);
}

directions[0].amount -= 1;
directions[1].amount -= 1;
directions[2].amount -= 1;
directions[3].amount -= 1;

function getRandomTile() {
    return Math.floor(Math.random() * directions.length);
};

for (let tile = 0; tile < playerTiles.length; tile++) {
    playerTiles[tile].setAttribute("src", directions[arr[tile]].url);
}
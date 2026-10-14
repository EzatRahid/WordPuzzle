const wordList = [
    "apple", "beach", "chair", "dance", "eagle", "flame", "grape", "house", "igloo", "jelly",
    "kite", "lemon", "mouse", "night", "ocean", "piano", "queen", "river", "smile", "tiger",
    "umbrella", "voice", "water", "xenon", "yacht", "zebra", "angel", "bread", "cloud", "dream",
    "earth", "frost", "giant", "heart", "image", "juice", "knife", "light", "magic", "nurse",
    "orbit", "paper", "quiet", "robot", "stone", "train", "unity", "value", "wind", "youth",
    "actor", "badge", "camel", "driver", "elbow", "fancy", "ghost", "honey", "input", "joint",
    "koala", "laser", "metal", "novel", "onion", "paint", "quest", "radar", "salsa", "tulip",
    "urban", "vivid", "waltz", "xerox", "yield", "zones", "amber", "blast", "crisp", "dwarf",
    "elite", "flora", "glory", "hound", "index", "koala", "lunar", "maple", "noble", "oasis",
    "prime", "quark", "royal", "scout", "trace", "ultra", "vigor", "waste", "yeast", "zonal"
];

let PuzzleGrid = document.getElementById('PuzzleGrid');

let GRID_COL = 10;
let GRID_ROWS = 10;
let TOTAL_BOXES = GRID_COL * GRID_ROWS;

PuzzleGrid.style.gridTemplateColumns = `repeat(${GRID_COL},1fr)`;
PuzzleGrid.style.gridTemplateRows = `repeat(${GRID_ROWS},1fr)`;

const FindShortestWord = (arr) =>{
    const shortestWordLength = arr.reduce((shortest,current) =>{
        return current.length < shortest.length ? current : shortest;
    })

    return shortestWordLength.length;
}

const GeneratePuzzleGridLayout = () => {
    for(let i = 1; i <= TOTAL_BOXES; i++){
        const box = document.createElement('div');
        box.classList.add('box');
     
        box.id = `box-${i}`; 
        // box.textContent = i;

        PuzzleGrid.append(box);
    }
}

const GenerateWordBank = () =>{
    let wordBank = []
    const NUM_OF_WORDS = TOTAL_BOXES / 10

    for(let i = 1; i <= NUM_OF_WORDS; i++){
        wordBank.push(wordList[Math.floor(Math.random() * wordList.length)])
    }

    return wordBank;
}

const GenerateWordLayout = (arr) =>{
    const twoDArray = arr.map(word => word.split(''));
    for(let i = 0; i < twoDArray.length; i++){
        let startIndex = Math.floor(Math.random() * (TOTAL_BOXES - FindShortestWord(wordList)))
       
        console.log('Iteration number: ' + i)
        for(let j = 0; j < twoDArray[i].length; j++){
            let currentBox = document.getElementById(`box-${startIndex + j}`);
            console.log('CurrentBox index: ' + currentBox)
            if(currentBox){
                currentBox.textContent = twoDArray[i][j]
            }
            
        }
    }

}

GeneratePuzzleGridLayout();
let WORD_BANK = GenerateWordBank();

console.log(WORD_BANK)

GenerateWordLayout(WORD_BANK)




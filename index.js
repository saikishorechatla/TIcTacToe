const winningPositions = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
let currentMove = 'X';
let moves = [10, 10, 10, 10, 10, 10, 10, 10, 10];
let xPosition = [];
let oPosition = [];
const checkWinner = (positions) => {
    if (positions.length < 3) return false;
    return winningPositions.some(position => 
        position.every(p => positions.includes(p))
    );
};

const handleMove = (box, num) => {
    if (moves[num - 1]) return;
    box.innerHTML = `<h1>${currentMove}</h1>`;
    box.style.backgroundColor=(currentMove==='X')?'#e0bb7b':'#18bc71'
    moves[num - 1] = currentMove;
    if (currentMove === 'X') {
        xPosition.push(num);
        if (checkWinner(xPosition)) {
            document.getElementById('heading').textContent = 'Winner is :X 🤩';
            return;
        }
        currentMove = 'O';
    } else {
        oPosition.push(num);
        if (checkWinner(oPosition)) {
            document.getElementById('heading').textContent = 'Winner is :O 🤩';
            return;
        }
        currentMove = 'X';
    }
    if (xPosition.length + oPosition.length === 9) {
        document.getElementById('heading').textContent = 'Draw 😑';
    }
};

const boxes = Array.from(document.getElementsByClassName('box'));
boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleMove(box, index + 1));
});

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
  if(document.getElementById('k'))
    document.getElementById('p').removeChild(document.getElementById('k'))
    button.textContent = 'Restart';
    currentMove = 'X';
    moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    xPosition = [];
    oPosition = [];
    boxes.forEach(box => {box.innerHTML = '' 
        box.style.backgroundColor=''});
    document.getElementById('heading').textContent = 'Tic Tac Toe';
});

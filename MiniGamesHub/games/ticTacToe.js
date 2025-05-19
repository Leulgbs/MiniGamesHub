export function init(container) {
    container.innerHTML = `
      <h2>Tic Tac Toe</h2>
      <div id="board" class="grid"></div>
      <button onclick="location.reload()">Back to Home</button>
    `;
  
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    let cells = Array(9).fill(null);
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.onclick = () => {
        if (!cell.textContent) {
          cell.textContent = currentPlayer;
          cells[i] = currentPlayer;
          if (checkWinner(cells, currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            location.reload();
          }
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      };
      board.appendChild(cell);
    }
  }
  
  function checkWinner(cells, player) {
    const wins = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];
    return wins.some(combo => combo.every(i => cells[i] === player));
  }
  
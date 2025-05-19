// Mini Games Hub - A collection of classic browser games
// Created with vanilla JavaScript, HTML5 Canvas, and CSS

// Global variables and styles
const app = document.getElementById('app');

// Theme colors and styles
const globalStyle = document.createElement('style');
globalStyle.textContent = `
  :root {
    --primary-color: #2196F3;
    --secondary-color: #4CAF50;
    --accent-color: #FF5722;
    --background-color: #f5f7fa;
    --card-background: #ffffff;
    --text-primary: #2c3e50;
    --text-secondary: #666666;
    --button-text: #ffffff;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: var(--background-color);
    color: var(--text-primary);
    min-height: 100vh;
  }

  #app {
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  }

  .game-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: var(--card-background);
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    animation: fadeIn 0.5s ease-out;
  }

  .game-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }

  .game-button {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background: var(--primary-color);
    color: var(--button-text) !important;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-decoration: none;
    display: inline-block;
    text-align: center;
    min-width: 120px;
  }

  .game-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    background: #1976D2;
  }

  .game-button:active {
    transform: translateY(0);
  }

  .difficulty-selector {
    margin: 20px 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .difficulty-btn {
    padding: 8px 16px;
    border: 2px solid var(--primary-color);
    border-radius: 20px;
    background: white;
    color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s;
  }

  .difficulty-btn:hover {
    background: #E3F2FD;
  }

  .difficulty-btn.active {
    background: var(--primary-color);
    color: white;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .game-container,
    .game-card,
    .menu-header {
      animation: none;
    }
  }
`;
document.head.appendChild(globalStyle);

// Main menu HTML and styles
const mainMenuHTML = `
  <div class="main-menu">
    <div class="menu-header">
      <div class="menu-title-container">
        <h1 class="menu-title">🎮 Mini Games Hub 🎮</h1>
        <div class="menu-subtitle-container">
          <p class="menu-subtitle">A collection of classic games to enjoy!</p>
          <div class="menu-stats">
            <span>🎲 8 Games</span>
            <span>⭐ Multiple Difficulty Levels</span>
            <span>🎯 Score Tracking</span>
          </div>
        </div>
      </div>
    </div>
    <div class="game-grid">
      <div class="game-card" id="btn-tictactoe">
        <div class="game-icon">⭕</div>
        <div class="game-info">
          <h3>Tic Tac Toe</h3>
          <p>Classic 3x3 strategy game</p>
          <div class="game-features">
            <span>2 Players</span>
            <span>Strategy</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-rps">
        <div class="game-icon">✊</div>
        <div class="game-info">
          <h3>Rock Paper Scissors</h3>
          <p>Test your luck against the computer</p>
          <div class="game-features">
            <span>VS Computer</span>
            <span>Quick Play</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-2048">
        <div class="game-icon">🎯</div>
        <div class="game-info">
          <h3>2048</h3>
          <p>Merge tiles to reach 2048</p>
          <div class="game-features">
            <span>Puzzle</span>
            <span>Undo Feature</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-snake">
        <div class="game-icon">🐍</div>
        <div class="game-info">
          <h3>Snake</h3>
          <p>Classic arcade snake game</p>
          <div class="game-features">
            <span>Arcade</span>
            <span>Growing Difficulty</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-memory">
        <div class="game-icon">🎴</div>
        <div class="game-info">
          <h3>Memory Cards</h3>
          <p>Match pairs of cards</p>
          <div class="game-features">
            <span>Memory</span>
            <span>Multiple Levels</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-pong">
        <div class="game-icon">🏓</div>
        <div class="game-info">
          <h3>Pong</h3>
          <p>Classic table tennis game</p>
          <div class="game-features">
            <span>VS Computer</span>
            <span>Arcade</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-minesweeper">
        <div class="game-icon">💣</div>
        <div class="game-info">
          <h3>Minesweeper</h3>
          <p>Find all the mines!</p>
          <div class="game-features">
            <span>Strategy</span>
            <span>Multiple Levels</span>
          </div>
        </div>
      </div>
      <div class="game-card" id="btn-breakout">
        <div class="game-icon">🎯</div>
        <div class="game-info">
          <h3>Breakout</h3>
          <p>Break all the bricks!</p>
          <div class="game-features">
            <span>Arcade</span>
            <span>Score Attack</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Main menu styles
const menuStyle = document.createElement('style');
menuStyle.textContent = `
  .main-menu {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .menu-header {
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 20px;
    color: white;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    animation: fadeIn 0.5s ease-out;
  }

  .menu-title-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .menu-title {
    font-size: 3.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    background: linear-gradient(to right, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: titleGlow 2s ease-in-out infinite alternate;
  }

  .menu-subtitle-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
  }

  .menu-subtitle {
    font-size: 1.4em;
    opacity: 0.9;
    margin: 0 0 15px 0;
  }

  .menu-stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    font-size: 1.1em;
  }

  .menu-stats span {
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 16px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
  }

  .game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding: 20px;
  }

  .game-card {
    background: var(--card-background);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s;
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.5s ease-out;
    animation-fill-mode: both;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .game-card:nth-child(1) { animation-delay: 0.1s; }
  .game-card:nth-child(2) { animation-delay: 0.2s; }
  .game-card:nth-child(3) { animation-delay: 0.3s; }
  .game-card:nth-child(4) { animation-delay: 0.4s; }
  .game-card:nth-child(5) { animation-delay: 0.5s; }
  .game-card:nth-child(6) { animation-delay: 0.6s; }
  .game-card:nth-child(7) { animation-delay: 0.7s; }
  .game-card:nth-child(8) { animation-delay: 0.8s; }

  .game-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
  }

  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    border-color: var(--primary-color);
  }

  .game-card:hover::before {
    opacity: 0.05;
  }

  .game-icon {
    font-size: 3.5em;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s;
  }

  .game-card:hover .game-icon {
    transform: scale(1.1);
  }

  .game-info {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .game-card h3 {
    color: var(--text-primary);
    margin: 15px 0;
    font-size: 1.5em;
    position: relative;
    z-index: 1;
  }

  .game-card p {
    color: var(--text-secondary);
    font-size: 1em;
    margin: 0 0 15px 0;
    position: relative;
    z-index: 1;
  }

  .game-features {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .game-features span {
    background: var(--background-color);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    color: var(--text-secondary);
  }

  .menu-footer {
    display: none;
  }

  @keyframes titleGlow {
    from {
      text-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
    to {
      text-shadow: 0 0 20px rgba(255,255,255,0.8);
    }
  }

  @media (max-width: 768px) {
    .menu-title {
      font-size: 2.5em;
    }
    .menu-subtitle {
      font-size: 1.2em;
    }
    .menu-stats {
      flex-direction: column;
      gap: 10px;
    }
    .game-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .menu-title {
      font-size: 2em;
    }
    .menu-header {
      padding: 20px;
    }
  }
`;
document.head.appendChild(menuStyle);

// Utility functions
function updateGameButtons() {
  document.querySelectorAll('.game-button').forEach(button => {
    button.style.color = 'var(--button-text)';
    button.style.backgroundColor = 'var(--primary-color)';
  });
}

// Main menu initialization
function showMainMenu() {
  app.innerHTML = mainMenuHTML;
  updateGameButtons();

  document.querySelectorAll('.game-card').forEach(card => {
    card.onclick = () => {
      const gameId = card.id;
      switch(gameId) {
        case 'btn-tictactoe': showTicTacToe(); break;
        case 'btn-rps': showRockPaperScissors(); break;
        case 'btn-2048': show2048Game(); break;
        case 'btn-snake': showSnakeGame(); break;
        case 'btn-memory': showMemoryGame(); break;
        case 'btn-pong': showPongGame(); break;
        case 'btn-minesweeper': showMinesweeperGame(); break;
        case 'btn-breakout': showBreakoutGame(); break;
      }
    };
  });
}

/* Tic Tac Toe Game */
function showTicTacToe() {
  app.innerHTML = `
    <div class="tictactoe-game">
      <h2>Tic Tac Toe</h2>
      <div class="tic-board" id="tic-board">
        ${'<div class="tic-cell"></div>'.repeat(9)}
      </div>
      <p id="tic-status" style="font-weight:bold; font-size:18px; margin-top:10px;">Current Turn: X</p>
      <div class="game-buttons">
        <button id="reset" class="game-button" style="background: var(--primary-color); color: var(--button-text);">🔄 Restart</button>
        <button id="back" class="game-button" style="background: var(--primary-color); color: var(--button-text);">🏠 Back to Home</button>
      </div>
    </div>
  `;

  const board = document.getElementById('tic-board');
  const statusText = document.getElementById('tic-status');
  const resetBtn = document.getElementById('reset');
  const backBtn = document.getElementById('back');

  let currentPlayer = 'X';
  let gameActive = true;
  let boardState = Array(9).fill('');

  function clearHighlights() {
    board.querySelectorAll('.tic-cell').forEach(cell => {
      cell.style.backgroundColor = '#e3f2fd';
    });
  }

  function highlightWinningCells(pattern) {
    pattern.forEach(idx => {
      board.children[idx].style.backgroundColor = '#90ee90'; // light green
    });
  }

  function checkWinner(board, player) {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (const pattern of winPatterns) {
      if (pattern.every(idx => board[idx] === player)) {
        return pattern;
      }
    }
    return null;
  }

  function updateStatus(text) {
    statusText.textContent = text;
  }

  function resetGame() {
    boardState.fill('');
    currentPlayer = 'X';
    gameActive = true;
    clearHighlights();
    updateStatus(`Current Turn: ${currentPlayer}`);
    board.querySelectorAll('.tic-cell').forEach(cell => cell.textContent = '');
  }

  board.querySelectorAll('.tic-cell').forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (!gameActive || boardState[idx] !== '') return;

      boardState[idx] = currentPlayer;
      cell.textContent = currentPlayer;

      const winningPattern = checkWinner(boardState, currentPlayer);
      if (winningPattern) {
        highlightWinningCells(winningPattern);
        updateStatus(`${currentPlayer} Wins! 🎉`);
        gameActive = false;
      } else if (boardState.every(cell => cell !== '')) {
        updateStatus("It's a Draw!");
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus(`Current Turn: ${currentPlayer}`);
      }
    });
  });

  resetBtn.onclick = resetGame;
  backBtn.onclick = showMainMenu;
}

/* Rock Paper Scissors Game */
function showRockPaperScissors() {
  app.innerHTML = `
    <div class="rps-game">
      <h2>Rock Paper Scissors</h2>
      <div class="choices" id="choices">
        <button data-choice="rock">✊</button>
        <button data-choice="paper">✋</button>
        <button data-choice="scissors">✌️</button>
      </div>
      <div class="vs-section" id="vs-section" style="display:none;">
        <p>You chose: <span id="player-choice"></span></p>
        <p>Computer chose: <span id="computer-choice"></span></p>
        <p id="rps-result"></p>
        <div class="game-buttons">
          <button id="play-again" class="game-button" style="background: var(--primary-color); color: var(--button-text);">🔄 Play Again</button>
          <button id="go-home" class="game-button" style="background: var(--primary-color); color: var(--button-text);">🏠 Back to Home</button>
        </div>
      </div>
    </div>
  `;

  const choicesDiv = document.getElementById('choices');
  const vsSection = document.getElementById('vs-section');
  const playerChoiceSpan = document.getElementById('player-choice');
  const computerChoiceSpan = document.getElementById('computer-choice');
  const resultText = document.getElementById('rps-result');
  const playAgainBtn = document.getElementById('play-again');
  const goHomeBtn = document.getElementById('go-home');

  const choices = ['rock', 'paper', 'scissors'];

  function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
  }

  function getResult(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return "You Win! 🎉";
    }
    return "You Lose! 😞";
  }

  choicesDiv.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      const playerChoice = button.getAttribute('data-choice');
      const computerChoice = getComputerChoice();
      playerChoiceSpan.textContent = playerChoice;
      computerChoiceSpan.textContent = computerChoice;
      resultText.textContent = getResult(playerChoice, computerChoice);

      choicesDiv.style.display = 'none';
      vsSection.style.display = 'block';
    };
  });

  playAgainBtn.onclick = () => {
    choicesDiv.style.display = 'flex';
    vsSection.style.display = 'none';
  };

  goHomeBtn.onclick = showMainMenu;
}

/* 2048 Game */

function show2048Game() {
  app.innerHTML = `
    <div class="game-2048">
      <h2>2048</h2>
      <div class="game-board" id="game-board">
        ${'<div class="tile tile-0"> </div>'.repeat(16)}
      </div>
      <p id="game-message" style="font-weight:bold; font-size:18px; margin-top:10px;"></p>
      <div class="game-buttons">
        <button id="undo" class="game-button">↩️ Undo</button>
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  const boardEl = document.getElementById('game-board');
  const messageEl = document.getElementById('game-message');
  const backBtn = document.getElementById('back');
  const restartBtn = document.getElementById('restart');
  const undoBtn = document.getElementById('undo');

  let board = Array(16).fill(0);
  let previousBoard = null;  // Store previous board state for undo

  function getTileClass(value) {
    return `tile tile-${value === 0 ? 0 : value}`;
  }

  function updateBoard() {
    boardEl.querySelectorAll('.tile').forEach((tileEl, idx) => {
      const val = board[idx];
      tileEl.textContent = val === 0 ? '' : val;
      tileEl.className = getTileClass(val);
    });
  }

  function addRandomTile() {
    const emptyIndices = board.reduce((arr, val, idx) => {
      if (val === 0) arr.push(idx);
      return arr;
    }, []);
    if (emptyIndices.length === 0) return false;

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    board[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    return true;
  }

  function rotateBoardCW(mat) {
    const size = 4;
    const newMat = new Array(size * size).fill(0);
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        newMat[c * size + (size - 1 - r)] = mat[r * size + c];
      }
    }
    return newMat;
  }

  function slide(row) {
    let arr = row.filter(val => val !== 0);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        arr[i + 1] = 0;
      }
    }
    arr = arr.filter(val => val !== 0);
    while (arr.length < 4) arr.push(0);
    return arr;
  }

  function moveLeft() {
    let moved = false;
    const newBoard = [];

    for (let r = 0; r < 4; r++) {
      const row = board.slice(r * 4, r * 4 + 4);
      const newRow = slide(row);
      if (!moved && newRow.some((v, i) => v !== row[i])) moved = true;
      newBoard.push(...newRow);
    }

    board = newBoard;
    return moved;
  }

  function moveRight() {
    board = board.map((_, i) => board[4 * Math.floor(i/4) + 3 - (i % 4)]);
    const moved = moveLeft();
    board = board.map((_, i) => board[4 * Math.floor(i/4) + 3 - (i % 4)]);
    return moved;
  }

  function moveUp() {
    board = rotateBoardCW(rotateBoardCW(rotateBoardCW(board)));
    const moved = moveLeft();
    board = rotateBoardCW(board);
    return moved;
  }

  function moveDown() {
    board = rotateBoardCW(board);
    const moved = moveLeft();
    board = rotateBoardCW(rotateBoardCW(rotateBoardCW(board)));
    return moved;
  }

  function isGameOver() {
    if (board.includes(0)) return false;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[r * 4 + c] === board[r * 4 + c + 1]) return false;
      }
    }
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 3; r++) {
        if (board[r * 4 + c] === board[(r + 1) * 4 + c]) return false;
      }
    }
    return true;
  }

  function checkWin() {
    return board.some(val => val === 2048);
  }

  function handleMove(direction) {
    // Store current board state before move
    previousBoard = [...board];
    
    let moved = false;
    switch(direction) {
      case 'left': moved = moveLeft(); break;
      case 'right': moved = moveRight(); break;
      case 'up': moved = moveUp(); break;
      case 'down': moved = moveDown(); break;
    }
    if (!moved) {
      previousBoard = null;  // Clear previous state if no move was made
      return;
    }

    addRandomTile();
    updateBoard();

    if (checkWin()) {
      messageEl.textContent = "You Win! 🎉";
      window.removeEventListener('keydown', keyListener);
    } else if (isGameOver()) {
      messageEl.textContent = "Game Over! 😞";
      window.removeEventListener('keydown', keyListener);
    }
  }

  function undoMove() {
    if (previousBoard) {
      board = [...previousBoard];
      previousBoard = null;
      updateBoard();
      messageEl.textContent = '';
      window.addEventListener('keydown', keyListener);
    }
  }

  function restartGame() {
    board.fill(0);
    previousBoard = null;
    messageEl.textContent = '';
    addRandomTile();
    addRandomTile();
    updateBoard();
    window.addEventListener('keydown', keyListener);
  }

  function keyListener(e) {
    if (messageEl.textContent) return; // no moves after game end

    switch(e.key) {
      case 'ArrowLeft': e.preventDefault(); handleMove('left'); break;
      case 'ArrowRight': e.preventDefault(); handleMove('right'); break;
      case 'ArrowUp': e.preventDefault(); handleMove('up'); break;
      case 'ArrowDown': e.preventDefault(); handleMove('down'); break;
    }
  }

  function startGame() {
    board.fill(0);
    messageEl.textContent = '';
    addRandomTile();
    addRandomTile();
    updateBoard();

    window.addEventListener('keydown', keyListener);
  }

  undoBtn.onclick = undoMove;
  restartBtn.onclick = restartGame;
  backBtn.onclick = () => {
    window.removeEventListener('keydown', keyListener);
    showMainMenu();
  };

  startGame();
}

/* Snake Game */
function showSnakeGame() {
  app.innerHTML = `
    <div class="game-container snake-game">
      <h2>🐍 Snake</h2>
      <div class="difficulty-selector">
        <button class="difficulty-btn active" data-speed="100">Easy</button>
        <button class="difficulty-btn" data-speed="75">Medium</button>
        <button class="difficulty-btn" data-speed="50">Hard</button>
      </div>
      <div class="snake-container">
        <canvas id="snake-canvas" width="400" height="400"></canvas>
        <div class="snake-overlay">
          <div class="snake-score-container">
            <span class="score-label">Score</span>
            <span id="snake-score">0</span>
          </div>
          <div class="snake-high-score-container">
            <span class="high-score-label">High Score</span>
            <span id="snake-high-score">0</span>
          </div>
        </div>
      </div>
      <div class="game-buttons">
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  // Add enhanced Snake game styles
  const style = document.createElement('style');
  style.textContent = `
    .snake-game {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--card-background);
      z-index: 1000;
      overflow: hidden;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .snake-container {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      background: #1a1a1a;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    .snake-container canvas {
      display: block;
      border: none;
    }

    .snake-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
    }

    .snake-score-container,
    .snake-high-score-container {
      background: rgba(0, 0, 0, 0.7);
      padding: 8px 16px;
      border-radius: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      backdrop-filter: blur(5px);
    }

    .score-label,
    .high-score-label {
      font-size: 0.8em;
      opacity: 0.8;
    }

    #snake-score,
    #snake-high-score {
      font-size: 1.4em;
      font-weight: bold;
      color: #4CAF50;
    }

    .difficulty-selector {
      background: rgba(0, 0, 0, 0.05);
      padding: 10px;
      border-radius: 25px;
    }

    .difficulty-btn {
      padding: 8px 20px;
      border: 2px solid var(--primary-color);
      border-radius: 20px;
      background: white;
      color: var(--primary-color);
      cursor: pointer;
      transition: all 0.3s;
      font-weight: 500;
    }

    .difficulty-btn:hover {
      background: #E3F2FD;
      transform: translateY(-2px);
    }

    .difficulty-btn.active {
      background: var(--primary-color);
      color: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('snake-score');
  const highScoreEl = document.getElementById('snake-high-score');
  const backBtn = document.getElementById('back');
  const restartBtn = document.getElementById('restart');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  
  const gridSize = 20;
  const tileCount = canvas.width / gridSize;
  let snake = [{x: 10, y: 10}];
  let food = {x: 15, y: 15};
  let dx = 1;
  let dy = 0;
  let score = 0;
  let highScore = localStorage.getItem('snakeHighScore') || 0;
  let gameLoop;
  let gameSpeed = 100;
  let gameOver = false;
  let snakeTrail = [];

  highScoreEl.textContent = highScore;

  function setDifficulty(speed) {
    gameSpeed = speed;
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = setInterval(gameUpdate, gameSpeed);
    }
  }

  difficultyBtns.forEach(btn => {
    btn.onclick = () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficulty(parseInt(btn.dataset.speed));
    };
  });

  function drawGrid() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 0.5;
    
    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  function drawSnake() {
    // Draw snake trail
    snakeTrail.forEach((segment, index) => {
      const alpha = 1 - (index / snakeTrail.length) * 0.8;
      ctx.fillStyle = `rgba(76, 175, 80, ${alpha})`;
      ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });

    // Draw snake body
    snake.forEach((segment, index) => {
      // Create gradient for snake body
      const gradient = ctx.createLinearGradient(
        segment.x * gridSize,
        segment.y * gridSize,
        (segment.x + 1) * gridSize,
        (segment.y + 1) * gridSize
      );
      
      if (index === 0) {
        // Head color
        gradient.addColorStop(0, '#81C784');
        gradient.addColorStop(1, '#4CAF50');
      } else {
        // Body color
        gradient.addColorStop(0, '#66BB6A');
        gradient.addColorStop(1, '#43A047');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      
      // Add shine effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(segment.x * gridSize + 2, segment.y * gridSize + 2, gridSize - 6, gridSize - 6);
    });
  }

  function drawFood() {
    const x = food.x * gridSize;
    const y = food.y * gridSize;
    
    // Draw food glow
    const glow = ctx.createRadialGradient(
      x + gridSize/2, y + gridSize/2, 2,
      x + gridSize/2, y + gridSize/2, gridSize/2
    );
    glow.addColorStop(0, 'rgba(255, 87, 34, 0.3)');
    glow.addColorStop(1, 'rgba(255, 87, 34, 0)');
    
    ctx.fillStyle = glow;
    ctx.fillRect(x - gridSize/2, y - gridSize/2, gridSize * 2, gridSize * 2);
    
    // Draw food
    ctx.fillStyle = '#FF5722';
    ctx.beginPath();
    ctx.arc(x + gridSize/2, y + gridSize/2, gridSize/2 - 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Add shine effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(x + gridSize/3, y + gridSize/3, gridSize/6, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawGame() {
    // Clear canvas with dark background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawGrid();
    drawSnake();
    drawFood();
  }

  function moveSnake() {
    // Update snake trail
    snakeTrail = [...snake];
    if (snakeTrail.length > 10) snakeTrail.pop();

    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      handleGameOver();
      return;
    }

    // Check self collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      handleGameOver();
      return;
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      scoreEl.textContent = score;
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
        localStorage.setItem('snakeHighScore', highScore);
      }
      generateFood();
      // Increase speed every 50 points
      if (score % 50 === 0) {
        gameSpeed = Math.max(50, gameSpeed - 10);
        clearInterval(gameLoop);
        gameLoop = setInterval(gameUpdate, gameSpeed);
      }
    } else {
      snake.pop();
    }
  }

  function generateFood() {
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
    // Make sure food doesn't spawn on snake
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    }
  }

  function handleGameOver() {
    gameOver = true;
    clearInterval(gameLoop);
    
    // Draw game over overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw game over text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!', canvas.width/2, canvas.height/2 - 20);
    
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width/2, canvas.height/2 + 20);
    
    if (score === highScore) {
      ctx.fillStyle = '#4CAF50';
      ctx.fillText('New High Score! 🎉', canvas.width/2, canvas.height/2 + 50);
    }
  }

  function gameUpdate() {
    if (!gameOver) {
      moveSnake();
      drawGame();
    }
  }

  function keyListener(e) {
    if (gameOver) return;
    
    switch(e.key) {
      case 'ArrowUp':
        if (dy !== 1) { dx = 0; dy = -1; }
        break;
      case 'ArrowDown':
        if (dy !== -1) { dx = 0; dy = 1; }
        break;
      case 'ArrowLeft':
        if (dx !== 1) { dx = -1; dy = 0; }
        break;
      case 'ArrowRight':
        if (dx !== -1) { dx = 1; dy = 0; }
        break;
    }
  }

  function startGame() {
    snake = [{x: 10, y: 10}];
    snakeTrail = [];
    dx = 1;
    dy = 0;
    score = 0;
    scoreEl.textContent = '0';
    gameOver = false;
    generateFood();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameUpdate, gameSpeed);
  }

  restartBtn.onclick = startGame;
  backBtn.onclick = () => {
    if (gameLoop) clearInterval(gameLoop);
    window.removeEventListener('keydown', keyListener);
    showMainMenu();
  };

  window.addEventListener('keydown', keyListener);
  startGame();
}

/* Memory Card Game */
function showMemoryGame() {
  app.innerHTML = `
    <div class="memory-game">
      <h2>🎴 Memory Cards</h2>
      <div class="difficulty-selector">
        <button class="difficulty-btn active" data-pairs="8">Easy (8 pairs)</button>
        <button class="difficulty-btn" data-pairs="12">Medium (12 pairs)</button>
        <button class="difficulty-btn" data-pairs="16">Hard (16 pairs)</button>
      </div>
      <p id="memory-moves" style="font-weight:bold; font-size:18px;">Moves: 0</p>
      <div class="memory-board" id="memory-board"></div>
      <div class="game-buttons">
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  const board = document.getElementById('memory-board');
  const movesEl = document.getElementById('memory-moves');
  const restartBtn = document.getElementById('restart');
  const backBtn = document.getElementById('back');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');

  const allEmojis = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
    '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔',
    '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺'
  ];
  
  let cards = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let moves = 0;
  let canFlip = true;
  let currentPairs = 8;

  // Add difficulty selector styles
  const style = document.createElement('style');
  style.textContent = `
    .difficulty-selector {
      margin: 10px 0;
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .difficulty-btn {
      padding: 8px 16px;
      border: 2px solid #4CAF50;
      border-radius: 20px;
      background: white;
      cursor: pointer;
      transition: all 0.3s;
    }
    .difficulty-btn:hover {
      background: #E8F5E9;
    }
    .difficulty-btn.active {
      background: #4CAF50;
      color: white;
    }
    .memory-board {
      display: grid;
      gap: 10px;
      max-width: 800px;
      margin: 20px auto;
      padding: 0 10px;
    }
    .memory-board.easy {
      grid-template-columns: repeat(4, 1fr);
    }
    .memory-board.medium {
      grid-template-columns: repeat(6, 1fr);
    }
    .memory-board.hard {
      grid-template-columns: repeat(8, 1fr);
    }
    .memory-card {
      aspect-ratio: 1;
      background: #4CAF50;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      cursor: pointer;
      transition: transform 0.3s;
      user-select: none;
    }
    .memory-card:hover {
      transform: scale(1.05);
    }
    .memory-card.flipped {
      background: #fff;
      transform: rotateY(180deg);
    }
    .memory-card.matched {
      background: #81C784;
      cursor: default;
    }
  `;
  document.head.appendChild(style);

  function setDifficulty(pairs) {
    currentPairs = pairs;
    board.className = 'memory-board ' + 
      (pairs === 8 ? 'easy' : pairs === 12 ? 'medium' : 'hard');
    startGame();
  }

  difficultyBtns.forEach(btn => {
    btn.onclick = () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficulty(parseInt(btn.dataset.pairs));
    };
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createBoard() {
    board.innerHTML = '';
    const selectedEmojis = allEmojis.slice(0, currentPairs);
    cards = shuffle([...selectedEmojis, ...selectedEmojis]);
    cards.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.value = emoji;
      card.dataset.index = index;
      card.innerHTML = '❓';
      card.onclick = () => flipCard(card);
      board.appendChild(card);
    });
  }

  function flipCard(card) {
    if (!canFlip || flippedCards.length >= 2 || card.classList.contains('flipped') || 
        card.classList.contains('matched')) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      moves++;
      movesEl.textContent = `Moves: ${moves}`;
      canFlip = false;
      checkMatch();
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.value === card2.dataset.value;

    if (match) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
      if (matchedPairs === currentPairs) {
        setTimeout(() => {
          alert(`Congratulations! You won in ${moves} moves! 🎉`);
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '❓';
        card2.textContent = '❓';
      }, 1000);
    }

    setTimeout(() => {
      flippedCards = [];
      canFlip = true;
    }, 1000);
  }

  function startGame() {
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    movesEl.textContent = 'Moves: 0';
    createBoard();
  }

  restartBtn.onclick = startGame;
  backBtn.onclick = showMainMenu;

  // Start with easy difficulty
  setDifficulty(8);
}

/* Pong Game */
function showPongGame() {
  app.innerHTML = `
    <div class="game-container pong-game">
      <h2>🏓 Pong</h2>
      <div class="difficulty-selector">
        <button class="difficulty-btn active" data-speed="5">Easy</button>
        <button class="difficulty-btn" data-speed="7">Medium</button>
        <button class="difficulty-btn" data-speed="9">Hard</button>
      </div>
      <div class="pong-container">
        <canvas id="pong-canvas" width="800" height="400"></canvas>
      </div>
      <p id="pong-score" style="font-weight:bold; font-size:18px; margin-top:10px;">Player: 0 | Computer: 0</p>
      <div class="game-buttons">
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  // Add styles to prevent scrolling and handle touch events
  const style = document.createElement('style');
  style.textContent = `
    .pong-game {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--card-background);
      z-index: 1000;
      overflow: hidden;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .pong-container {
      position: relative;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      margin: 20px 0;
    }

    .pong-container canvas {
      border: 2px solid #000;
      touch-action: none;
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 850px) {
      .pong-container canvas {
        width: 100%;
        height: auto;
      }
    }
  `;
  document.head.appendChild(style);

  const canvas = document.getElementById('pong-canvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('pong-score');
  const backBtn = document.getElementById('back');
  const restartBtn = document.getElementById('restart');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');

  // Prevent default touch and mouse behaviors
  function preventDefault(e) {
    e.preventDefault();
  }

  // Add event listeners to prevent scrolling
  document.addEventListener('touchmove', preventDefault, { passive: false });
  document.addEventListener('wheel', preventDefault, { passive: false });
  document.addEventListener('keydown', preventDefault, { passive: false });

  // Clean up event listeners when leaving the game
  function cleanup() {
    document.removeEventListener('touchmove', preventDefault);
    document.removeEventListener('wheel', preventDefault);
    document.removeEventListener('keydown', preventDefault);
    window.removeEventListener('keydown', keyDown);
    window.removeEventListener('keyup', keyUp);
    if (animationId) cancelAnimationFrame(animationId);
  }

  let paddleHeight = 100;
  let paddleWidth = 10;
  let ballRadius = 8;
  let playerScore = 0;
  let computerScore = 0;
  let gameSpeed = 5;
  let animationId;

  // Game objects
  let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: gameSpeed,
    dy: gameSpeed
  };

  let playerPaddle = {
    y: canvas.height / 2 - paddleHeight / 2,
    speed: 0
  };

  let computerPaddle = {
    y: canvas.height / 2 - paddleHeight / 2,
    speed: 3
  };

  function setDifficulty(speed) {
    gameSpeed = speed;
    ball.dx = (ball.dx > 0 ? 1 : -1) * gameSpeed;
    ball.dy = (ball.dy > 0 ? 1 : -1) * gameSpeed;
  }

  difficultyBtns.forEach(btn => {
    btn.onclick = () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficulty(parseInt(btn.dataset.speed));
    };
  });

  function drawPaddle(x, y) {
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(x, y, paddleWidth, paddleHeight);
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FF5722';
    ctx.fill();
    ctx.closePath();
  }

  function drawScore() {
    scoreEl.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  }

  function movePaddles() {
    // Player paddle movement
    playerPaddle.y += playerPaddle.speed;
    if (playerPaddle.y < 0) playerPaddle.y = 0;
    if (playerPaddle.y + paddleHeight > canvas.height) {
      playerPaddle.y = canvas.height - paddleHeight;
    }

    // Computer paddle AI
    const paddleCenter = computerPaddle.y + paddleHeight / 2;
    if (paddleCenter < ball.y - 35) {
      computerPaddle.y += computerPaddle.speed;
    } else if (paddleCenter > ball.y + 35) {
      computerPaddle.y -= computerPaddle.speed;
    }
    if (computerPaddle.y < 0) computerPaddle.y = 0;
    if (computerPaddle.y + paddleHeight > canvas.height) {
      computerPaddle.y = canvas.height - paddleHeight;
    }
  }

  function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision
    if (ball.y - ballRadius < 0 || ball.y + ballRadius > canvas.height) {
      ball.dy = -ball.dy;
    }

    // Paddle collision
    if (ball.dx < 0 && 
        ball.x - ballRadius < paddleWidth && 
        ball.y > playerPaddle.y && 
        ball.y < playerPaddle.y + paddleHeight) {
      ball.dx = -ball.dx;
      // Add some randomness to the bounce
      ball.dy += (Math.random() - 0.5) * 2;
    }

    if (ball.dx > 0 && 
        ball.x + ballRadius > canvas.width - paddleWidth && 
        ball.y > computerPaddle.y && 
        ball.y < computerPaddle.y + paddleHeight) {
      ball.dx = -ball.dx;
      // Add some randomness to the bounce
      ball.dy += (Math.random() - 0.5) * 2;
    }

    // Score points
    if (ball.x < 0) {
      computerScore++;
      resetBall();
    } else if (ball.x > canvas.width) {
      playerScore++;
      resetBall();
    }
  }

  function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * gameSpeed;
    ball.dy = (Math.random() > 0.5 ? 1 : -1) * gameSpeed;
    drawScore();
  }

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw center line
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    ctx.setLineDash([]);

    movePaddles();
    moveBall();
    drawPaddle(0, playerPaddle.y);
    drawPaddle(canvas.width - paddleWidth, computerPaddle.y);
    drawBall();

    animationId = requestAnimationFrame(gameLoop);
  }

  function keyDown(e) {
    if (e.key === 'ArrowUp') playerPaddle.speed = -8;
    if (e.key === 'ArrowDown') playerPaddle.speed = 8;
  }

  function keyUp(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') playerPaddle.speed = 0;
  }

  function startGame() {
    playerScore = 0;
    computerScore = 0;
    resetBall();
    drawScore();
    if (animationId) cancelAnimationFrame(animationId);
    gameLoop();
  }

  restartBtn.onclick = () => {
    if (animationId) cancelAnimationFrame(animationId);
    startGame();
  };

  backBtn.onclick = () => {
    cleanup();
    showMainMenu();
  };

  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);
  startGame();
}

/* Minesweeper Game */
function showMinesweeperGame() {
  app.innerHTML = `
    <div class="game-container">
      <h2>💣 Minesweeper</h2>
      <div class="difficulty-selector">
        <button class="difficulty-btn active" data-size="8" data-mines="10">Easy</button>
        <button class="difficulty-btn" data-size="12" data-mines="20">Medium</button>
        <button class="difficulty-btn" data-size="16" data-mines="40">Hard</button>
      </div>
      <div id="minesweeper-board" class="minesweeper-board"></div>
      <p id="minesweeper-status" style="font-weight:bold; font-size:18px; margin-top:10px;"></p>
      <div class="game-buttons">
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  const board = document.getElementById('minesweeper-board');
  const statusEl = document.getElementById('minesweeper-status');
  const restartBtn = document.getElementById('restart');
  const backBtn = document.getElementById('back');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');

  let size = 8;
  let mines = 10;
  let gameBoard = [];
  let revealed = [];
  let gameOver = false;
  let firstClick = true;

  // Add Minesweeper styles
  const style = document.createElement('style');
  style.textContent = `
    .minesweeper-board {
      display: grid;
      gap: 2px;
      background: #ccc;
      padding: 2px;
      border-radius: 4px;
      margin: 20px auto;
      max-width: 600px;
    }
    .minesweeper-cell {
      aspect-ratio: 1;
      background: #e0e0e0;
      border: 2px solid #f5f5f5 #999 #999 #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      transition: background-color 0.2s;
    }
    .minesweeper-cell:hover {
      background: #d0d0d0;
    }
    .minesweeper-cell.revealed {
      background: #fff;
      border: 1px solid #ccc;
    }
    .minesweeper-cell.mine {
      background: #ff5252;
    }
    .minesweeper-cell.flagged {
      background: #ffd740;
    }
  `;
  document.head.appendChild(style);

  function createBoard() {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.innerHTML = '';
    gameBoard = Array(size).fill().map(() => Array(size).fill(0));
    revealed = Array(size).fill().map(() => Array(size).fill(false));

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < mines) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (gameBoard[y][x] !== -1) {
        gameBoard[y][x] = -1;
        minesPlaced++;
      }
    }

    // Calculate numbers
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (gameBoard[y][x] === -1) continue;
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < size && nx >= 0 && nx < size && gameBoard[ny][nx] === -1) {
              count++;
            }
          }
        }
        gameBoard[y][x] = count;
      }
    }

    // Create cells
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const cell = document.createElement('div');
        cell.className = 'minesweeper-cell';
        cell.dataset.x = x;
        cell.dataset.y = y;
        
        cell.onclick = () => handleClick(x, y);
        cell.oncontextmenu = (e) => {
          e.preventDefault();
          handleRightClick(x, y);
        };
        
        board.appendChild(cell);
      }
    }
  }

  function handleClick(x, y) {
    if (gameOver || revealed[y][x]) return;

    if (firstClick) {
      firstClick = false;
      // Ensure first click is not a mine
      if (gameBoard[y][x] === -1) {
        let newX, newY;
        do {
          newX = Math.floor(Math.random() * size);
          newY = Math.floor(Math.random() * size);
        } while (gameBoard[newY][newX] === -1 || (newX === x && newY === y));
        gameBoard[y][x] = 0;
        gameBoard[newY][newX] = -1;
      }
    }

    revealCell(x, y);
    checkWin();
  }

  function handleRightClick(x, y) {
    if (gameOver || revealed[y][x]) return;
    const cell = board.children[y * size + x];
    cell.classList.toggle('flagged');
  }

  function revealCell(x, y) {
    if (x < 0 || x >= size || y < 0 || y >= size || revealed[y][x]) return;
    
    revealed[y][x] = true;
    const cell = board.children[y * size + x];
    cell.classList.add('revealed');

    if (gameBoard[y][x] === -1) {
      cell.classList.add('mine');
      cell.textContent = '💣';
      gameOver = true;
      revealAll();
      statusEl.textContent = 'Game Over! 😞';
      return;
    }

    if (gameBoard[y][x] === 0) {
      cell.textContent = '';
      // Reveal adjacent cells
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          revealCell(x + dx, y + dy);
        }
      }
    } else {
      cell.textContent = gameBoard[y][x];
      cell.style.color = getNumberColor(gameBoard[y][x]);
    }
  }

  function getNumberColor(num) {
    const colors = ['blue', 'green', 'red', 'purple', 'maroon', 'turquoise', 'black', 'gray'];
    return colors[num - 1] || 'black';
  }

  function revealAll() {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (gameBoard[y][x] === -1) {
          const cell = board.children[y * size + x];
          cell.classList.add('revealed', 'mine');
          cell.textContent = '💣';
        }
      }
    }
  }

  function checkWin() {
    let unrevealed = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (!revealed[y][x] && gameBoard[y][x] !== -1) unrevealed++;
      }
    }
    if (unrevealed === 0) {
      gameOver = true;
      statusEl.textContent = 'You Win! 🎉';
    }
  }

  function setDifficulty(newSize, newMines) {
    size = newSize;
    mines = newMines;
    startGame();
  }

  difficultyBtns.forEach(btn => {
    btn.onclick = () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficulty(parseInt(btn.dataset.size), parseInt(btn.dataset.mines));
    };
  });

  function startGame() {
    gameOver = false;
    firstClick = true;
    statusEl.textContent = '';
    createBoard();
  }

  restartBtn.onclick = startGame;
  backBtn.onclick = showMainMenu;

  // Start with easy difficulty
  setDifficulty(8, 10);
}

/* Breakout Game */
function showBreakoutGame() {
  app.innerHTML = `
    <div class="game-container">
      <h2>🎯 Breakout</h2>
      <div class="difficulty-selector">
        <button class="difficulty-btn active" data-speed="5">Easy</button>
        <button class="difficulty-btn" data-speed="7">Medium</button>
        <button class="difficulty-btn" data-speed="9">Hard</button>
      </div>
      <canvas id="breakout-canvas" width="800" height="600" style="border:2px solid #000;"></canvas>
      <p id="breakout-score" style="font-weight:bold; font-size:18px; margin-top:10px;">Score: 0 | Lives: ❤️❤️❤️</p>
      <div class="game-buttons">
        <button id="restart" class="game-button">🔄 Restart</button>
        <button id="back" class="game-button">🏠 Back to Home</button>
      </div>
    </div>
  `;

  const canvas = document.getElementById('breakout-canvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('breakout-score');
  const backBtn = document.getElementById('back');
  const restartBtn = document.getElementById('restart');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');

  let score = 0;
  let lives = 3;
  let gameSpeed = 5;
  let animationId;

  const paddle = {
    width: 100,
    height: 10,
    x: canvas.width / 2 - 50,
    y: canvas.height - 30
  };

  const ball = {
    radius: 8,
    x: canvas.width / 2,
    y: canvas.height - 40,
    dx: gameSpeed,
    dy: -gameSpeed
  };

  const brickRowCount = 5;
  const brickColumnCount = 8;
  const brickWidth = 80;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 35;

  const bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }

  function setDifficulty(speed) {
    gameSpeed = speed;
    ball.dx = (ball.dx > 0 ? 1 : -1) * gameSpeed;
    ball.dy = (ball.dy > 0 ? 1 : -1) * gameSpeed;
  }

  difficultyBtns.forEach(btn => {
    btn.onclick = () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficulty(parseInt(btn.dataset.speed));
    };
  });

  function movePaddle(e) {
    const rect = canvas.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddle.x = relativeX - paddle.width / 2;
      if (paddle.x < 0) paddle.x = 0;
      if (paddle.x + paddle.width > canvas.width) {
        paddle.x = canvas.width - paddle.width;
      }
    }
  }

  function drawScore() {
    const hearts = '❤️'.repeat(lives);
    scoreEl.textContent = `Score: ${score} | Lives: ${hearts}`;
  }

  function drawBricks() {
    const colors = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'];
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;

          const gradient = ctx.createLinearGradient(brickX, brickY, brickX, brickY + brickHeight);
          gradient.addColorStop(0, colors[r % colors.length]);
          gradient.addColorStop(1, colors[(r + 1) % colors.length]);

          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.fillRect(brickX, brickY, brickWidth, brickHeight);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.strokeRect(brickX, brickY, brickWidth, brickHeight);
        }
      }
    }
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FF5722';
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    const gradient = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + paddle.height);
    gradient.addColorStop(0, '#2196F3');
    gradient.addColorStop(1, '#1976D2');

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
  }

  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          if (ball.x > b.x && ball.x < b.x + brickWidth && 
              ball.y > b.y && ball.y < b.y + brickHeight) {
            ball.dy = -ball.dy;
            b.status = 0;
            score++;
            drawScore();

            if (score === brickRowCount * brickColumnCount) {
              setTimeout(() => {
                alert('You Win! 🎉');
                startGame();
              }, 100);
            }
          }
        }
      }
    }
  }

  function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
      ball.dx = -ball.dx;
    }
    if (ball.y - ball.radius < 0) {
      ball.dy = -ball.dy;
    }

    if (ball.y + ball.radius > paddle.y && 
        ball.y - ball.radius < paddle.y + paddle.height &&
        ball.x + ball.radius > paddle.x && 
        ball.x - ball.radius < paddle.x + paddle.width) {
      const hitPoint = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
      const angle = hitPoint * (Math.PI / 3);
      const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
      
      ball.dx = speed * Math.sin(angle);
      ball.dy = -speed * Math.cos(angle);
      
      if (Math.abs(ball.dy) < 3) {
        ball.dy = (ball.dy > 0 ? 1 : -1) * 3;
      }
    }

    if (ball.y + ball.radius > canvas.height) {
      lives--;
      drawScore();
      if (lives === 0) {
        setTimeout(() => {
          alert('Game Over! 😞');
          startGame();
        }, 100);
      } else {
        resetBall();
      }
    }
  }

  function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 40;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * gameSpeed;
    ball.dy = -gameSpeed;
    paddle.x = (canvas.width - paddle.width) / 2;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }

    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    moveBall();

    animationId = requestAnimationFrame(draw);
  }

  function startGame() {
    score = 0;
    lives = 3;
    drawScore();
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r].status = 1;
      }
    }
    resetBall();
    if (animationId) cancelAnimationFrame(animationId);
    draw();
  }

  canvas.addEventListener('mousemove', movePaddle);
  restartBtn.onclick = startGame;
  backBtn.onclick = () => {
    cancelAnimationFrame(animationId);
    canvas.removeEventListener('mousemove', movePaddle);
    showMainMenu();
  };

  // Start the game immediately
  startGame();
}

/* Initialize the app */
showMainMenu();

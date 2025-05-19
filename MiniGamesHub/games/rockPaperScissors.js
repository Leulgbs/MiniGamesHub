export function init(container) {
    container.innerHTML = `
      <h2>Rock Paper Scissors</h2>
      <div class="rps-game">
        <div class="choices">
          <button data-choice="rock">🪨</button>
          <button data-choice="paper">📄</button>
          <button data-choice="scissors">✂️</button>
        </div>
        <div class="vs-section" id="vs-section" style="display: none;">
          <p>You: <span id="user-choice"></span></p>
          <p>Computer: <span id="computer-choice"></span></p>
          <h3 id="rps-result"></h3>
          <button id="play-again">Play Again</button>
          <button id="go-home">Back to Home</button>
        </div>
      </div>
    `;
  
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const resultText = container.querySelector('#rps-result');
    const userSpan = container.querySelector('#user-choice');
    const computerSpan = container.querySelector('#computer-choice');
    const vsSection = container.querySelector('#vs-section');
  
    document.querySelectorAll('.choices button').forEach(button => {
      button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * 3)];
  
        const result = getResult(userChoice, computerChoice);
        userSpan.textContent = emojis[userChoice];
        computerSpan.textContent = emojis[computerChoice];
        resultText.textContent = result;
  
        vsSection.style.display = 'block';
        container.querySelector('.choices').style.display = 'none';
      });
    });
  
    const playAgainBtn = container.querySelector('#play-again');
  
    playAgainBtn.onclick = () => {
      vsSection.style.display = 'none';
      container.querySelector('.choices').style.display = 'flex';  // <--- Important fix here
      resultText.textContent = '';
    };
  
    container.querySelector('#go-home').onclick = () => location.reload();
  }
  
  function getResult(user, computer) {
    if (user === computer) return "It's a draw!";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) return "You win!";
    return "You lose!";
  }
  
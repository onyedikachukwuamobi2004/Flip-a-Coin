function flipCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('resultText');

    // Start flip animation
    coin.classList.add('flip');

    const guess = 'heads'

    setTimeout(() => {
      const randomNumber = Math.random();
      const result = randomNumber < 0.5 ? 'heads' : 'tails';

      coin.textContent = result === 'heads' ? 'Heads' : 'Tails';
      resultText.textContent = guess === result
        ? `It's ${result}!`
        : `It's ${result}.`

      coin.classList.remove('flip');
    }, 600);
}
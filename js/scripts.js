document.addEventListener('DOMContentLoaded', () => {
   const sortSelect = document.getElementById('sort');
   const gameLibrary = document.getElementById('game-library');
   
   sortSelect.addEventListener('change', () => {
       let sortedCards = Array.from(gameLibrary.getElementsByClassName('game-card'));
       let sortOrder = sortSelect.value;
       
       sortedCards.sort((a, b) => {
           let gameA = a.querySelector('p').innerText.toLowerCase();
           let gameB = b.querySelector('p').innerText.toLowerCase();
           
           if (sortOrder === 'alphabetical') {
               return gameA.localeCompare(gameB);
           } else {
               return gameB.localeCompare(gameA);
           }
       });
       
       // Очистка текущей библиотеки и добавление отсортированных карточек
       gameLibrary.innerHTML = '';
       sortedCards.forEach(card => gameLibrary.appendChild(card));
   });
});

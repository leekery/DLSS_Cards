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

// Функция для создания блока кода

function createCodeBlock(language, code) {
    const block = document.createElement('div');
    block.className = 'code-block';
    
    const langLabel = document.createElement('div');
    langLabel.className = 'language';
    langLabel.innerText = language;
    
    const pre = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.className = `language-${language}`;
    codeElement.innerHTML = code;
    
    pre.appendChild(codeElement);
    block.appendChild(langLabel);
    block.appendChild(pre);
    
    document.getElementById('content').appendChild(block);
    Prism.highlightElement(codeElement);
}

function createTextBlock(text) {
    const block = document.createElement('div');
    block.className = 'text-block';
    block.innerText = text;
    
    document.getElementById('content').appendChild(block);
}

createTextBlock('This is a simple C++ program that outputs "Hello, World!" to the console.');

createCodeBlock('cpp', `int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(3, 4);
    std::cout << "Sum: " << sum << std::endl;
    return 0;
}`);
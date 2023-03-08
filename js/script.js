const cards = document.querySelectorAll('.card');
const discardButton = document.querySelector('#discard');
const restartButton = document.querySelector('#restart');
const opponentButton = document.querySelector('#opponent');
const myCardsButton = document.querySelector('#my-cards');


const initialImages = [];

cards.forEach(card => {
    // Save initial background image
    const initialImage = card.style.backgroundImage;
    initialImages.push(initialImage);

    card.addEventListener('click', () => {
        if (!card.classList.contains('discarded')) {
            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
            } else {
                card.classList.add('selected');
            }
        }
    });
});

discardButton.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(card => {
        card.style.backgroundImage = 'url(/img/back.png)';
        backgroundImage = 'background-size: contain;'

        card.classList.remove('selected');
        card.classList.add('discarded');
    });
});

restartButton.addEventListener('click', () => {
    cards.forEach((card, index) => {
        card.style.backgroundImage = initialImages[index];
        card.classList.remove('selected', 'opponent', 'discarded');
    });
});

opponentButton.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(card => {
        card.classList.remove('selected');
        card.classList.add('opponent');
    });
});

myCardsButton.addEventListener('click', () => {
    const selectedOpponentCards = document.querySelectorAll('.card.selected');
    selectedOpponentCards.forEach(card => {
        card.classList.remove('opponent', 'selected');
    });
});

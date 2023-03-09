const cards = document.querySelectorAll('.card');
const discardButton = document.querySelector('#discard');
const restartButton = document.querySelector('#restart');
const opponentButton = document.querySelector('#opponent');
const opponentButton1 = document.querySelector('#opponent1');
const opponentButton2 = document.querySelector('#opponent2');
const myCardsButton = document.querySelector('#my-cards');

// add event listener for opponent count radio buttons
document.querySelectorAll('input[name="opponent-count"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        var count = this.value;
        var opponent = document.getElementById('opponent');
        var opponent1 = document.getElementById('opponent1');
        var opponent2 = document.getElementById('opponent2');

        // hide all opponent buttons
        opponent.style.display = 'none';
        opponent1.style.display = 'none';
        opponent2.style.display = 'none';

        // show the appropriate number of opponent buttons
        if (count == 1) {
            opponent.style.display = 'inline-block';
        } else if (count == 2) {
            opponent.style.display = 'inline-block';
            opponent1.style.display = 'inline-block';
        } else if (count == 3) {
            opponent.style.display = 'inline-block';
            opponent1.style.display = 'inline-block';
            opponent2.style.display = 'inline-block';
        }
    });
});

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
        card.classList.remove('selected', 'opponent', 'opponent1', 'opponent2', 'discarded', 'mycard');
        opponent.style.display = 'none';
        opponent1.style.display = 'none';
        opponent2.style.display = 'none';
    });
});

opponentButton.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(card => {
        card.classList.remove('selected', 'opponent1', 'opponent2');
        card.classList.add('opponent');
    });
});

opponentButton1.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(card => {
        card.classList.remove('selected', 'opponent', 'opponent2');
        card.classList.add('opponent1');
    });
});

opponentButton2.addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card.selected');
    selectedCards.forEach(card => {
        card.classList.remove('selected', 'opponent', 'opponent1');
        card.classList.add('opponent2');
    });
});

myCardsButton.addEventListener('click', () => {
    const selectedOpponentCards = document.querySelectorAll('.card.selected');
    selectedOpponentCards.forEach(card => {
        card.classList.remove('opponent', 'opponent1', 'opponent2', 'selected');
        card.classList.add('mycard');
    });
});

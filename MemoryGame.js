function startCountdown(seconds) {
    let counter = seconds;

    var interval = setInterval(() => {

        counter--;
        document.getElementById('timer').innerHTML = "0:" + seconds--;

        if (counter >= 10) {
            document.getElementById("timer").innerHTML = "0:" + counter;
        }

        if (counter <= 9 && counter > 0) {
            document.getElementById("timer").innerHTML = "0:0" + counter;
        };
        if (counter === 0) {

            clearInterval(interval);
            document.getElementById("timer").innerHTML = "GAME OVER!";

        };
    }, 1000);
};


// document.getElementById("timer").addEventListener("onclick", startCountdown(29));

if (document.getElementById("timer") === "GAME OVER!") {
    alert("Sorry, you lost!");
};

/*

FUNCTION FROM ADDRESS BOOK LAB THAT WILL GRAB WINNER 
function display() {

    let x = document.createElement("ul");

    x.setAttribute("class", "contact-list");

    let t = document.createElement("li");

    let t1 = document.createTextNode("Name: " + document.getElementById('name').value);

    t.appendChild(t1);

   



    x.appendChild(t);};}
    */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
window.onload = function modalLoad() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    startCountdown(30);
    startGame();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal() {
    $(document).ready(function() {
        $("#myModal").modal();
    });
}

function closeModal() {
    $(document).ready(function() {
        $("#myModal").modal('hide');
    });
}

const cards = document.querySelectorAll('.memory-card');


function startGame() {
    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        
        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
    }

    function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();

    }

    function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

    }

    function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 700);
    }

    function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    }

    cards.forEach(card => card.classList.remove('flip'));

    (function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
    
};

startGame();
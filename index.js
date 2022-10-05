//  -- Home Score --


let homeScoreEl = document.getElementById('home-score');
let homeScore = 0;

function increaseHomeScore() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;

}

function increaseHomeScore2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;

}

function increaseHomeScore3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;

}

// -- Guest Score --

let guestScoreEl = document.getElementById('guest-score');
let guestScore = 0;

function increaseGuestScore1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScore2(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScore3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

// RESET SCORE


function resetScore () {
    guestScoreEl.textContent = 0;
    homeScoreEl.textContent = 0;
}

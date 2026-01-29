let homeScore = document.getElementById("homeScore")
let guestScore =document.getElementById("guestScore")
let homeScoreVal = 0
let guestScoreVal = 0

function newGame(){
    homeScore.innerText = 0
    guestScore.innerText = 0
    homeScoreVal = 0
    guestScoreVal = 0
}

// Home add buttons
function addHome1() {
    homeScoreVal += 1
    homeScore.textContent = homeScoreVal
}
function addHome2() {
    homeScoreVal += 2
    homeScore.textContent = homeScoreVal
}
function addHome3() {
    homeScoreVal += 3
    homeScore.textContent = homeScoreVal
}

// Guest add buttons
function addGuest1() {
    guestScoreVal += 1
    guestScore.textContent = guestScoreVal
}
function addGuest2() {
    guestScoreVal += 2
    guestScore.textContent = guestScoreVal
}
function addGuest3() {
    guestScoreVal += 3
    guestScore.textContent = guestScoreVal
}

newGame()

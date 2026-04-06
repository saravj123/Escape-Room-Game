let level = 1;

function showLevel() {

    let text = document.getElementById("text");
    let choices = document.getElementById("choices");

    choices.innerHTML = "";
    document.getElementById("answer").value = "";

    if (level == 1) {
        text.textContent = "A locked box needs a 3-digit code. Hint: 123 reversed.";
    }

    else if (level == 2) {
        text.textContent = "Riddle: What has keys but can't open locks?";
        
        choices.innerHTML = `
        <button onclick="checkChoice('piano')">Piano</button>
        <button onclick="checkChoice('door')">Door</button>
        `;
    }

    else if (level == 3) {
        text.textContent = "Click the buttons in the correct order: Red → Blue → Green";

        choices.innerHTML = `
        <button onclick="pattern('red')">Red</button>
        <button onclick="pattern('blue')">Blue</button>
        <button onclick="pattern('green')">Green</button>
        `;
    }

    else if (level == 4) {
        text.textContent = "You found the exit! Do you leave?";

        choices.innerHTML = `
        <button onclick="endGame(true)">Leave</button>
        <button onclick="endGame(false)">Stay</button>
        `;
    }
}

function submitAnswer() {
    let ans = document.getElementById("answer").value;

    if (level == 1 && ans == "321") {
        level++;
        showLevel();
    }
}

function checkChoice(choice) {
    if (choice == "piano") {
        level++;
        showLevel();
    }
}

let sequence = [];

function pattern(color) {
    sequence.push(color);

    if (sequence.length == 3) {
        if (
            sequence[0] == "red" &&
            sequence[1] == "blue" &&
            sequence[2] == "green"
        ) {
            level++;
            sequence = [];
            showLevel();
        } else {
            sequence = [];
            alert("Wrong pattern!");
        }
    }
}

function endGame(win) {
    let text = document.getElementById("text");

    if (win) {
        text.textContent = "You escaped!";
    } else {
        text.textContent = "You stayed and were locked forever!";
    }

    document.getElementById("choices").innerHTML = "";
}

showLevel();

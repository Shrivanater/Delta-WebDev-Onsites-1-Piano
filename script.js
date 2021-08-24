let whiteKeys = document.querySelectorAll(".whiteKey");
let blackKeys = document.querySelectorAll(".blackKey");

whiteKeys.forEach((key) => {
    key.addEventListener('click', event => {
        playWhiteNote(key);
    })
});

blackKeys.forEach((key) => {
    key.addEventListener('click', event => {
        playBlackNote(key);
    })
});

let playWhiteNote = (key) => {
    var note = document.getElementById(`key${key.id}`);
    key.style.backgroundColor = "#f2f2f2"; 
    note.currentTime = 0;
    note.play();
    window.setTimeout(function() {key.style.backgroundColor = "white";}, 600); 
}

let playBlackNote = (key) => {
    var note = document.getElementById(`key${key.id}`);
    key.style.backgroundColor = "#333333"; 
    note.currentTime = 0;
    note.play();
    window.setTimeout(function() {key.style.backgroundColor = "black";}, 600); 
}

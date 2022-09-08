const notes = {
    a: { audio: new Audio("assets/audio/notes/a.wav"), playing: false },
    down: { audio: new Audio("assets/audio/notes/down.wav"), playing: false },
    right: { audio: new Audio("assets/audio/notes/right.wav"), playing: false },
    left: { audio: new Audio("assets/audio/notes/left.wav"), playing: false },
    up: { audio: new Audio("assets/audio/notes/up.wav"), playing: false }
};

const songs = {
    "Zelda's Lullaby": { notes: ["left", "up", "right", "left", "up", "right"], song: new Audio("assets/audio/songs/zelda's-lullaby.mp3") },
    "Epona's Song": { notes: ["up", "left", "right", "up", "left", "right"], song: new Audio("assets/audio/songs/epona's-song.mp3") },
    "Saria's Song": { notes: ["down", "right", "left", "down", "right", "left"], song: new Audio("assets/audio/songs/saria's-song.mp3") },
    "Song of Time": { notes: ["right", "a", "down", "right", "a", "down"], song: new Audio("assets/audio/songs/song-of-time.mp3") },
    "Inverted Song of Time": { notes: ["down", "a", "right", "down", "a", "right"], song: new Audio("assets/audio/songs/inverted-song-of-time.mp3") },
    "Song of Double Time": { notes: ["right", "right", "a", "a", "down", "down"], song: new Audio("assets/audio/songs/song-of-double-time.mp3") },
    "Sun's Song": { notes: ["right", "down", "up", "right", "down", "up"], song: new Audio("assets/audio/songs/sun's-song.mp3") },
    "Song of Storms": { notes: ["a", "down", "up", "a", "down", "up"], song: new Audio("assets/audio/songs/song-of-storms.mp3") },
    "Song of Soaring": { notes: ["down", "left", "up", "down", "left", "up"], song: new Audio("assets/audio/songs/song-of-soaring.mp3") },
    "Song of Healing": { notes: ["left", "right", "down", "left", "right", "down"], song: new Audio("assets/audio/songs/song-of-healing.mp3") },
    "Minuet of Forest": { notes: ["a", "up", "left", "right", "left", "right"], song: new Audio("assets/audio/songs/minuet-of-forest.mp3") },
    "Bolero of Fire": { notes: ["down", "a", "down", "a", "right", "down", "right", "down"], song: new Audio("assets/audio/songs/bolero-of-fire.mp3") },
    "Serenade of Water": { notes: ["a", "down", "right", "right", "left"], song: new Audio("assets/audio/songs/serenade-of-water.mp3") },
    "Nocturne of Shadow": { notes: ["left", "right", "right", "a", "left", "right", "down"], song: new Audio("assets/audio/songs/nocturne-of-shadow.mp3") },
    "Requiem of Spirit": { notes: ["a", "down", "a", "right", "down", "a"], song: new Audio("assets/audio/songs/requiem-of-spirit.mp3") },
    "Prelude of Light": { notes: ["up", "right", "up", "right", "left", "up"], song: new Audio("assets/audio/songs/prelude-of-light.mp3") },
    "Sonata of Awakening": { notes: ["up", "left", "up", "left", "a", "right", "a"], song: new Audio("assets/audio/songs/sonata-of-awakening.mp3") },
    "Goron Lullaby": { notes: ["a", "right", "left", "a", "right", "left", "right", "a"], song: new Audio("assets/audio/songs/goron-lullaby.mp3") },
    "New Wave Bossa Nova": { notes: ["left", "up", "left", "right", "down", "left", "right"], song: new Audio("assets/audio/songs/new-wave-bossa-nova.mp3") },
    "Elegy of Emptiness": { notes: ["right", "left", "right", "down", "right", "up", "left"], song: new Audio("assets/audio/songs/elegy-of-emptiness.mp3") },
    "Oath to Order": { notes: ["right", "down", "a", "down", "right", "up"], song: new Audio("assets/audio/songs/oath-to-order.mp3") }
};

var noteStack = [];

var correctSong = new Audio("assets/audio/Correct.wav");

var pressed = false;
var songPlaying = false;
var currentKey;

function keyDown(e) {
    if (e.key != "r" && !e.ctrlKey) e.preventDefault();
    if (songPlaying) return;
    switch (e.key) {
        case "a":
            currentKey = "a";
            playNote(currentKey);
            notes[currentKey].playing = true;
            pressed = true;
            break;
        case "ArrowDown":
            currentKey = "down";
            playNote(currentKey);
            notes[currentKey].playing = true;
            pressed = true;
            break;
        case "ArrowRight":
            currentKey = "right";
            playNote(currentKey);
            notes[currentKey].playing = true;
            pressed = true;
            break;
        case "ArrowLeft":
            currentKey = "left";
            playNote(currentKey);
            notes[currentKey].playing = true;
            pressed = true;
            break;
        case "ArrowUp":
            currentKey = "up";
            playNote(currentKey);
            notes[currentKey].playing = true;
            pressed = true;
            break;
        default:
            break;
    }
}

function keyUp(e) {
    if (e.key === "a" || e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (songPlaying) return;
        pressed = false;
        notes[e.key.toLowerCase().replace("arrow", "")].playing = false;
    }
}

function playNote(key) {
    if (songPlaying) return;
    if (!pressed) {
        noteStack.push(key);
        checkSongs();
    }
    if (!notes[key].playing) {
        notes[key].audio.load();
        notes[key].audio.play();
        setTimeout(() => {
            notes[key].playing = false;
        }, 1000);
    }
}

function checkSongs() {
    if (songPlaying) return;
    for (i in songs) {
        if (JSON.stringify(noteStack.slice(songs[i].notes.length * -1)) == JSON.stringify(songs[i].notes)) songPlayed(i);
    }
}

function songPlayed(song) {
    noteStack = [];
    songPlaying = true;
    document.getElementById("songTitle").innerHTML = "You played " + (song.includes("'s") ? "" : "the") + " " + song + "!";
    correctSong.play();
    setTimeout(() => {
        songs[song].song.play();
        setTimeout(() => {
            songPlaying = false;
            document.getElementById("songTitle").innerHTML = "";
        }, (songs[song].song.duration * 1000));
    }, 1000);
}
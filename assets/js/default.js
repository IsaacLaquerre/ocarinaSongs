const notes = {
    a: { audio: new Audio("assets/audio/notes/a.wav"), pressed: false, playing: false },
    down: { audio: new Audio("assets/audio/notes/down.wav"), pressed: false, playing: false },
    right: { audio: new Audio("assets/audio/notes/right.wav"), pressed: false, playing: false },
    left: { audio: new Audio("assets/audio/notes/left.wav"), pressed: false, playing: false },
    up: { audio: new Audio("assets/audio/notes/up.wav"), pressed: false, playing: false }
};

const songs = {
    "Zelda's Lullaby": {
        notes: ["left", "up", "right", "left", "up", "right"],
        song: new Audio("assets/audio/songs/zelda's-lullaby.mp3"),
        animation: [
            { note: "left", time: 300 }, { note: "up", time: 800 }, { note: "right", time: 400 }, { note: "left", time: 1200 }, { note: "up", time: 800 }, { note: "right", time: 400 }
        ]
    },
    "Epona's Song": {
        notes: ["up", "left", "right", "up", "left", "right"],
        song: new Audio("assets/audio/songs/epona's-song.mp3"),
        animation: [
            { note: "up", time: 600 }, { note: "left", time: 300 }, { note: "right", time: 300 }, { note: "up", time: 1100 }, { note: "left", time: 300 }, { note: "right", time: 300 }
        ]
    },
    "Saria's Song": {
        notes: ["down", "right", "left", "down", "right", "left"],
        song: new Audio("assets/audio/songs/saria's-song.mp3"),
        animation: [
            { note: "down", time: 400 }, { note: "right", time: 250 }, { note: "left", time: 250 }, { note: "down", time: 450 }, { note: "right", time: 250 }, { note: "left", time: 250 },
        ]
    },
    "Song of Time": {
        notes: ["right", "a", "down", "right", "a", "down"],
        song: new Audio("assets/audio/songs/song-of-time.mp3"),
        animation: [
            { note: "down", time: 500 }, { note: "a", time: 600 }, { note: "right", time: 1000 }, { note: "down", time: 600 }, { note: "a", time: 600 }, { note: "right", time: 1000 },
        ]
    },
    "Inverted Song of Time": {
        notes: ["down", "a", "right", "down", "a", "right"],
        song: new Audio("assets/audio/songs/inverted-song-of-time.mp3"),
        animation: [
            { note: "down", time: 600 }, { note: "a", time: 550 }, { note: "right", time: 900 }, { note: "down", time: 600 }, { note: "a", time: 600 }, { note: "right", time: 900 },
        ]
    },
    "Song of Double Time": {
        notes: ["right", "right", "a", "a", "down", "down"],
        song: new Audio("assets/audio/songs/song-of-double-time.mp3"),
        animation: [
            { note: "right", time: 400 }, { note: "right", time: 250 }, { note: "a", time: 250 }, { note: "a", time: 250 }, { note: "down", time: 250 }, { note: "down", time: 250 },
        ]
    },
    "Sun's Song": {
        notes: ["right", "down", "up", "right", "down", "up"],
        song: new Audio("assets/audio/songs/sun's-song.mp3"),
        animation: [
            { note: "right", time: 600 }, { note: "down", time: 250 }, { note: "up", time: 200 }, { note: "right", time: 600 }, { note: "down", time: 250 }, { note: "up", time: 200 },
        ]
    },
    "Song of Storms": {
        notes: ["a", "down", "up", "a", "down", "up"],
        song: new Audio("assets/audio/songs/song-of-storms.mp3"),
        animation: [
            { note: "a", time: 450 }, { note: "down", time: 200 }, { note: "up", time: 150 }, { note: "a", time: 750 }, { note: "down", time: 200 }, { note: "up", time: 150 }
        ]
    },
    "Song of Soaring": {
        notes: ["down", "left", "up", "down", "left", "up"],
        song: new Audio("assets/audio/songs/song-of-soaring.mp3"),
        animation: [
            { note: "down", time: 600 }, { note: "left", time: 300 }, { note: "up", time: 300 }, { note: "down", time: 600 }, { note: "left", time: 300 }, { note: "up", time: 300 }
        ]
    },
    "Song of Healing": {
        notes: ["left", "right", "down", "left", "right", "down"],
        song: new Audio("assets/audio/songs/song-of-healing.mp3"),
        animation: [
            { note: "left", time: 300 }, { note: "right", time: 600 }, { note: "down", time: 600 }, { note: "left", time: 600 }, { note: "right", time: 600 }, { note: "down", time: 600 }
        ]
    },
    "Minuet of Forest": {
        notes: ["a", "up", "left", "right", "left", "right"],
        song: new Audio("assets/audio/songs/minuet-of-forest.mp3"),
        animation: [
            { note: "a", time: 0 }, { note: "up", time: 0 }, { note: "left", time: 0 }, { note: "right", time: 0 }, { note: "left", time: 0 }, { note: "right", time: 0 }
        ]
    },
    "Bolero of Fire": {
        notes: ["down", "a", "down", "a", "right", "down", "right", "down"],
        song: new Audio("assets/audio/songs/bolero-of-fire.mp3"),
        animation: [
            { note: "down", time: 0 }, { note: "a", time: 0 }, { note: "down", time: 0 }, { note: "a", time: 0 }, { note: "right", time: 0 }, { note: "down", time: 0 }, { note: "right", time: 0 }, { note: "down", time: 0 }
        ]
    },
    "Serenade of Water": {
        notes: ["a", "down", "right", "right", "left"],
        song: new Audio("assets/audio/songs/serenade-of-water.mp3"),
        animation: [
            { note: "a", time: 0 }, { note: "down", time: 0 }, { note: "right", time: 0 }, { note: "right", time: 0 }, { note: "left", time: 0 }
        ]
    },
    "Nocturne of Shadow": {
        notes: ["left", "right", "right", "a", "left", "right", "down"],
        song: new Audio("assets/audio/songs/nocturne-of-shadow.mp3"),
        animation: [
            { note: "left", time: 0 }, { note: "right", time: 0 }, { note: "right", time: 0 }, { note: "a", time: 0 }, { note: "left", time: 0 }, { note: "right", time: 0 }, { note: "down", time: 0 }
        ]
    },
    "Requiem of Spirit": {
        notes: ["a", "down", "a", "right", "down", "a"],
        song: new Audio("assets/audio/songs/requiem-of-spirit.mp3"),
        animation: [
            { note: "a", time: 0 }, { note: "down", time: 0 }, { note: "a", time: 0 }, { note: "right", time: 0 }, { note: "down", time: 0 }, { note: "a", time: 0 }
        ]
    },
    "Prelude of Light": {
        notes: ["up", "right", "up", "right", "left", "up"],
        song: new Audio("assets/audio/songs/prelude-of-light.mp3"),
        animation: [
            { note: "up", time: 0 }, { note: "right", time: 0 }, { note: "up", time: 0 }, { note: "right", time: 0 }, { note: "left", time: 0 }, { note: "up", time: 0 }
        ]
    },
    "Sonata of Awakening": {
        notes: ["up", "left", "up", "left", "a", "right", "a"],
        song: new Audio("assets/audio/songs/sonata-of-awakening.mp3"),
        animation: [
            { note: "up", time: 600 }, { note: "left", time: 300 }, { note: "up", time: 300 }, { note: "left", time: 300 }, { note: "a", time: 700 }, { note: "right", time: 600 }, { note: "a", time: 1300 }
        ]
    },
    "Goron Lullaby": {
        notes: ["a", "right", "left", "a", "right", "left", "right", "a"],
        song: new Audio("assets/audio/songs/goron-lullaby.mp3"),
        animation: [
            { note: "a", time: 600 }, { note: "right", time: 600 }, { note: "left", time: 600 }, { note: "a", time: 800 }, { note: "right", time: 600 }, { note: "left", time: 600 }, { note: "right", time: 600 }, { note: "a", time: 600 }
        ]
    },
    "New Wave Bossa Nova": {
        notes: ["left", "up", "left", "right", "down", "left", "right"],
        song: new Audio("assets/audio/songs/new-wave-bossa-nova.mp3"),
        animation: [
            { note: "left", time: 600 }, { note: "up", time: 1000 }, { note: "left", time: 250 }, { note: "right", time: 200 }, { note: "down", time: 1200 }, { note: "left", time: 300 }, { note: "right", time: 200 }
        ]
    },
    "Elegy of Emptiness": {
        notes: ["right", "left", "right", "down", "right", "up", "left"],
        song: new Audio("assets/audio/songs/elegy-of-emptiness.mp3"),
        animation: [
            { note: "right", time: 300 }, { note: "left", time: 1400 }, { note: "right", time: 850 }, { note: "down", time: 600 }, { note: "right", time: 400 }, { note: "up", time: 400 }, { note: "left", time: 650 }
        ]
    },
    "Oath to Order": {
        notes: ["right", "down", "a", "down", "right", "up"],
        song: new Audio("assets/audio/songs/oath-to-order.mp3"),
        animation: [
            { note: "right", time: 600 }, { note: "down", time: 1500 }, { note: "a", time: 800 }, { note: "down", time: 800 }, { note: "right", time: 800 }, { note: "up", time: 700 },
        ]
    }
};

var noteStack = [];

var correctSong = new Audio("assets/audio/sfx/Correct.wav");
var elegyStatue = new Audio("assets/audio/sfx/Elegy of Emptiness Statue Sound Effect.wav");
var maskSalesmanLaugh = new Audio("assets/audio/sfx/Happy Mask Salesman Laugh.wav");
var dialogueSelect = new Audio("assets/audio/sfx/DialogueSelect.wav");
var dialogueDone = new Audio("assets/audio/sfx/DialogueDone.wav");
var dawnOfANewDay = new Audio("assets/audio/sfx/DawnOfANewDay.mp3");
var invertedSongOfHealing = new Audio("assets/audio/songs/inverted-song-of-healing.mp3");

var statueSpawned = false;
var waitingContinue = false;

var songPlaying = false;
var currentKey;

var doNext = () => {};

function keyDown(e) {
    if (e.key === "a" && waitingContinue) {
        dialogueSelect.play();
        waitingContinue = false;
        return doNext();
    }
    if (e.key != "r" && !e.ctrlKey) e.preventDefault();
    if (songPlaying) return;
    switch (e.key) {
        case "a":
            currentKey = "a";
            playNote(currentKey);
            notes[currentKey].playing = true;
            notes[currentKey].pressed = true;
            break;
        case "ArrowDown":
            currentKey = "down";
            playNote(currentKey);
            notes[currentKey].playing = true;
            notes[currentKey].pressed = true;
            break;
        case "ArrowRight":
            currentKey = "right";
            playNote(currentKey);
            notes[currentKey].playing = true;
            notes[currentKey].pressed = true;
            break;
        case "ArrowLeft":
            currentKey = "left";
            playNote(currentKey);
            notes[currentKey].playing = true;
            notes[currentKey].pressed = true;
            break;
        case "ArrowUp":
            currentKey = "up";
            playNote(currentKey);
            notes[currentKey].playing = true;
            notes[currentKey].pressed = true;
            break;
        default:
            break;
    }
}

function keyUp(e) {
    if (e.key === "a" || e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (songPlaying) return;
        notes[e.key.toLowerCase().replace("arrow", "")].pressed = false;
        notes[e.key.toLowerCase().replace("arrow", "")].playing = false;
    }
}

function playNote(key) {
    if (songPlaying) return;
    if (!notes[key].playing) {
        if (!notes[key].pressed) {
            notes[key].audio.load();
            notes[key].audio.play();
            noteStack.push(key);
            checkSongs();
            setTimeout(() => {
                notes[key].playing = false;
            }, 1000);
        }
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
    correctSong.play();
    setTimeout(() => {
        document.getElementById("partition").style.opacity = 1;
        songs[song].song.play();
        animate(song);
        setTimeout(() => {
            if (song === "Elegy of Emptiness") {
                maskSalesmanLaugh.play();
                setTimeout(() => {
                    spawnStatue();
                }, 750);
            } else if (song === "Song of Healing") {
                if (statueSpawned) return youShouldntHaveDoneThat();
            }
            songPlaying = false;
            document.getElementById("songTitle").innerHTML = "";
            document.querySelectorAll(".note").forEach(el => el.remove());
            document.getElementById("partition").style.opacity = 0;
        }, (songs[song].song.duration * 1000));
    }, 1000);
}

async function animate(song) {
    var animationFrames = songs[song].animation;
    for (i in animationFrames) {
        await sleep(animationFrames[i].time).then(() => {
            var note = document.createElement("div");
            note.classList.add("note", animationFrames[i].note);
            document.getElementById("partition").appendChild(note);
        });
    }
    setTimeout(() => {
        document.getElementById("songTitle").innerHTML = "<h3 style='font-size: 21pt;'>You played " + (song.includes("'s") ? "" : "the") + " <h3 style='color: var(--songTitle); text-shadow: .5px .5px var(--songTitleOutline);'>" + song + "</h3>.</h3>";
    }, 1500);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function spawnStatue() {
    elegyStatue.play();
    var img = document.createElement("img");
    img.src = "assets/images/linkStatue.png";
    img.width = 150;
    img.id = "linkStatue";
    img.style.position = "absolute";
    img.style.bottom = "0";
    img.style.right = "30%";
    img.style.transform = "translateY(1px);";
    img.style.opacity = 0;
    document.body.appendChild(img);
    var opacity = 0;
    var fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
            statueSpawned = true;
        }
        opacity += 0.001;
        img.style.opacity = opacity;
    }, 0.05);
}

function youShouldntHaveDoneThat() {
    document.getElementById("songTitle").innerHTML = "";
    document.querySelectorAll(".note").forEach(el => el.remove());
    document.querySelector("#partitionLines").remove();
    document.querySelector("#gkey").remove();
    var text = document.createElement("div");
    text.id = "dialogueBox";
    text.style.width = "100%";
    var h3 = document.createElement("h3");
    h3.id = "dialogueText";
    text.appendChild(h3);
    document.getElementById("partition").appendChild(text);
    var sentence = "You shouldn't have done that...";
    var sentenceIndex = 0;
    var dialogueInterval = setInterval(() => {
        if (sentenceIndex >= (sentence.length - 1)) {
            clearInterval(dialogueInterval);
            setTimeout(() => {
                awaitNext();
                doNext = () => {
                    var overlay = document.createElement("div");
                    overlay.id = "overlay";
                    overlay.style.opacity = 0;
                    document.body.appendChild(overlay);
                    var h3 = document.getElementById("dialogueText");
                    h3.innerHTML = "";
                    document.getElementById("dialogueSquare").remove();
                    var opacity = 0;
                    var fadeIn = setInterval(() => {
                        if (opacity >= 1) {
                            clearInterval(fadeIn);
                            setTimeout(() => {
                                maskSalesmanLaugh.play();
                                waitingContinue = false;
                                setTimeout(() => youveMetWithATerribleFate(), 1500);
                            }, 1000);
                        }
                        opacity += 0.005;
                        overlay.style.opacity = opacity;
                    }, 0.05);
                };
            }, 100);
        }
        if (sentence.split("")[sentenceIndex] === " ") {
            h3.innerHTML += " " + sentence.split("")[sentenceIndex + 1];
            sentenceIndex = sentenceIndex + 2;
        } else {
            h3.innerHTML += sentence.split("")[sentenceIndex];
            sentenceIndex++;
        }
    }, 60);
}

function youveMetWithATerribleFate() {
    var h3 = document.getElementById("dialogueText");
    var sentence = "You've met with a terrible fate, haven't you?";
    var sentenceIndex = 0;
    var dialogueInterval = setInterval(() => {
        if (sentenceIndex >= (sentence.length - 1)) {
            clearInterval(dialogueInterval);
            setTimeout(() => {
                awaitNext();
                doNext = () => {
                    setTimeout(() => {
                        var overlay = document.getElementById("overlay");
                        document.getElementById("dialogueBox").remove();
                        overlay.animate([{ backgroundColor: "black" }, { backgroundColor: "#9F9F9F" }], {
                            duration: 1000,
                            iterations: 1
                        });
                        overlay.style.backgroundColor = "#9F9F9F";
                        document.body.style.backgroundImage = "none";
                        document.getElementById("partition").remove();
                        if (document.getElementById("linkStatue")) document.getElementById("linkStatue").remove();
                        setTimeout(() => {
                            var video = document.createElement("video");
                            video.src = "assets/video/Moon Crashing.mp4";
                            video.style.height = "100%";
                            video.style.position = "absolute";
                            video.style.top = "0";
                            video.style.left = "50%";
                            video.style.transform = "translateX(-50%)";
                            video.style.zIndex = "101";
                            document.body.appendChild(video);
                            video.play();
                            document.body.style.backgroundColor = "black";
                            overlay.remove();
                            document.body.style.backgroundColor = "white";
                            video.addEventListener("ended", () => {
                                dawnOfANewDayScreen();
                                video.remove();
                            });
                        }, 1000);
                    }, 500);
                };
            }, 100);
        }
        if (sentence.split("")[sentenceIndex] === " ") {
            h3.innerHTML += " " + sentence.split("")[sentenceIndex + 1];
            sentenceIndex = sentenceIndex + 2;
        } else {
            h3.innerHTML += sentence.split("")[sentenceIndex];
            sentenceIndex++;
        }
    }, 60);
}

function dawnOfANewDayScreen() {
    dawnOfANewDay.play();
    var img = document.createElement("img");
    img.style.height = "100%";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";
    img.style.zIndex = "101";
    img.style.opacity = 0;
    img.src = "assets/images/DawnOfANewDay.png";
    document.body.appendChild(img);
    var opacity = 0;
    var fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
            setTimeout(() => {
                var fadeOut = setInterval(() => {
                    if (opacity <= 0) {
                        clearInterval(fadeOut);
                        window.location.reload();
                    }
                    opacity -= 0.005;
                    img.style.opacity = opacity;
                }, 0.05);
            }, 2000);
        }
        opacity += 0.005;
        img.style.opacity = opacity;
    }, 0.05);
}

function awaitNext() {
    var square = document.createElement("div");
    square.style.width = "25px";
    square.style.height = "25px";
    square.style.backgroundColor = "#003A96";
    square.style.boxShadow = "0 0 1px 1px #001B46";
    square.style.position = "absolute";
    square.style.bottom = "0";
    square.style.left = "50%";
    square.style.transform = "translate(-50%, 12.5px)";
    square.style.animation = "Glow 2s infinite";
    square.id = "dialogueSquare";
    document.getElementById("partition").appendChild(square);
    dialogueDone.play();
    waitingContinue = true;
}
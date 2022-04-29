// Declaring audio variables

let boom  = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// Declaring button variables

let button = document.querySelectorAll(".audio-button");
let q = document.getElementById("Q");
let a = document.getElementById("A");
let w = document.getElementById("W");
let s = document.getElementById("S");
let e = document.getElementById("E");
let d = document.getElementById("D");
let r = document.getElementById("R");
let f = document.getElementById("F");
let t = document.getElementById("T");

// Declaring image variables

let lilac = document.getElementById("image-lilac");
let grey = document.getElementById("image-grey");

document.addEventListener("keydown", (event) => {
    if (event.key == "q") {
        boom.play();
        q.style.backgroundColor = "#777283";
        setTimeout(function(){
            q.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "a") {
        clap.play();
        a.style.backgroundColor = "#777283";
        setTimeout(function(){
            a.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "w") {
        hihat.play();
        w.style.backgroundColor = "#777283";
        setTimeout(function(){
            w.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "s") {
        kick.play();
        s.style.backgroundColor = "#777283";
        setTimeout(function(){
            s.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "e") {
        openhat.play();
        e.style.backgroundColor = "#777283";
        setTimeout(function(){
            e.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "d") {
        ride.play();
        d.style.backgroundColor = "#777283";
        setTimeout(function(){
            d.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "r") {
        snare.play();
        r.style.backgroundColor = "#777283";
        setTimeout(function(){
            r.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "f") {
        tink.play();
        f.style.backgroundColor = "#777283";
        setTimeout(function(){
            f.style.backgroundColor = "#8775E1";
        },200);
    }
    else if (event.key == "t") {
        tom.play();
        t.style.backgroundColor = "#777283";
        setTimeout(function(){
            t.style.backgroundColor = "#8775E1";
        },200);
    }
})
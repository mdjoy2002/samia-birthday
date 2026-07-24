const surpriseBtn = document.querySelector(".btn");
const hero = document.querySelector(".container");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.querySelector(".envelope");
const topFlap = document.querySelector(".top");
const letterPaper = document.querySelector(".letter-paper");
const letterSection = document.getElementById("letter");

// প্রথমে Letter Hide থাকবে
letterSection.style.display = "none";

// Surprise Button
surpriseBtn.addEventListener("click", function (e) {

    e.preventDefault();

    hero.classList.add("hideHero");

    setTimeout(() => {

        envelopeSection.style.display = "flex";

        setTimeout(() => {

            envelopeSection.classList.add("showEnvelope");

        },100);

    },700);

});

// Envelope Click
envelope.addEventListener("click",function(){

    envelope.classList.add("open");

    setTimeout(()=>{

        envelopeSection.style.display="none";

        hero.style.display="none";

        letterSection.style.display="flex";

        letterSection.classList.add("showLetter");

        setTimeout(() => {

            typeLetter();

        },500);

    },1500);

});

// Back buttons: envelope and letter
const envelopeBackBtn = document.getElementById('envelopeBackBtn');
const letterBackBtn = document.getElementById('letterBackBtn');

if (envelopeBackBtn) {
    envelopeBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        envelopeSection.style.display = 'none';
        envelopeSection.classList.remove('showEnvelope');
        envelope.classList.remove('open');
        hero.style.display = 'flex';
        hero.classList.remove('hideHero');
    });
}

if (letterBackBtn) {
    letterBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        letterSection.style.display = 'none';
        letterSection.classList.remove('showLetter');
        hero.style.display = 'flex';
        hero.classList.remove('hideHero');

        // reset typing if present
        try {
            if (typeof index !== 'undefined') index = 0;
            if (typeof typingText !== 'undefined' && typingText) typingText.innerHTML = '';
        } catch (err) { }
    });
}
// ===========================
// Birthday Countdown
// ===========================

// এখানে Birthday Date পরিবর্তন করবে
const birthday = new Date("July 25, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        clearInterval(timer);

        // Show the birthday message briefly, then remove the countdown section entirely
        const msgEl = document.getElementById("birthdayMessage");
        if(msgEl) msgEl.innerHTML = "🎉 Happy Birthday Samia ❤️";

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        // Remove the countdown section after a short delay so user sees the message
        setTimeout(() => {
            const section = document.querySelector('.countdown-section');
            if(section) section.remove();
        }, 1200);

        return;
    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=String(days).padStart(2,"0");
    document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");
    document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0");
    document.getElementById("seconds").innerHTML=String(seconds).padStart(2,"0");

},1000);

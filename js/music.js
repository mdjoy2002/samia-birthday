const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// Set a gentle default volume (0.0 - 1.0)
if (music) {
    music.volume = 0.15; // soft, peaceful background
    music.loop = true;
}

// Track playing state; persist across pages
let playing = false;

function persistPlayingState() {
    try { localStorage.setItem('bgPlaying', playing ? 'true' : 'false'); } catch(e) {}
}

function updateButton() {
    if (!btn) return;
    btn.textContent = playing ? '⏸️' : '🎵';
}

// Try to autoplay softly. If browser blocks autoplay, wait for user interaction.
function tryAutoplay() {
    if (!music) return;
    // If user previously enabled music, try to resume automatically
    const wantPlay = (function(){
        try { return localStorage.getItem('bgPlaying') === 'true'; } catch(e){ return false; }
    })();

    if (wantPlay) {
        music.play().then(() => {
            playing = true;
            updateButton();
            persistPlayingState();
        }).catch(() => {
            // If blocked, wait for next user interaction to start
            const startOnInteraction = () => {
                music.play().then(() => {
                    playing = true;
                    updateButton();
                    persistPlayingState();
                }).catch(()=>{});
                window.removeEventListener('click', startOnInteraction);
                window.removeEventListener('keydown', startOnInteraction);
            };
            window.addEventListener('click', startOnInteraction, { once: true });
            window.addEventListener('keydown', startOnInteraction, { once: true });
        });
        return;
    }

    // Otherwise, attempt a soft autoplay once (no persistence)
    music.play().then(() => {
        playing = true;
        updateButton();
        persistPlayingState();
    }).catch(() => {
        const startOnInteraction = () => {
            music.play().then(() => {
                playing = true;
                updateButton();
                persistPlayingState();
            }).catch(()=>{});
            window.removeEventListener('click', startOnInteraction);
            window.removeEventListener('keydown', startOnInteraction);
        };
        window.addEventListener('click', startOnInteraction, { once: true });
        window.addEventListener('keydown', startOnInteraction, { once: true });
    });
}

if (btn) {
    btn.addEventListener('click', () => {
        if (!music) return;
        if (playing) {
            music.pause();
            playing = false;
            persistPlayingState();
        } else {
            music.play().then(() => {
                playing = true;
                persistPlayingState();
            }).catch(() => {
                // ignore play rejection
            });
        }
        updateButton();
    });
}

// Start the autoplay attempt when DOM is ready
document.addEventListener('DOMContentLoaded', tryAutoplay);
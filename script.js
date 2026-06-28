const textRenderer = document.getElementById('textRenderer');
const mainViewport = document.getElementById('mainViewport');
const displayCard = document.getElementById('displayCard');
const controlsTray = document.getElementById('controlsTray');

// Scene Navigation Controller
function changeSceneView(targetSceneId) {
    document.querySelectorAll('.scene-view').forEach(view => {
        view.classList.remove('active-view');
    });
    document.getElementById(targetSceneId).classList.add('active-view');
}

// Automatic Initialization Sequence Trigger
window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('envStars').style.opacity = '0.6';
    allocateParticles('✨', 8);
    await hold(4000); // Scene 1 Loading Wait Duration
    
    changeSceneView('envelopeScene');
});

// Scene 2 Envelope Interactive Handler
async function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.add('open');
    await hold(1200);
    
    changeSceneView('textScene');
    runMainTimelineSequence();
}

// Master Content Execution Matrix
async function runMainTimelineSequence() {
    // --- SCENE 3: Welcome Frame ---
    document.getElementById('envMoon').style.opacity = '1';
    document.getElementById('envMoon').style.top = '10%'; // Rise moon
    document.getElementById('envRain').style.opacity = '0.4';
    allocateParticles('🔥', 10); // Fireflies

    const introductionTokens = [
        "Hi Suchi Ma...", "My Thango...", "My Ammu...", 
        "My Chello...", "My Tiger Kutty...", "My Thanga Pulla..."
    ];
    for (let currentToken of introductionTokens) {
        await switchText(currentToken);
        await hold(2200);
    }

    // --- SCENE 4: Broken Heart Deep Ground Downpour ---
    document.getElementById('envRain').style.opacity = '0.8';
    mainViewport.style.background = '#f0a5b0';
    allocateParticles('💔', 6);
    
    const heartbreakMessages = [
        "I know I hurt you. 💔",
        "I know I made you cry.",
        "I know I made you feel distant.",
        "I can't change yesterday.",
        "But I can change tomorrow."
    ];
    for (let contextMessage of heartbreakMessages) {
        await switchText(contextMessage);
        await hold(2800);
    }

    // --- SCENE 5: Promises Segment ---
    document.getElementById('envRain').style.opacity = '0';
    mainViewport.style.background = 'radial-gradient(circle, #ffe5ec 0%, #ffc2d1 100%)';
    allocateParticles('🌹', 20);

    const protectivePromises = [
        "❤️ I'll respect your feelings.",
        "❤️ I'll listen before reacting.",
        "❤️ I'll protect your smile.",
        "❤️ I'll support your dreams.",
        "❤️ I'll keep choosing you.",
        "❤️ I'll work every day to earn your trust."
    ];
    for (let statement of protectivePromises) {
        await switchText(statement);
        await hold(3000);
    }

    // --- SCENE 6: Interactive Memory Book Frame ---
    changeSceneView('bookScene');
    allocateParticles('❤️', 12);
    await hold(5000); // View Time window for memory card layout placeholder

    // --- SCENE 7: Future Structural Setup ---
    changeSceneView('textScene');
    allocateParticles('🦋', 15);
    await switchText("I don't want a perfect love."); await hold(2500);
    await switchText("I want a love that grows stronger after every challenge. ✨"); await hold(3500);

    // --- SCENE 8: The Moon & Cinema Silhouette Layer ---
    displayCard.classList.add('hidden-view');
    document.getElementById('cinemaFloorLayer').style.opacity = '1';
    allocateParticles('🔥', 12);
    await hold(1000);

    // Walk actors together towards center frame position
    document.getElementById('boyNode').style.transform = 'translateX(115px)';
    document.getElementById('girlNode').style.transform = 'translateX(-115px)';
    await hold(6000);

    // Physical action arm frame transformation link loop
    document.getElementById('boyNode').querySelector('.actor-arm').style.transform = 'rotate(-30deg) translateX(5px)';
    document.getElementById('girlNode').querySelector('.actor-arm').style.transform = 'rotate(30deg) translateX(-5px)';
    allocateParticles('❤️', 25);
    await hold(5000); // 5 Seconds of absolute cinematic visual silence

    // --- SCENE 9: Interlocking Decisions Prompt Entrypoint ---
    displayCard.classList.remove('hidden-view');
    await switchText("Shall We Start Chapter 2 Together?");
    controlsTray.classList.add('active-tray');
}

// Selection Evaluator Logic System
async function processPathSelection(selectedChoice) {
    controlsTray.classList.remove('active-tray');
    
    if (selectedChoice === 'yes') {
        allocateParticles('💖', 40);
        allocateParticles('🦋', 30);
        allocateParticles('✨', 30); // Fireworks execution simulation
        document.getElementById('envMoon').style.boxShadow = '0 0 100px #ffffff';

        await switchText(`
            <div style="font-size:1.2rem; line-height:1.7;">
                Thank you for believing in us again.<br>
                I'll spend every day proving that your trust was worth it.<br>
                <strong style="color:var(--love-rose); font-size:1.5rem; display:block; margin-top:10px;">I Love You Suchi Ma ❤️</strong>
            </div>
        `);
    } else {
        await switchText(`
            <div style="font-size:1.15rem; line-height:1.6;">
                That's okay.<br>
                I understand that trust takes time.<br>
                I'll keep showing you through my actions.<br>
                I'll still be here. 🌸
            </div>
        `);
    }
    
    await hold(7000);
    runEndingSequence();
}

// --- SCENE 10: Final Cinema Sequence ---
async function runEndingSequence() {
    // Shooting Star Simulation Particle Injection Execution
    const spaceCanvas = document.getElementById('particleEmitterSpace');
    const meteorNode = document.createElement('div');
    meteorNode.style.cssText = 'position:absolute; width:80px; height:2px; background:linear-gradient(90deg, white, transparent); top:15%; left:-100px; transform:rotate(25deg); transition: all 1.8s linear; z-index:4;';
    spaceCanvas.appendChild(meteorNode);
    
    setTimeout(() => {
        meteorNode.style.left = '110vw';
        meteorNode.style.top = '45%';
    }, 100);

    await switchText(`
        <div style="font-size:1.2rem; opacity:0.95;">
            Every chapter teaches us something.<br>
            Thank you for reading ours.<br>
            <span style="color:var(--love-rose); font-weight:700; display:block; margin-top:10px; font-size:1.4rem;">Welcome to Chapter 2.</span>
        </div>
    `);
}

// Particle Allocation Helper Core
function allocateParticles(glyph, densityCount) {
    const spaceCanvasAnchor = document.getElementById('particleEmitterSpace');
    for(let offset = 0; offset < densityCount; offset++) {
        const elementInstance = document.createElement('div');
        elementInstance.className = 'live-particle';
        elementInstance.textContent = glyph;
        elementInstance.style.left = Math.random() * 100 + 'vw';
        elementInstance.style.fontSize = (Math.random() * 20 + 16) + 'px';
        elementInstance.style.animationDelay = (Math.random() * 2.5) + 's';
        spaceCanvasAnchor.appendChild(elementInstance);
        setTimeout(() => elementInstance.remove(), 4500);
    }
}

function switchText(stringMarkup) {
    return new Promise((completionCallback) => {
        textRenderer.style.opacity = '0';
        setTimeout(() => {
            textRenderer.innerHTML = stringMarkup;
            textRenderer.style.opacity = '1';
            completionCallback();
        }, 500);
    });
}

function hold(periodMs) { 
    return new Promise(resolvedState => setTimeout(resolvedState, periodMs)); 
}

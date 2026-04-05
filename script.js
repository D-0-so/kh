/* ============================================================
   1. ТОГТМОЛ УТГУУД БОЛОН ӨГӨГДӨЛ (Global Scope)
   ============================================================ */
const primes = [3, 5, 7, 11, 13, 17];

const flowerStyles = {
    3: { colors: ["#ff7eb9", "#ff5c9f"], size: 24, petals: 5, type: "type1", center: { color: "#ffea00", size: 8 } },
    5: { colors: ["#7afcff", "#00d8ff"], size: 22, petals: 6, type: "type2", center: { color: "#ffcc00", size: 7 } },
    7: { colors: ["#feff9c", "#ffd800"], size: 28, petals: 8, type: "type1", center: { color: "#ff9900", size: 9 } },
    11: { colors: ["#ff9a3c", "#ff6e00"], size: 26, petals: 5, type: "type3", center: { color: "#5e2f00", size: 8 } },
    13: { colors: ["#ff65a3", "#ff006e"], size: 20, petals: 7, type: "type4", center: { color: "#ffe600", size: 6 } },
    17: { colors: ["#e2a9ff", "#c840ff"], size: 30, petals: 6, type: "type5", center: { color: "#ffdf00", size: 10 } }
};

const leafTypes = [
    { radius: "0 100% 50% 50%", gradient: "linear-gradient(135deg, #3a8029, #5cad4a)", veinCount: 3, veinAngle: -5 },
    { radius: "0 70% 0 50%", gradient: "linear-gradient(135deg, #4a9e35, #65c143)", veinCount: 5, veinAngle: -15 },
    { radius: "50% 100% 50% 30%", gradient: "linear-gradient(135deg, #2e5d20, #4a9e35)", veinCount: 4, veinAngle: 0 },
    { radius: "10% 90% 20% 80%", gradient: "linear-gradient(135deg, #3a8029, #65c143)", veinCount: 6, veinAngle: -10 },
    { radius: "50% 50% 0 50%", gradient: "linear-gradient(135deg, #3d8c29, #5cad4a)", veinCount: 4, veinAngle: -8 }
];

const letterContents = {
    1: `喔我…..偷偷地爱上你，却不敢告诉你... (Таны бичвэр)`,
    2: `처음 누나를 봤을 때... (Таны Солон고스 бичвэр бүр엔 эхээрээ)`
};

let lettersReadCount = 0;

/* ============================================================
   2. ЦЭЦЭРЛЭГ ҮҮСГЭХ ФУНКЦҮҮД (Тодорхойлолт)
   ============================================================ */

function createNightSky() {
    console.log("Creating night sky..."); // Шалгах зорилгоор console-д хэвлэнэ
    const starsContainer = document.querySelector(".stars");
    if (!starsContainer) {
        console.error("Error: .stars container not found in HTML!");
        return;
    }
    for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty("--twinkle-duration", `${3 + Math.random() * 7}s`);
        star.style.setProperty("--twinkle-delay", `${Math.random() * 5}s`);
        star.style.setProperty("--min-opacity", Math.random() * 0.3);
        star.style.setProperty("--max-opacity", 0.4 + Math.random() * 0.4);
        starsContainer.appendChild(star);
    }
}

function createClouds() {
    console.log("Creating clouds...");
    const cloudsContainer = document.querySelector(".clouds");
    if (!cloudsContainer) {
        console.error("Error: .clouds container not found in HTML!");
        return;
    }
    for (let i = 0; i < 8; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.width = `${100 + Math.random() * 200}px`;
        cloud.style.height = `${50 + Math.random() * 40}px`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 50}%`;
        cloud.style.opacity = 0.1 + Math.random() * 0.3;
        cloud.style.animation = `cloudDrift ${100 + Math.random() * 100}s linear infinite`;
        cloudsContainer.appendChild(cloud);
    }
}

function createFlower(delay, specificPrime, minDepth, maxDepth, minHeight, maxHeight) {
    const garden = document.querySelector(".garden");
    if (!garden) return;
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const x = 5 + Math.random() * 90;
    const depthFactor = minDepth + Math.random() * (maxDepth - minDepth);
    const yPos = minHeight + Math.random() * (maxHeight - minHeight);

    flower.style.bottom = `${yPos}%`;
    flower.style.left = `${x}%`;
    const scale = 0.7 + depthFactor * 0.6;
    flower.style.setProperty("--scale", scale);
    flower.style.zIndex = Math.round(10 + depthFactor * 90);

    const stem = document.createElement("div");
    stem.classList.add("stem");
    const stemHeight = (30 + Math.random() * 50) * (0.8 + depthFactor * 0.4);
    stem.dataset.fullHeight = `${stemHeight}px`;

    flower.appendChild(stem);
    garden.appendChild(flower);

    setTimeout(() => {
        stem.style.height = stem.dataset.fullHeight;
    }, delay || 10);
}

function createGarden() {
    console.log("Creating garden...");
    const gardenContainer = document.querySelector(".garden");
    if (!gardenContainer) {
        console.error("Error: .garden container not found in HTML!");
        return;
    }
    // Анхны 50 цэцэг
    for (let i = 0; i < 50; i++) {
        createFlower(i * 50, null, 0.1, 1.0, 10, 45);
    }
}

function createFireflies() {
    console.log("Creating fireflies...");
    const container = document.querySelector(".fireflies");
    if (!container) {
        console.error("Error: .fireflies container not found in HTML!");
        return;
    }
    for (let i = 0; i < 15; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 60}%`;
        // Анимацид зориулсан санамсаргүй утгууд
        for (let j = 1; j <= 9; j++) {
            firefly.style.setProperty(`--x${j}`, `${(Math.random() - 0.5) * 100}px`);
            firefly.style.setProperty(`--y${j}`, `${(Math.random() - 0.5) * 100}px`);
        }
        container.appendChild(firefly);
        // Жаахан хүлээж байгаад харуулна
        setTimeout(() => { 
            firefly.style.opacity = "1"; 
            firefly.style.animation = `fireflyFloat ${5 + Math.random() * 5}s infinite ease-in-out`; 
        }, i * 200);
    }
}

/* ============================================================
   3. DOM АЧААЛАХАД АЖИЛЛАХ (Execution Block)
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Initializing garden...");
    
    // Одоо функцүүд нь Global Scope-д зарлагдсан тул алдаа заахгүй дуудагдана
    createNightSky();
    createClouds();
    createGarden();
    setTimeout(createFireflies, 500); // Гэрэлт цохуудыг жаахан хоцроож үүсгэнэ

    // 12 сек дараа "Цааш" товчлуурыг харуулна
    setTimeout(() => {
        const btn = document.getElementById('next1');
        if (btn) {
            btn.classList.remove('hidden');
            console.log("'Next' button revealed.");
        }
    }, 12000);
});

/* ============================================================
   4. ЛОГИК ФУНКЦҮҮД (Scene Switching & Interactivity)
   ============================================================ */
function goToLetters() {
    const audio = document.getElementById('audio');
    if (audio) {
        audio.play().catch(() => console.log("Дуу тоглуулахад алдаа гарлаа. Файл байгаа эсэхийг шалгана уу."));
    }
    const scene1 = document.getElementById('scene1');
    const scene2 = document.getElementById('scene2');
    if (scene1 && scene2) {
        scene1.classList.add('hidden');
        scene2.classList.remove('hidden');
    }
}

function openLetter(n) {
    const letterBtns = document.getElementById('letterBtns');
    const letterDisplay = document.getElementById('letterDisplay');
    const textContent = document.getElementById('textContent');
    const specificBtn = document.getElementById('lBtn' + n);

    if (letterBtns && letterDisplay && textContent && specificBtn) {
        letterBtns.classList.add('hidden');
        letterDisplay.classList.remove('hidden');
        textContent.innerText = letterContents[n];
        specificBtn.classList.add('hidden'); // Уншсан захианы товчлуурыг нууна
        lettersReadCount++;
    }
}

function closeLetter() {
    const letterDisplay = document.getElementById('letterDisplay');
    const letterBtns = document.getElementById('letterBtns');
    const scene2 = document.getElementById('scene2');
    const scene3 = document.getElementById('scene3');

    if (letterDisplay && letterBtns) {
        if (lettersReadCount < 2) {
            // Хэрэв хоёр захиаг хоёуланг нь уншаагүй бол буцаад захиа сонгох хэсэг рүү очино
            letterDisplay.classList.add('hidden');
            letterBtns.classList.remove('hidden');
        } else {
            // Хоёр захиаг уншсан бол дараагийн Scene рүү шилжинэ
            if (scene2 && scene3) {
                scene2.classList.add('hidden');
                scene3.classList.remove('hidden');
            }
        }
    }
}

function goToCake() {
    const scene3 = document.getElementById('scene3');
    const scene4 = document.getElementById('scene4');
    if (scene3 && scene4) {
        scene3.classList.add('hidden');
        scene4.classList.remove('hidden');
        
        // Торт гарч ирснээс 15 сек дараа товчлуур харуулна
        setTimeout(() => {
            const btn = document.getElementById('cakeNext');
            if (btn) btn.classList.remove('hidden');
        }, 15000);
    }
}

function goToPhoto() {
    const scene4 = document.getElementById('scene4');
    const scene5 = document.getElementById('scene5');
    if (scene4 && scene5) {
        scene4.classList.add('hidden');
        scene5.classList.remove('hidden');
    }
}

function goToFinal() {
    const scene5 = document.getElementById('scene5');
    const scene6 = document.getElementById('scene6');
    if (scene5 && scene6) {
        scene5.classList.add('hidden');
        scene6.classList.remove('hidden');
    }
}

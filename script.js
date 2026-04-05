/* ============================================================
   1. ТОГТМОЛ УТГУУД БОЛОН ӨГӨГДӨЛ
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
    2: `처음 누나를 봤을 때... (Таны Солонгос бичвэр бүрэн эхээрээ)`
};

let lettersReadCount = 0;

/* ============================================================
   2. ЦЭЦЭРЛЭГ ҮҮСГЭХ ФУНКЦҮҮД (Тодорхойлолт)
   ============================================================ */

function createNightSky() {
    const starsContainer = document.querySelector(".stars");
    if (!starsContainer) return;
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
    const cloudsContainer = document.querySelector(".clouds");
    if (!cloudsContainer) return;
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
    const

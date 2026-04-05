/* ============================================================
   1. ТАНЫ ӨГСӨН ЦЭЦЭГНИЙ УРТ КОД (Cicada Principle)
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
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

    // ... (Энд таны өгсөн createNightSky, createClouds, createGarden, createFlower, createFireflies функцууд бүгд яг хэвээрээ байна) ...
    // ТАНЫ ӨГСӨН КЕРНЕЛ ФУНКЦУУДЫГ ЭНД БҮГДИЙГ НЬ ХУУЛЖ ТАВИАРАЙ (би зай хэмнэх үүднээс товчлов)

    createNightSky();
    createClouds();
    createGarden();
    setTimeout(createFireflies, 500);

    // Цэцэгний анимаци (12 сек) дуусахад "Цааш" товчлуур гарна
    setTimeout(() => {
        const nextBtn = document.getElementById('next1');
        if(nextBtn) nextBtn.classList.remove('hidden');
    }, 12000);
});

/* ============================================================
   2. ТАНЫ ӨГСӨН ЛОГИК КОД (Хуудас шилжих хэсэг)
   ============================================================ */
let lettersReadCount = 0;

function goToLetters() {
    const audio = document.getElementById('audio');
    if(audio) audio.play();
    document.getElementById('scene1').classList.add('hidden');
    document.getElementById('scene2').classList.remove('hidden');
}

const letterContents = {
    1: `喔我…..
偷偷地爱上你
却不敢告诉你
因为我知道
我给不到你要的东西
喔我只能偷偷地爱上你
只能偷偷看着你
总是没勇气，总说不出
我真的曾经喜欢过你，真的很抱歉`,
    2: `처음 누나를 봤을 때, 선생님인 줄 알았어요.
그만큼 누나는 저에게 멀고도 대단한 사람이었어요.
그런데 알고 보니 선생님이 아니라, 제가 가까이에서 바라볼 수 있는 선배 누나였어요. 
공부를 싫어하던 저에게 시간을 내어 하나하나 가르쳐 주시고, 자신의 지식을 아낌없이 나눠 주는 모습이 정말 따뜻하고 빛나 보였어요. 
그때부터였을까요… 저는 어느 순간부터 누나에게 점점 익숙해졌고, 그 익숙함이 저도 모르게 큰 마음으로 변해 버렸어요. 
어느새 공부가 좋아졌고, 학교에 가는 이유가 누나가 되어 버렸어요. 오늘은 혹시 누나를 볼 수 있을까, 그런 기대를 안고 하루를 보내기도 했어요. 
하지만 저는 제 마음에만 빠져서, 누나의 마음은 제대로 보지 못했어요. 알면서도 해서는 안 될 말을 하고, 누나에게 상처를 주는 행동을 했어요. 정말… 많이 후회하고 있어요. 직접 찾아가서 사과하고 싶었지만, 누나 앞에 서면 아무 말도 할 수 없을 것 같아서 결국 이렇게밖에 표현하지 못하는 제가 너무 답답했어요. 그래서 이 시간 동안, 제 진심을 조금이라도 전하고 싶어서 몇 달 동안 코드를 쓰며 이 마음을 담았어요. 지난번 일에 대해 진심으로 사과하고 싶어요. 누나의 소중한 시간을 아프게 만든 것, 그리고 상처 준 모든 순간들… 정말 미안해요. 비록 늦었지만, 이 마음만큼은 진짜라는 걸 알아줬으면 좋겠어요. `
};

function openLetter(n) {
    document.getElementById('letterBtns').classList.add('hidden');
    document.getElementById('letterDisplay').classList.remove('hidden');
    document.getElementById('textContent').innerText = letterContents[n];
    document.getElementById('lBtn' + n).classList.add('hidden');
    lettersReadCount++;
}

function closeLetter() {
    if (lettersReadCount < 2) {
        document.getElementById('letterDisplay').classList.add('hidden');
        document.getElementById('letterBtns').classList.remove('hidden');
    } else {
        document.getElementById('scene2').classList.add('hidden');
        document.getElementById('scene3').classList.remove('hidden');
    }
}

function goToCake() {
    document.getElementById('scene3').classList.add('hidden');
    document.getElementById('scene4').classList.remove('hidden');
    // 15 секундын дараа товчлуур гарна
    setTimeout(() => {
        document.getElementById('cakeNext').classList.remove('hidden');
    }, 15000);
}

function goToPhoto() {
    document.getElementById('scene4').classList.add('hidden');
    document.getElementById('scene5').classList.remove('hidden');
}

function goToFinal() {
    document.getElementById('scene5').classList.add('hidden');
    document.getElementById('scene6').classList.remove('hidden');
}

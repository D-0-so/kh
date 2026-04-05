let lettersReadCount = 0;

window.onload = () => {
    // 1. Цэцэгний анимаци (12 сек) дуусахад товчлуур гарна
    setTimeout(() => {
        document.getElementById('next1').classList.remove('hidden');
    }, 12000);
};

function goToLetters() {
    document.getElementById('audio').play();
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
그런데 알고 보니 선생님이 아니라, 제가 가까이에서 바라볼 수 있는 선배 누나였어요. 공부를 싫어하던 저에게 시간을 내어 하나하나 가르쳐 주시고, 자신의 지식을 아낌없이 나눠 주는 모습이 정말 따뜻하고 빛나 보였어요. 그때부터였을까요… 저는 어느 순간부터 누나에게 점점 익숙해졌고, 그 익숙함이 저도 모르게 큰 마음으로 변해 버렸어요. 어느새 공부가 좋아졌고, 학교에 가는 이유가 누나가 되어 버렸어요. 오늘은 혹시 누나를 볼 수 있을까, 그런 기대를 안고 하루를 보내기도 했어요. 하지만 저는 제 마음에만 빠져서, 누나의 마음은 제대로 보지 못했어요. 알면서도 해서는 안 될 말을 하고, 누나에게 상처를 주는 행동을 했어요. 정말… 많이 후회하고 있어요. 직접 찾아가서 사과하고 싶었지만, 누나 앞에 서면 아무 말도 할 수 없을 것 같아서 결국 이렇게밖에 표현하지 못하는 제가 너무 답답했어요. 그래서 이 시간 동안, 제 진심을 조금이라도 전하고 싶어서 몇 달 동안 코드를 쓰며 이 마음을 담았어요. 지난번 일에 대해 진심으로 사과하고 싶어요. 누나의 소중한 시간을 아프게 만든 것, 그리고 상처 준 모든 순간들… 정말 미안해요. 비록 늦었지만, 이 마음만큼은 진짜라는 걸 알아줬으면 좋겠어요.`
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
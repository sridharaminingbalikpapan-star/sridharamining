const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'BAGUS !<br>Silahkan Kembali Bekerja<br><br><br><br><p style=color:red>SEMANGAT!!!</p>';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1.5;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1.5;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
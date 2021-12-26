const submitButton = document.querySelector('.submit__button');
const answerButton = document.querySelector('.answer__btn--training');
const clockAnimation = document.querySelector('.clock-animation');
const clockAnimationImg = document.querySelector('.clock-animation img');
const answer = document.querySelector('.answer');
const inputs = document.querySelectorAll('.submit input');
const inputJob = document.querySelector('.input-job');
const inputHour = document.querySelector('.input-hour');
const trainingJob = document.querySelector('.answer__wrap--job strong');
const trainingHour = document.querySelector('.answer__wrap--hour strong');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal .btn-close');
const shareButton = document.querySelector('.answer__btn--share');

let valueJob = '';
let valueHour = '';

// '나는 며칠동안 훈련해야 1만 시간이 될까?' 버튼을 클릭했을 때 시계가 돌아가는 애니메이션을 보여준 후 계산된 시간을 나타내 준다.
submitButton.addEventListener('click', showAnswer);

function showAnswer(e) {
  answer.classList.add('invisible');
  // input에 값이 입력되어 있는지 확인하고 비어있다면 비어있는 input으로 focus를 이동한다.
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert('입력되지 않았습니다.');
      inputs[i].focus();
      return;
    }
  }
  // input값을 저장한다.
  valueJob = inputJob.value;
  valueHour = inputHour.value;

  // 3초간 시계 애니메이션을 돌리게 한다.
  clockAnimation.classList.remove('invisible');
  clockAnimationImg.setAttribute('style', 'animation: 2.5s linear 1 running rotate-clock;');

  // 시간 계산 후에 answer section을 보여준다.
  setTimeout(() => {
    clockAnimation.classList.add('invisible');
    trainingJob.textContent = valueJob;
    trainingHour.textContent = Math.floor(10000 / valueHour);
    answer.classList.remove('invisible');
  }, 2500);
}

// '훈련하러 가기 Go! Go!' 버튼을 누르면 모달창을 보여준다.
// modal 바탕화면을 누르거나 close 버튼을 누르면 모달창이 꺼진다.
answerButton.addEventListener('click', showModal);
modalCloseButton.addEventListener('click', closeModal);
window.addEventListener('click', closeModal);

function showModal() {
  modal.classList.remove('invisible');
}

function closeModal(e) {
  if (e.target === modalCloseButton || e.target === modal) {
    modal.classList.add('invisible');
  }
}

// shareButton을 누르면 url이 복사된다.
shareButton.addEventListener('click', CopyUrlToClipboard);

function CopyUrlToClipboard() {
  const dummy = document.createElement("input");
  const text = location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert('URL이 복사되었습니다');
}

const circleCache1 = document.querySelector('#circle-1');
const circleCache2 = document.querySelector('#circle-2');
const circleCache3 = document.querySelector('#circle-3');
const circle4 = document.querySelector('#circle-4');
const circle5 = document.querySelector('#circle-5');
const circle6 = document.querySelector('#circle-6');
const buttonVerifier = document.querySelector('#verify-btn');
const buttonCommencer = document.querySelector('#commencer-btn');
const circlesCaches = document.querySelector('.circles-container');
const attemtps = document.querySelector('#attempts');

console.log(circlesCaches.children);

const getCirclesColors = function () {
  const colors = ['yellow', 'blue', 'red'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
  circleCache1.style.backgroundColor = randomColor;
  circleCache1.style.visiblity = 'hidden';
  circleCache2.style.backgroundColor = randomColor2;
  circleCache2.style.visiblity = 'hidden';
  circleCache3.style.backgroundColor = randomColor3;
  circleCache3.style.visiblity = 'hidden';
  circleCache1.textContent = '';
  circleCache2.textContent = '';
  circleCache3.textContent = '';

  // const circlesColorCache = [circleCache1, circleCache2, circleCache3];
  // const colors = ['yellow', 'blue', 'red'];
  // for (let i = 0; circlesColorCache.length; i++) {
  //   const randomColor = colors[Math.floor(Math.random) * colors.length];
  //   circlesColorCache[i].style.backgroundColor = randomColor;
  //   circlesColorCache[i].style.visibility = 'hidden';
  //   circlesColorCache[i].textContent = '';
  // }

  // [circle4, circle5, circle6].forEach(circle => {
  //   circle.addEventListener('click', () => {
  //     const currentColor = circle.style.backgroundColor;
  //     switch (currentColor) {
  //       case 'red':
  //         circle.style.backgroundColor = 'yellow';
  //         break;
  //       case 'yellow':
  //         circle.style.backgroundColor = 'blue';
  //         break;
  //       default:
  //         circle.style.backgroundColor = 'red';
  //     }
  //   });
  // });
};

circle4.addEventListener('click', () => {
  const currentColor = circle4.style.backgroundColor;
  switch (currentColor) {
    case 'red':
      circle4.style.backgroundColor = 'yellow';
      break;
    case 'yellow':
      circle4.style.backgroundColor = 'blue';
      break;
    default:
      circle4.style.backgroundColor = 'red';
  }
});

circle5.addEventListener('click', () => {
  const currentColor = circle5.style.backgroundColor;
  switch (currentColor) {
    case 'red':
      circle5.style.backgroundColor = 'yellow';
      break;
    case 'yellow':
      circle5.style.backgroundColor = 'blue';
      break;
    default:
      circle5.style.backgroundColor = 'red';
  }
});

circle6.addEventListener('click', () => {
  const currentColor = circle6.style.backgroundColor;
  switch (currentColor) {
    case 'red':
      circle6.style.backgroundColor = 'yellow';
      break;
    case 'yellow':
      circle6.style.backgroundColor = 'blue';
      break;
    default:
      circle6.style.backgroundColor = 'red';
  }
});

//Verification
buttonVerifier.addEventListener('click', () => {
  getCirclesColors();
  console.log('verified');
  console.log(circleCache1.style.backgroundColor);
  console.log(circle4.style.backgroundColor);
  console.log(circleCache2.style.backgroundColor);
  console.log(circle5.style.backgroundColor);
  console.log(circleCache3.style.backgroundColor);
  console.log(circle6.style.backgroundColor);

  if (
    circleCache1.style.backgroundColor === circle4.style.backgroundColor &&
    circleCache2.style.backgroundColor === circle5.style.backgroundColor &&
    circleCache3.style.backgroundColor === circle6.style.backgroundColor
  ) {
    console.log('you winn');
    attemtps.textContent = 'you win';
  } else {
    console.log('you lose');
  }
});

buttonCommencer.addEventListener('click', () => {
  circleCache1.style.backgroundColor = 'black';
  circleCache1.textContent = '?';
  circleCache2.style.backgroundColor = 'black';
  circleCache2.textContent = '?';
  circleCache3.style.backgroundColor = 'black';
  circleCache3.textContent = '?';
});

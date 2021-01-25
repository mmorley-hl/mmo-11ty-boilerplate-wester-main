import '../css/index.scss';

import barba from '@barba/core';
import barbaCss from '@barba/css';

console.log('Hello again1');

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background);
});

barba.init({
  transitions: [
    {
      name: 'home',
      sync: true,
      to: { namespace: ['home'] },
      once() {},
      leave() {},
      enter() {},
    }, {
      name: 'fade',
      to: { namespace: ['fade'] },
      leave() {},
      enter() {},
    }, {
      name: 'clip',
      sync: true,
      to: { namespace: ['clip'] },
      leave() {},
      enter() {},
    }, {
      name: 'with-cover',
      to: { namespace: ['with-cover'] },
      leave() {},
      enter() {},
    },
  ],
});
console.log('Hello again2');

// eslint-disable-next-line no-console
console.log('Hello again3');

Array.from(document.getElementsByTagName('p')).forEach((p, index) => {
  // eslint-disable-next-line no-console
  console.log(`p ${index}, startsWith('W')`, p, p.innerHTML.startsWith('W'));
});
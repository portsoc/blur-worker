import { blurImageData } from './blur.js';

addEventListener('message', (e) => {
  console.log('working');
  const result = blurImageData(...e.data);
  postMessage(result);
  console.log('done');
});

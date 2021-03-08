import { blurImageData } from './blur.js';

addEventListener('message', (e) => {
  const message = e.data;

  console.log('working on job', message.id);
  const result = blurImageData(message.imageData, message.n);
  console.log('work done on job', message.id);

  const responseMessage = {
    result,
    id: message.id,
  };
  postMessage(responseMessage);
});

const worker = new Worker('worker.js', { type: 'module' });

export function blurImageData(imageData, n = 3) {
  worker.postMessage([imageData, n]);
  return new Promise((resolve) => {
    worker.addEventListener('message', (e) => resolve(e.data));
  });
}

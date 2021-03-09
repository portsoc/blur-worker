const worker = new Worker('worker.js', { type: 'module' });

worker.addEventListener('message', handleResponse);

const responseReceivers = new Map();
let nextMessageId = 0;

function handleResponse(e) {
  const { result, id } = e.data;

  const receiver = responseReceivers.get(id);
  console.log('finished job', id);
  receiver(result);
  responseReceivers.delete(id);
}

export function blurImageData(imageData, n = 3) {
  const message = {
    imageData,
    n,
    id: nextMessageId,
  };
  nextMessageId += 1;

  console.log('submitting job', message.id);
  worker.postMessage(message);

  return new Promise((resolve) => {
    responseReceivers.set(message.id, resolve);
  });
}

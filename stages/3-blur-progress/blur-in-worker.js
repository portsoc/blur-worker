const worker = new Worker('worker.js', { type: 'module' });

worker.addEventListener('message', handleMessage);

const responseReceivers = new Map();
let nextMessageId = 0;

function handleMessage(e) {
  const { type, id } = e.data;
  const { receiver, reportProgress } = responseReceivers.get(id);

  if (type === 'done') {
    console.log('finished job', id);
    receiver(e.data.result);
    responseReceivers.delete(id);
  } else if (type === 'progress' && reportProgress) {
    reportProgress(e.data.progress);
  }
}

export function blurImageData(imageData, n = 3, reportProgress) {
  const message = {
    imageData,
    n,
    id: nextMessageId,
  };
  nextMessageId += 1;

  console.log('submitting job', message.id);
  worker.postMessage(message);

  return new Promise((resolve) => {
    responseReceivers.set(message.id, { receiver: resolve, reportProgress });
  });
}

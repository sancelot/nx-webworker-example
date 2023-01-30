// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

// it is imortant here to add ?worker
import MyWorker from '@nx-webworker-example/mywebworker?worker';

const worker = new MyWorker();
const ab = new ArrayBuffer(1);

worker.postMessage(ab, [ab]);
if (ab.byteLength) {
  console.log('Transferables are not supported in your browser!');
} else {
  // Transferables are supported.
}

worker.onmessage = (e: MessageEvent): void => {
  if (typeof e.data === 'string') {
    console.log('received from webworker :', e.data);
  }
};

export function App() {
  return (
    <>
      <NxWelcome title="my-app" />
      <div />
    </>
  );
}

export default App;

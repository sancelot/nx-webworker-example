console.log('in my worker ');
const ctx: Worker = self as any;
ctx.postMessage('hello world from webworker');

export default {};

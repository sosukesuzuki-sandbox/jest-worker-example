const { performance } = require("perf_hooks");
const JestWorker = require("jest-worker").default;

(async () => {
  const s = performance.now();
  const Worker = new JestWorker(require.resolve("./worker"), {
    enableWorkerThreads: true,
  });
  await Promise.all([
    Worker.omoiSyori().then(console.log),
    Worker.omoiSyori().then(console.log),
    Worker.omoiSyori().then(console.log),
  ]);
  const e = performance.now();
  console.log(`${e - s} ms`);
  process.exit(0);
})();

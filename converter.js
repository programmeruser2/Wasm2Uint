async function convertWasmFromURL(url) {
  const req = await fetch(url);
  const wasmArrayBuffer = await req.arrayBuffer();
  const result = await new Uint8Array(wasmArrayBuffer);
  await return result;
}

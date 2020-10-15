async function convertWasmFromURL(url) {
  const req = await fetch(url);
  const wasmArrayBuffer = await req.arrayBuffer();
  const result = new Uint8Array(wasmArrayBuffer);
  return result;
}
